import React from 'react';
import ReactDOM from 'react-dom';
import { ReplicantProvider } from '../../ReplicantProvider';
import { ImportResult } from '../components/ImportResult';
import { DashboardThemeProvider } from '../DashboardThemeProvider';

const App = () => {
  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <ImportResult />
      </ReplicantProvider>
    </DashboardThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));