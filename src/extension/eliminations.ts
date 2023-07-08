import clone from 'clone';
import { NodeCG } from './nodecg';

type Dependencies = {
  nodecg: NodeCG
}

export const eliminations = ({ nodecg }: Dependencies): void => {
  const logger = new nodecg.Logger('Eliminations');
    
  const currentGameReplicant = nodecg.Replicant('current-game', { defaultValue: null });
  const gamesReplicant = nodecg.Replicant('games');
  const runnersReplicant = nodecg.Replicant('runners');

  const updateCurrentGame = (index: number) => {
    if (!gamesReplicant.value || !runnersReplicant.value) {
      return;
    }
    const game = clone(gamesReplicant.value.find(g => g.index === index));
    if (!game) {
      currentGameReplicant.value = null;
      return;
    }
    const runners = clone(runnersReplicant.value.filter(r => game.summaries.find(s => s.runnerPk === r.pk)));

    currentGameReplicant.value = {
      index: game.index,
      name: game.name,
      category: game.category,
      summaries: [ ...game.summaries ].sort((a, b) => a.rank - b.rank).map(s => {
        const runner = runners.find(r => r.pk === s.runnerPk);
        if (!runner) {
          throw new Error('Runner does not exist in runner Replicant!');
        }
        return {
          rank: s.rank,
          done: s.done,
          score: s.score,
          runner,
        };
      }),
    };
  };

  nodecg.listenFor('select-current-game', (index) => {
    try {
      updateCurrentGame(index);
    } catch (e) {
      logger.error(e);
    }
  });
};