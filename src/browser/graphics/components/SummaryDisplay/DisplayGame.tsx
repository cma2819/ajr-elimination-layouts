import React from 'react';
import styled from 'styled-components';
import Background from '../../resources/area_game.png';
import { FontSize } from '../../rules';

type Props = {
  index: number;
  game: string;
  category: string;
}

const Panel = styled('div')`
    width: 1280px;
    height: 166px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${Background});
    color: white;
    position: relative;
`;

const GameArea = styled('div')`
    position: absolute;
    top: 16px;
    left: 68px;
    font-size: ${FontSize.large}px;
`;

const CategoryArea = styled('div')`
    position: absolute;
    bottom: 24px;
    left: 88px;
    font-size: ${FontSize.small}px;
`;

export const DisplayGame = ({ game, category }: Props) => {
  return (
    <Panel>
      <GameArea>
        {game}
      </GameArea>
      <CategoryArea>
        {category}
      </CategoryArea>
    </Panel>
  );
};