import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientPortal = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('/api/patients')
      .then((response) => setPatients(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Patient Portal</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientPortal;
