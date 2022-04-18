import React from 'react';
import './Services.css';
const Services = ({ service }) => {
    const { name, services, price, img } = service;
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
            <button className='btn btn-secondary'>Book Service</button>
            </div>
        </div>
    );
};

export default Services;