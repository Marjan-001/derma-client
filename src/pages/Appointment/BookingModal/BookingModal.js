import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    
  const { name,slots } = treatment;
  const date = format(selectedDate, "PP")
  
  const handleBookingForm= e=>{
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const pName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {

      selectedDate: date,
      treatment: treatment.name,
      patient:pName,
      email,
      phone,
      slot
    }
console.log(booking)
    setTreatment(null)
  }
    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom  sm:modal-middle">
  <div className="modal-box">
                    <h3 className="font-bold text-lg text-blue-500">{name}</h3>
                     <label htmlFor="booking-modal" className="btn btn-sm btn-circle bg-blue-700 absolute right-2 top-2">✕</label>
            <form onSubmit={handleBookingForm} className=' grid  grid-cols-1 gap-1 justify-center items-center'>
              <input type="text"  value={date} className="input input-bordered mb-2 input-info w-full " disabled />
              <select name='slot' className="select select-bordered select-info w-full " >
  
                {
                  slots.map((slot,i) =>
                    <option value={slot}
                    key={i}
                    >{slot}</option>
                  )
  }
</select>
              <input name="name" type="text" placeholder="Your Name" className="input input-bordered mb-2 input-info w-full " />
              <input name="email" type="email" placeholder="Your Email" className="input input-bordered mb-2 input-info w-full " />
              <input name="phone" type="number" placeholder="Your Phone Number" className="input input-bordered mb-2 input-info w-full " />
          <br/>
              <input className='w-full  btn bg-blue-600' type='submit' value="Submit" />
            </form>
            
  
  </div>
</div> 
        </>
    );
};

export default BookingModal;