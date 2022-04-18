import React, { useEffect, useState } from 'react';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='home-container'>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='text-secondary fw-bold fst-italic fs-2'>Foodie Food</h1>
                            <small className='text-secondary fw-bold fst-italic fs-5'>Catering Service</small>
                            <p>Serve your tummy with our yummy food. <br /> Order for your parties, special days, or regular need.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='text-light fw-bold fst-italic fs-2'>Foodie Food</h1>
                            <small className='text-light fw-bold fst-italic fs-5'>Catering Service</small>
                            <p>Serve your tummy with our yummy food. <br /> Order for your parties, special days, or regular need. </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <h2 className='text-center pt-5 mt-5'>Our Services</h2>
                <div className="card-group service-container">
                    {
                        services.map(service => <Services
                            key={service.id}
                            service={service}
                        ></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;