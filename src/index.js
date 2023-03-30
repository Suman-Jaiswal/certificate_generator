import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Culturals from './Culturals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/:hasheduri" element={<App />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/culturals" element={<Culturals />} />
                <Route path="/" element={
                    <div className='mt-5 text-center fw-bold h5'>Not Found</div>
                } />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

