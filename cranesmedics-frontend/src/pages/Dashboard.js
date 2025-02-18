import React from 'react';
import PatientPortal from '../pages/PatientPortal';
import DoctorPortal from '../pages/DoctorPortal';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => window.location.href = '/patient'}>Go to Patient Portal</button>
      <button onClick={() => window.location.href = '/doctor'}>Go to Doctor Portal</button>
    </div>
  );
};

export default Dashboard;
