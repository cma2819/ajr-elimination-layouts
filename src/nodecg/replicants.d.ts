import { CurrentGame, Games, Runners } from './generated';

export type ReplicantMap = {
  games: Games;
  runners: Runners;
  'current-game': CurrentGame;
};

export {
  Games,
  Runners,
  CurrentGame,
  ReplicantMap,
};
