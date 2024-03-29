import '../common.css';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { SummaryDisplay } from '../components/SummaryDisplay';

const ResultsArea = styled('div')`
    position: absolute;
    top: 32px;
    left: 0px;
    width: 1920px;
    height: 696px;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <ResultsArea>
        <SummaryDisplay />
      </ResultsArea>
    </ReplicantProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));