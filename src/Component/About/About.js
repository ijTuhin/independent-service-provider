import { faBarChart, faComputer, faFaceSmile, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import about from '../../images/about.jpg';
import './About.css';
const About = () => {
    return (
        <div className='container mt-5'>
            <section className='about'>
                <img src={about} alt="" />
                <hr />
                <div className=''>
                    <h1 className='d-flex flex-row justify-content-end me-5 pe-2'>ISRAT JAHAN TUHIN</h1>
                    <p className='d-flex flex-row justify-content-end text-end me-5 pe-2 fs-6 text-secondary'>LinkedIn: https://www.linkedin.com/in/israt-jahan-tuhin-2795bb1b7/<br />GitHub: https://github.com/ijTuhin <br /> Email address : ijTuhin638@gmail.com<br /> Phone number: +880-1316797638 <br /> From Chattagram, Bangladesh.</p>
                </div>
                <hr />
            </section>
            <section>
                <h2 className='text-secondary'>About <span className='text-warning'>Me</span></h2>
                <div className='d-flex flex-row justify-content-start ms-5 align-items-end text-secondary'>
                    <FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon>
                    <span className='hr-line border border-secondary '></span>
                    <span className='d-inline px-2 text-start text-dark text-sm-wrap'>
                    I am a Student at Internationation Islamic University Chittagong, Completing B.Sc. in Computer Science & Engineering.
                    </span>
                </div><br />
                <div className='d-flex flex-row justify-content-start ms-5 align-items-end text-secondary'>
                    <FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon>
                    <span className='hr-line border border-secondary '></span>
                    <span className='d-inline px-2 text-start text-dark text-sm-wrap'>Learning Developing skills to be a Frontend Developer. Currently I am confident about my skills in HTML, CSS, Tailwind, Bootstrap, JS</span>
                </div><br />
                <div className='d-flex flex-row justify-content-start ms-5 align-items-end text-secondary'>
                    <FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon>
                    <span className='hr-line border border-secondary '></span>
                    <span className='d-inline px-2 text-start text-dark text-sm-wrap'>I am learning React.js as well. In Sha Allah, soon I'll be able to work as Jr. Frontend Developer.</span>
                </div><br />
                <div className='d-flex flex-row justify-content-start ms-5 align-items-end text-secondary'>
                    <FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon>
                    <span className='hr-line border border-secondary '></span>
                    <span className='d-inline px-2 text-start text-dark text-sm-wrap'>Actively looking forward to work as a trainee or intern to develop my skills & get some experience.</span>
                </div>
                <br /><br /><br />
                <hr /> <br /><br />
            </section>
            <section className=' d-flex justify-content-start goal'>
                <h2 className=' goal-txt text-secondary'>Future <span className='text-warning'>Goals</span></h2>
                <span className='hr-line-II border-top border-3 border-secondary'></span>
                <div className='goal-box me-3 text-center'>
                    <FontAwesomeIcon className='fs-1 mt-5' icon={faPeopleGroup}></FontAwesomeIcon>
                    <p className='text-center'>Happy family.</p>
                </div>
                <div className='goal-box mx-3 text-center'>
                    <FontAwesomeIcon className='fs-1 mt-5' icon={faComputer}></FontAwesomeIcon>
                    <p className='text-center'>Successful Career</p>
                </div>
                <div className='goal-box ms-3 text-center'>
                    <FontAwesomeIcon className='fs-1 mt-5' icon={faFaceSmile}></FontAwesomeIcon>
                    <p className='text-center'>Inner Satisfaction</p>
                </div>
            </section>
        </div>
    );
};

export default About;