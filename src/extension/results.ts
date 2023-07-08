import { NodeCG } from './nodecg';
import { google } from 'googleapis';
import { REST, Routes } from 'discord.js';

type Dependencies = {
  nodecg: NodeCG;
};

type EliminationJson = {
  updated_at: string;
  data: {
    game: string;
    category: string;
    type: 'average' | 'point';
    results: {
      rank: number;
      runner: string;
      discordId: string;
      done: number;
      score: string;
    }[];
  }[];
};

export const results = ({ nodecg }: Dependencies): void => {
  const gamesReplicant = nodecg.Replicant('games', { defaultValue: [] });
  const runnersReplicant = nodecg.Replicant('runners', { defaultValue: [] });
  const googleConfig = nodecg.bundleConfig.google;
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: googleConfig.serviceAccount.email,
      private_key: googleConfig.serviceAccount.private,
    },
    scopes: [ 'https://www.googleapis.com/auth/drive' ],
  });
  const discordConfig = nodecg.bundleConfig.discord;
  const discordApi = new REST({ version: '10' }).setToken(discordConfig.token);

  const drive = google.drive({ version: 'v3', auth });

  const fetchResult = async (fileId: string) => {
    const eliminationJson = await drive.files.get({
      fileId,
      alt: 'media',
      uploadType: 'media',
    });
    const { data } = eliminationJson.data as EliminationJson;

    const runners = data
      .flatMap(({ results }) =>
        results.map((r) => ({
          discordId: r.discordId,
          name: r.runner,
        }))
      )
      .filter(
        (runner, idx, runners) =>
          runners.findIndex((r) => r.discordId === runner.discordId) === idx
      );

    gamesReplicant.value = data.map(({ game, category, results }, idx) => ({
      index: idx,
      name: game,
      category,
      summaries: results.map((r) => ({
        rank: r.rank,
        runnerPk: r.discordId,
        done: r.done,
        score: r.score,
      })),
    }));
    runnersReplicant.value = await Promise.all(
      runners.map(async (runner) => {
        const discordGuildMember = (await discordApi.get(
          Routes.guildMember(discordConfig.guildId, runner.discordId)
        )) as { avatar?: string; user: { avatar: string } };
        const [ guildAvatar, userAvatar ] = [
          discordGuildMember.avatar,
          discordGuildMember.user.avatar,
        ];
        return {
          pk: runner.discordId,
          name: runner.name,
          thumbnailUrl: guildAvatar
            ? `https://cdn.discordapp.com/guilds/${discordConfig.guildId}/users/${runner.discordId}/avatars/${guildAvatar}.png`
            : `https://cdn.discordapp.com/avatars/${runner.discordId}/${userAvatar}.png`,
        };
      })
    );
  };

  if (nodecg.bundleConfig.defaultJsonId) {
    fetchResult(nodecg.bundleConfig.defaultJsonId);
  }

  nodecg.listenFor('import-result', async (urlOrFileId, cb) => {
    if (cb && cb.handled) {
      return;
    }
    try {
      const url = new URL(urlOrFileId);
      const [ _empty, _file, _d, fileId ] = url.pathname.split('/');
      await fetchResult(fileId);
    } catch {
      await fetchResult(urlOrFileId);
      cb?.(null);
    }
  });
};
