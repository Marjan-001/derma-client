import React from 'react';

const AppointmentOption = ({ treatmentOption, setTreatment }) => {
    
    const { name, slots } = treatmentOption;
    return (
        <div className="card w-full bg-blue-700 border border-blue-400  ">
            <div className="card-body items-center  text-center ">
                <h2 className=" card-title   text-white ">{name}</h2>
                <p className='text-white '>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='text-white mb-32 '>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                
                
                <div className="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(treatmentOption)}
                        htmlFor="booking-modal"
                        className="btn bg-white text-center text-blue-700">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;