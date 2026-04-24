import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components for each module here
import Employees from './modules/Employees';
import Payroll from './modules/Payroll';
import Attendance from './modules/Attendance';
import LeaveManagement from './modules/LeaveManagement';
import PerformanceReviews from './modules/PerformanceReviews';
import Recruitment from './modules/Recruitment';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/employees" component={Employees} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/attendance" component={Attendance} />
        <Route path="/leave-management" component={LeaveManagement} />
        <Route path="/performance-reviews" component={PerformanceReviews} />
        <Route path="/recruitment" component={Recruitment} />
        <Route path="/" exact component={() => <h1>Welcome to HRMS</h1>} />
      </Switch>
    </Router>
  );
};

export default App;