import { clone } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { CurrentGame, Games, Runners } from '../nodecg/generated';
import { BundleNodecgInstance } from '../nodecg/nodecg';

type Replicants = {
  games: Games;
  runners: Runners;
  'current-game': CurrentGame;
}

const defaultValues: Replicants = {
  games: [],
  runners: [],
  'current-game': null,
};

export const ReplicantContext = createContext<Replicants>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ReplicantProvider = ({ children }: Props) => {
  nodecg as BundleNodecgInstance;

  const [ gamesRep, setGamesRep ] = useState<Games>(defaultValues.games);
  const [ runnersRep, setRunnersRep ] = useState<Runners>(defaultValues.runners);
  const [ currentGameRep, setCurrentGameRep ] = useState<CurrentGame>(defaultValues['current-game']);

  useEffect(() => {
    nodecg.Replicant('games').on('change', (newVal) => {
      setGamesRep(clone(newVal));
    });
    nodecg.Replicant('runners').on('change', (newVal) => {
      setRunnersRep(clone(newVal));
    });
    nodecg.Replicant('current-game').on('change', (newVal) => {
      setCurrentGameRep(clone(newVal));
    });
  }, []);

  return (
    <ReplicantContext.Provider value={{
      games: gamesRep,
      runners: runnersRep,
      'current-game': currentGameRep,
    }}>
      { children }
    </ReplicantContext.Provider>
  );
};
