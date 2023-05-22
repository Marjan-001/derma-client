import React from 'react';
import treatment from './treatmentcard.css'
import imgg from '../../../assests/images/pexels-anna-shvets-5069604.jpg'
import { Link } from 'react-router-dom';
const TreatmentCard = ({ treatment }) => {
    const { name, price, description, image } = treatment
    return (

        <div className="wrapper">

            <div className="card">
                <div className="front">
                    <img src={image} className='border rounded-2xl shadow-blue-300' alt="" />
                </div>
                <div className="back bg-blue-50 border border-blue-100 shadow-lg shadow-blue-300 text-center py-32 ">
                    <h2 className='text-blue-950 text-2xl font-semibold '>{name}</h2>
                    <h4 className='text-xl font-bold text-blue-700'>${price}</h4>
                    <p className='text-lg font-semibold  text-blue-950 mt-2'>{description}</p>
                    <div className='flex items-end justify-center mt-4'>
                        <Link to="/appointment"><button className='btn border-none  bg-gradient-to-r from-blue-200 to-blue-300 text-blue-950 font-bold'>Appointment</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TreatmentCard;