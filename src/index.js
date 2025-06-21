import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import CompanyReviewPage from './components/CompanyReviewPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Router>
      <Routes>
        <Route path="*" element={<CompanyReviewPage />} />
      </Routes>
    </Router>
  
);

