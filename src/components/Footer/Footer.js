import React from 'react';
import { HomeIcon, PhoneIcon, ClockIcon, MailIcon } from '@heroicons/react/solid'
import './Footer.css'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'
import facebook from '../../img/facebook (1).png'
import linkedin from '../../img/linkedin.png'
import youtube from '../../img/youtube.png'
import whatsapp from '../../img/whatsapp.png'



const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div style=
                {{
                    backgroundColor: '#22577A',
                    marginLeft: '15%',
                    marginRight: '0px'

                }}
                className='mt-5 container'
            >
                <div className="row text-white container">


                    <div className='col-md-4 my-5'>
                        <h4 className='mb-3 text-start'>Contact Us</h4>
                        <div className='text-start'>
                            <p className='my-1'><HomeIcon className="font-size text-blue-500" />
                                No: 58 A, East Madison Street,</p>
                            <p className='my-1 ms-4'>Baltimore, MD, USA 4508</p>
                            <p className='my-1'>
                                <PhoneIcon className="font-size text-blue-500" />
                                01825-343708</p>
                            <p className='my-1'>
                                <ClockIcon className="font-size text-blue-500" />
                                9.30AM - 7.30PM</p>
                            <p className='my-1'>
                                <MailIcon className="font-size text-blue-500" />
                                avirus170@gmail.com</p>
                        </div>
                    </div>



                    <div className='col-md-4 my-5'>
                        <h4 className='text-start'>Links</h4>
                    </div>


                    <div className='col-md-4 my-5 text-start'>
                        <h4 className='mb-3'>Connect</h4>
                        <div>
                            <img className='social-icon me-4 mt-2 mb-4' src={instagram} alt="" />
                            <img className='social-icon me-4 mt-2 mb-4' src={twitter} alt="" />
                            <img className='social-icon me-4 mt-2 mb-4' src={facebook} alt="" />
                        </div>
                        <div>
                            <img className='social-icon me-4' src={youtube} alt="" />
                            <img className='social-icon me-4' src={linkedin} alt="" />
                            <img className='social-icon me-4' src={whatsapp} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <small><span>&copy;</span> {year} Hikeventures all right Reserved</small>
            </div>
        </>
    );
};

export default Footer;