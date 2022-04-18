import React, { useEffect, useState } from 'react';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[]);
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
                            <h5>Service Provider</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Blanditiis rem nihil odit placeat cumque voluptates ipsam <br /> assumenda distinctio nobis fuga quibusdam odio ut sequi, <br /> reprehenderit dignissimos magni exercitationem dolore quis delectus <br /> amet vero sed dolorem porro? Eum animi illum hic ullam harum, <br /> nemo incidunt nesciunt asperiores autem quibusdam reiciendis modi.Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Dolore unde commodi dignissimos. Error, optio? Cupiditate, <br /> fuga placeat non ducimus, quod sequi in quos cumque tempora, distinctio nulla vel et expedita?<br /> Aut odio ullam veniam fuga placeat, veritatis ab cumque quas nostrum provident <br /> nobis tenetur dicta labore quis laudantium sed quidem atque illum quibusdam consectetur. <br /> Incidunt fugiat, dignissimos harum praesentium error iusto? </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Service Provider</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Blanditiis rem nihil odit placeat cumque voluptates ipsam <br /> assumenda distinctio nobis fuga quibusdam odio ut sequi, <br /> reprehenderit dignissimos magni exercitationem dolore quis delectus <br /> amet vero sed dolorem porro? Eum animi illum hic ullam harum, <br /> nemo incidunt nesciunt asperiores autem quibusdam reiciendis modi.Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Dolore unde commodi dignissimos. Error, optio? Cupiditate, <br /> fuga placeat non ducimus, quod sequi in quos cumque tempora, distinctio nulla vel et expedita?<br /> Aut odio ullam veniam fuga placeat, veritatis ab cumque quas nostrum provident <br /> nobis tenetur dicta labore quis laudantium sed quidem atque illum quibusdam consectetur. <br /> Incidunt fugiat, dignissimos harum praesentium error iusto? </p>
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

            <div className="card-group">
                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default Home;