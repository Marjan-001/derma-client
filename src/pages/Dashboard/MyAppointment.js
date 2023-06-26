import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url =`http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
           <h3 className='p-2 mb-2 text-xl font-semibold text-blue-600 '>My Appointments</h3> 
        <div className="overflow-x-auto mr-2  ">
  <table className="table w-full ">
    {/* head */}
    <thead >
      <tr >
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200 ">
       {
        bookings.map((booking,i)=>
            <tr key={booking._id}>
        <th>{i+1}</th>
        <td>{booking.patient}</td>
        <td>{booking.treatment}</td>
        <td>{booking.selectedDate}</td> 
        <td>{booking.slot}</td>
        </tr>
        )
       }
      </tr>
      
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;