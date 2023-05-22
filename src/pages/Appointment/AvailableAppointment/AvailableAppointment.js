import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='mt-16'>
            <h1 className='text-center text-blue-500  text-xl md:text-2xl lg:text-2xl font-bold'> Available Appointments on {format(selectedDate,'PP')} </h1>
    
        </section>
    );
};

export default AvailableAppointment;