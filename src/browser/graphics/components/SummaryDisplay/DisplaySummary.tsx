import React from 'react';
import styled from 'styled-components';
import Background from '../../resources/area_runner.png';
import { FontSize } from '../../rules';
import { DoneCounter } from './DoneCounter';

type Props = {
  icon: string;
  runner: string;
  score: string;
  done: number;
}

const Panel = styled('div')`
    width: 1180px;
    height: 89px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${Background});
    color: white;
    position: relative;
`;

const IconArea = styled('div')<{url: string}>`
    position: absolute;
    top: 0px;
    left: 46px;
    width: 88px;
    height: 88px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${props => `url(${props.url})`};
    clip-path: circle(50%);
`;

const SummaryArea = styled('div')`
    position: absolute;
    top: 18px;
    left: 144px;
    font-size: ${FontSize.small}px;
    width: 1000px;
    display: grid;
    grid-template-columns: 2fr 1fr auto;
    grid-column-gap: 32px;
    align-items: center;
`;

const RunnerArea = styled('div')`
    grid-column: 1 / 2;
    font-size: ${FontSize.small}px;
`;

const ScoreArea = styled('div')`
    grid-column: 2 / 3;
    font-size: ${FontSize.small}px;
`;

const CounterArea = styled('div')`
    grid-column: 3 / 4;
`;

export const DisplaySummary = ({ icon, runner, score, done }: Props) => {
  return (
    <Panel>
      <IconArea url={icon}></IconArea>
      <SummaryArea>
        <RunnerArea>
          {runner}    
        </RunnerArea>
        <ScoreArea>
          {score}
        </ScoreArea>
        <CounterArea>
          <DoneCounter done={done} required={5} max={7} />
        </CounterArea>
      </SummaryArea>
    </Panel>
  );
};