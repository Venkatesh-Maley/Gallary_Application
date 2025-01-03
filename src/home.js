import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'; // Ensure the correct import path

const Home = () => {
    const navigate = useNavigate(); 
    const [imgname, setImgname] = useState('');

    const handleSearch = () => {
        if (imgname) {
            navigate(`/search/${imgname}`);
        }
    };

    return (
        <div className="bgimage">
            <div className="container my-3">
                <div className="row justify-content-between align-items-center w-100">
                    <h3 className="brandname col-auto text-white">PIXELVERSE</h3>
                    <div className="authentication col-auto">
                        <h5 className="text-white d-inline-block mx-3 auth-link">LOGIN</h5>
                        <h5 className="text-white d-inline-block mx-3 auth-link">SIGNUP</h5>
                    </div>
                </div>
            </div>
            <div className="container text-center search-section">
                <h2 className="text-white my-3">Amazing Royalty Free Images & Wallpapers are Available Here</h2>
                <h6 className="text-white mb-4">Over 4.5 million+ high quality stock images are shared by our talented community.</h6>

                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search for images"
                        value={imgname}
                        onChange={(e) => setImgname(e.target.value)}
                    />
                    <button
                        className="btn btn-primary ml-2 mt-2 mt-md-0"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
