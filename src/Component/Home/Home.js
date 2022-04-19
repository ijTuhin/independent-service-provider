import { faBicycle, faBowlFood, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import ServiceI from '../Services/ServiceI';
import ServiceII from '../Services/ServiceII';
import ServiceIII from '../Services/ServiceIII';
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
                            <p>Serve your tummy with our yummy food. <br /> Order for your parties, special days, or regular need. We offer micro event-specific set menus that's also fully customizable down to the level of spices and the length of the toothpick. Just contact us for a free consultation.</p>
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
                <p className='text-center pt-1 mt-1'>Catering all over the world is seen as a very sophisticated and respectable profession. <br /> This is because great caterers have the ability to put on extremely elegant <br /> and creative food experiences at any location chosen by a client. However, in Bangladesh, the reverse is true.</p>



                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="card-group service-container">
                                {
                                    services.slice(0,3).map(service => <ServiceI
                                        key={service.id}
                                        service={service}
                                    ></ServiceI>)
                                }
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div className="card-group service-container">
                                {
                                    services.slice(3,6).map(service => <ServiceII
                                        key={service.id}
                                        service={service}
                                    ></ServiceII>)
                                }
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div className="card-group service-container">
                                {
                                    services.slice(6,9).map(service => <ServiceIII
                                        key={service.id}
                                        service={service}
                                    ></ServiceIII>)
                                }
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-dark p-2" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-dark p-2" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>





            <div className='my-5 pt-5'>
                <h1 className='text-center pt-5 mt-5 fw-normal text-black-50'>A L W A Y S  <span className='mx-3 fw-bold text-warning'>O P E N</span></h1>
                <p className='fw-normal text-black-50 fs-6 text-center'>WE ARE NEVER CLOSED. WHATEVER BE THE CONDITIONS, YOU CAN ALWAYS COUNT ON ALPHA TO DELIVER.</p>
                <h4 className='text-center fw-normal text-black-50'>24/7 <span className='mx-1 fw-bold text-warning'>||</span> 365 Days</h4>
            </div>
            <div className='d-flex justify-content-center'>
                <div className=' home-icon mx-2 d-flex justify-content-center flex-column align-items-center fs-6'>
                    <FontAwesomeIcon className='fs-1 mt-1' icon={faBowlFood}></FontAwesomeIcon>
                    <small>Good Food</small>
                    </div>
                <div className=' home-icon mx-2 d-flex justify-content-center flex-column align-items-center fs-6'>
                    <FontAwesomeIcon className='fs-1 mt-1' icon={faBicycle}></FontAwesomeIcon>
                    <small>Home Delivery</small>
                </div>
                <div className=' home-icon mx-2 d-flex justify-content-center flex-column align-items-center fs-6'>
                    <FontAwesomeIcon className='fs-1 mt-1' icon={faShoppingCart}></FontAwesomeIcon>
                    <small>At your Door</small>
                    </div>
            </div>
        </div>
    );
};

export default Home;