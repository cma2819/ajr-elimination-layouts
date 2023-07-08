import React from 'react';
import styled from 'styled-components';
import { useReplicant } from '../../../hooks/nodecg';
import { DisplayGame } from './DisplayGame';
import { DisplaySummary } from './DisplaySummary';

const ParentContainer = styled('div')`
height: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
`;

const Container = styled('div')`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    row-gap: 8px;
    grid-column: 2 / 3;
`;

export const SummaryDisplay = () => {
  const currentGame = useReplicant('current-game');

  return (
    <ParentContainer>
      { currentGame && (
        <Container>
          <DisplayGame index={currentGame.index} game={currentGame.name} category={currentGame.category} />
          { currentGame.summaries.map(summary => (
            <div style={{ marginLeft: '16px' }}>
              <DisplaySummary
                key={summary.rank}
                icon={summary.runner.thumbnailUrl}
                runner={summary.runner.name}
                done={summary.done}
                score={summary.score}
              />
            </div>
          ))}
        </Container>
      )}
    </ParentContainer>
  );
};