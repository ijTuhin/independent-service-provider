import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
const ServiceI = ({ service }) => {
    const { name, services, price, img } = service;
    const navigate = useNavigate();
    console.log(img)
    return (
        <div className="card shadow rounded-lg" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top rounded-lg img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{services}</p>
                <p className="card-text">Price: {price}</p>
            </div>
            <div className='card-footer'>
                <button onClick={()=>navigate('/checkout')} className='btn py-2 service-btn'>Book Service</button>
            </div>
        </div>
    );
};

export default ServiceI;