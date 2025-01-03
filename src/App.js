import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home'; // Corrected the import
import Search from './Search'; // Corrected the import
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure the correct import path

const App = () => {
    return (
        <div className="App"> 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search/:imgname" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
