import '../common.css';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { CurrentTime } from '../components/CurrentTime';
import { RectangleLogo } from '../components/RectangleLogo';

const CurrentTimeArea = styled('div')`
    position: absolute;
    top: 64px;
    padding: 8px 16px 8px 64px;
    background-color: red;
`;

const LogoArea = styled('div')`
    position: absolute;
    top: 32px;
    right: 32px;
    width: 128px;
    height: 128px;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <CurrentTimeArea>
        <CurrentTime />
      </CurrentTimeArea>
      <LogoArea>
        <RectangleLogo />
      </LogoArea>
    </ReplicantProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));