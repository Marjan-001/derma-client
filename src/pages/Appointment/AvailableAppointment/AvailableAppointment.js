import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatmentOptions, setTreatmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
     useEffect(() => {
        fetch('treatmentData.json')
            .then(res => res.json())
            .then(data => setTreatmentOptions(data))

    }, [])
    return (
        <section className='mt-16'>
            <h1 className='text-center text-blue-500  text-xl md:text-2xl lg:text-2xl font-bold'> Available Appointments on {format(selectedDate,'PP')} </h1>
     <div className='grid gap-4 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    treatmentOptions.map(treatmentOption => 
                        <AppointmentOption
                        
                         key={treatmentOption._id}
                        treatmentOption={treatmentOption}
                            setTreatment={setTreatment}
                        >
                            

                    </AppointmentOption>
                    
                    )
                }

            </div>
        </section>
    );
};

export default AvailableAppointment;