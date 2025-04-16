import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';


import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Inventory from './components/Inventory/Inventory';
import HumanResource from './components/HumanResource/HumanResource.jsx';
import Messaging from './components/Messaging/Messaging.jsx';
import Branches from './components/Branches/Branches.jsx';
import InquiryForm from './components/Inquiry/InquiryForm.jsx';
import Charts from './Charts.jsx';

function App() {

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(el => new window.bootstrap.Tooltip(el));
  }, []);

  return( 
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Charts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/humanResource" element={<HumanResource />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/branches" element={ <Branches /> } />
        <Route path="/admin" element={ <InquiryForm /> } />

      </Routes>
  );
}

export default App;