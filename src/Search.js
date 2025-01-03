import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'; // Ensure the correct import path

const Search = () => {
    const { imgname } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pixabay.com/api/?key=16962999-4dcd965ed7dd57e19188f8092&q=${imgname}&image_type=photo`);
                setData(response.data.hits);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [imgname]);

    return (
        <div className="search">
            <div className="container">
                <div className="row">
                    {data && data.map(imgObj =>
                        <div className="col-12 col-sm-6 col-md-4 mb-4" key={imgObj.id}>
                            <div className="card h-100">
                                <img className="card-img-top" src={imgObj.largeImageURL} alt={imgObj.tags} />
                                <div className="card-body">
                                    <h5 className="card-title">{imgObj.tags}</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
