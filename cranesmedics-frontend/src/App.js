import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PatientPortal from './pages/PatientPortal';
import DoctorPortal from './pages/DoctorPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patient" element={<PatientPortal />} />
        <Route path="/doctor" element={<DoctorPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
