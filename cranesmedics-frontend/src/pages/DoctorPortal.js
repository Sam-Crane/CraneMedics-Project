import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorPortal = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('/api/doctor-patients')
      .then((response) => setPatients(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Doctor Portal</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorPortal;
