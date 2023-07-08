import React from 'react';
import ReactDOM from 'react-dom';
import { ReplicantProvider } from '../../ReplicantProvider';
import { SwitchElimination } from '../components/SwitchElimination';
import { DashboardThemeProvider } from '../DashboardThemeProvider';

const App = () => {
  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <SwitchElimination />
      </ReplicantProvider>
    </DashboardThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));