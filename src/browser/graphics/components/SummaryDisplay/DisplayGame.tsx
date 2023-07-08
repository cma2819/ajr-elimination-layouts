import React from 'react';
import styled from 'styled-components';
import Background from '../../resources/area_game.png';

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
    font-size: 48px;
`;

const CategoryArea = styled('div')`
    position: absolute;
    bottom: 24px;
    left: 76px;
    font-size: 32px;
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