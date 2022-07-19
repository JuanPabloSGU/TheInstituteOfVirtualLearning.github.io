import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CatherinePage from './pages/tutors/CatherinePage';
import BrandonPage from './pages/tutors/BrandonPage';
import RaymondPage from './pages/tutors/RaymondPage';
import EmmyPage from './pages/tutors/EmmyPage';
import ScrollToTop from './utils/ScrollToTop';
import DiagnosticPage from './pages/diagnositc/DiagnositcsPage';
import CSPage from './pages/Subjects/Technology/CSPage';
import SoftwarePage from './pages/Subjects/Engineering/SoftwarePage';
import LinearPage from './pages/Subjects/Mathematics/LinearPage';
import PhysicsPage from './pages/Subjects/Science/PhysicsPage';
import AlgosNDataPage from './pages/Subjects/Technology/pages/algosndataPage';
import DiagnositcsPageFR from './pages/diagnositc/DiagnosticsPageFR';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/DiagnosticsPage' element={<DiagnosticPage/>} />
            <Route path='/DiagnosticsPageFR' element={<DiagnositcsPageFR/>} />
            <Route path="/CatherineTutor" element={<CatherinePage/>} />
            <Route path="/BrandonTutor" element={<BrandonPage/>} />
            <Route path='/RaymondTutor' element={<RaymondPage/>} />
            <Route path='/EmmyTutor' element={<EmmyPage/>} />
            <Route path='/ComputerScience' element={<CSPage/>} />
            <Route path='/AlgosNDataPage' element={<AlgosNDataPage/>} />
            <Route path='/SoftwareEngineering' element={<SoftwarePage/> } />
            <Route path='/LinearAlgebra' element={<LinearPage/>} />
            <Route path='/Physics' element={<PhysicsPage/>}/>
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
