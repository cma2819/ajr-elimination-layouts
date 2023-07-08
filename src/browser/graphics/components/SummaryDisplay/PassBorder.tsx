import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../rules';

const Container = styled('div')`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    column-gap: 8px;
    align-items: center;
    color: white;
    font-size: ${ FontSize.small * 0.75 }px;
`;

const Border = styled('div')`
    height: 2px;
    background-color: white;
`;

export const PassBorder = () => {
  return (
    <Container>
      <Border style={{ gridColumn: '1 / 2' }} />
      <div style={{ gridColumn: '2 / 3' }}>予選通過ライン</div>
      <Border style={{ gridColumn: '3 / 4' }} />
    </Container>
  );
};