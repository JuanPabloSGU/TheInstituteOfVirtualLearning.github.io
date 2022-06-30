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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/DiagnosticsPage' element={<DiagnosticPage/>} />
            <Route path="/CatherineTutor" element={<CatherinePage/>} />
            <Route path="/BrandonTutor" element={<BrandonPage/>} />
            <Route path='/RaymondTutor' element={<RaymondPage/>} />
            <Route path='/EmmyTutor' element={<EmmyPage/>} />
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
