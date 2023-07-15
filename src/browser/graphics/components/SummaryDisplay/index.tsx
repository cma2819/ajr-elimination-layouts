import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import { useReplicant } from '../../../hooks/nodecg';
import { DisplayGame } from './DisplayGame';
import { DisplaySummary } from './DisplaySummary';
import { PassBorder } from './PassBorder';
import DefaultIcon from '../../resources/logo_rect.png';
import './styles.css';

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

const BorderArea = styled('div')`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const SummaryDisplay = () => {
  const currentGame = useReplicant('current-game');

  return (
    <ParentContainer>
      <SwitchTransition>
        <CSSTransition
          key={currentGame?.index}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames='fade'
        >
          <Container>
            { currentGame && (
              <>
                <DisplayGame index={currentGame.index} game={currentGame.name} category={currentGame.category} />
                { currentGame.summaries.map((summary, idx) => (
                  <div 
                    key={summary.rank}
                    style={{ marginLeft: '16px' }}
                  >
                    <DisplaySummary
                      icon={summary.runner.thumbnailUrl ?? DefaultIcon}
                      runner={summary.runner.name}
                      done={summary.done}
                      score={summary.score}
                    />
                    {
                      idx === 2 && (
                        <BorderArea>
                          <PassBorder />
                        </BorderArea>
                      )
                    }
                  </div>
                ))}
              </>
            )}
          </Container>
        </CSSTransition>
      </SwitchTransition>
    </ParentContainer>
  );
};