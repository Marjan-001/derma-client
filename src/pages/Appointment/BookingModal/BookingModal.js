import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    
  const { name,slots } = treatment;
  const date = format(selectedDate,"PP")
    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom  sm:modal-middle">
  <div className="modal-box">
                    <h3 className="font-bold text-lg text-blue-500">{name}</h3>
                     <label htmlFor="booking-modal" className="btn btn-sm btn-circle bg-blue-700 absolute right-2 top-2">✕</label>
            <form className=' grid grid-cols-1 gap-1 justify-center items-center'>
              <input type="text"  value={date} className="input input-bordered mb-2 input-info w-full " disabled />
              <select className="select select-bordered select-info w-full ">
  
                {
                  slots.map(slot =>
                    <option value={slot}>{ slot}</option>
                  )
  }
</select>
              <input type="text" placeholder="Type here" className="input input-bordered mb-2 input-info w-full " />
          <br/>
              <input className='w-full  btn bg-blue-600' type='submit' value="Submit" />
            </form>
            
  
  </div>
</div> 
        </>
    );
};

export default BookingModal;