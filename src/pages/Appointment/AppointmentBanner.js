import React, { useState } from 'react';
import appointmentImg from "../../assests/images/appointment.jpg"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {


  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p className='text-blue-500'>Your appointment date is : {format(selectedDate, 'PP')}.</p>;
  }
    return (
        <div>
            <section className="p-6 ">
                <div className="container grid gap-6  mx-auto  lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full  py-16 rounded-md text-center sm:px-12 md:px-16 xl:col-span-2">
                        <span className="block mb-2  text-center text-blue-500">Choose your appointment date</span>
                        <DayPicker
      mode="single"
      selectedDate={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
                        
                    </div>
                    <img src={appointmentImg} alt="" className="object-cover w-full rounded-md xl:col-span-3" />
                </div>
            </section>
        </div>
    );
};

export default AppointmentBanner;