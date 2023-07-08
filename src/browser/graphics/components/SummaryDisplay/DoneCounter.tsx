import React from 'react';
import styled from 'styled-components';
import DoneBg from '../../resources/light_done.png';
import RequiredBg from '../../resources/slot_required.png';
import OptionalBg from '../../resources/slot_optional.png';

type Props = {
  done: number;
  required: number;
  max: number;
}

const Container = styled('div')<{slots: number}>`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.slots}fr)`};
    grid-column-gap: 4px;
`;

const Slot = styled('div')<{index: number}>`
    height: 32px;
    width: 32px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    grid-column-start: ${props => props.index + 1};
`;

const DoneSlot = styled(Slot)`
    background-image: url(${DoneBg});
`;

const RequiredSlot = styled(Slot)`
    background-image: url(${RequiredBg});
`;

const OptionalSlot = styled(Slot)`
    background-image: url(${OptionalBg});
`;

export const DoneCounter = ({ done, required, max }: Props) => {
  const slots = new Array(max).fill(true).map((_, idx) => idx < done);
  return (
    <Container slots={max}>
      { slots.map((done, index) => (
        <React.Fragment key={index}>
          {
            done ? (
              <DoneSlot key={index} index={index} />
            ) : (
              index < required ? (<RequiredSlot index={index} />) : (<OptionalSlot index={index} />)
            )
          }
        </React.Fragment>
      ))}
    </Container>
  );
};