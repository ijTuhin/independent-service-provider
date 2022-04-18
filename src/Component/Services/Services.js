import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
const Services = ({ service, handleServiceBookings }) => {
    const { name, services, price, img } = service;
    const navigate = useNavigate();
    console.log(img)
    return (
        <div className="card shadow rounded" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{services}</p>
                <p className="card-text">{price}</p>
            </div>
            <div className='card-footer bg-transparent'>
            <button onClick={()=>navigate('/checkout')} className='btn btn-secondary'>Book Service</button>
            </div>
        </div>
    );
};

export default Services;