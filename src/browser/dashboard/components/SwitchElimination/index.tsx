import React from 'react';
import Stack from '@mui/material/Stack';
import { SelectElimination } from './SelectElimination';
import styled from 'styled-components';
import { useReplicant } from '../../../hooks/nodecg';
import { EliminationSummaries } from './EliminationSummaries';

const ListArea = styled('div')`
  min-height: 640px;
`;

export const SwitchElimination = () => {

  const games = useReplicant('games');
  const currentGame = useReplicant('current-game');

  return (
    <Stack spacing={2}>
      {
        games && (
          <SelectElimination games={games} current={currentGame} />
        )
      }
      <ListArea>
        <EliminationSummaries current={currentGame} />
      </ListArea>
    </Stack>
  );
};