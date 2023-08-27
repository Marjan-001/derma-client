import { format } from 'date-fns';
import React, {  useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {
    
    const [treatment, setTreatment] = useState(null)
const date= format(selectedDate,'PP')
    const {data:treatmentOptions=[] ,refetch,isLoading} = useQuery({
        
        queryKey: ['appointmentOptions',date],
        queryFn: () => 
            fetch(`https://derma-server.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json()) 
        
    })
    if (isLoading) {
           return <div className="w-16 h-16 mx-auto items-center  border-4 border-dashed rounded-full animate-spin border-blue-400"></div>

    }
   
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

                {
                    treatment &&
                    <BookingModal
                    treatment={treatment}
                            selectedDate={selectedDate}
                            setTreatment={setTreatment}
                            refetch={refetch}
                        >
                            

                    </BookingModal>
                }

            </div>
        </section>
    );
};

export default AvailableAppointment;