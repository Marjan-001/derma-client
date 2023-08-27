import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';


const ManageDoctor = () => {
const {data: doctors =[] ,refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://derma-server.vercel.app/doctors')
            const data = await res.json();
            return data;
        }
})
    
    const handleDeletedoctor = id => {
		fetch(`https://derma-server.vercel.app/doctors/${id}`)
			.then(res => res.json())
			.then(data => {
				
				if (data.acknowledged) {
					toast.success('User Deleted Successfully');
					refetch();
				}
			})
	}
    return (
         <div>
			<h3 className='p-2 mb-2 text-xl font-semibold text-blue-600 '>All Doctors</h3>

			<div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
				<div className="overflow-x-auto">
					<table className="min-w-full text-xs">
						<thead className="rounded-t-lg">
							<tr className="border-b bg-blue-200  border-blue-500">
								<th  className="p-3 text-left ">No.</th>
								<th  className="p-3 text-left">Name</th>
								<th className="p-3 text-left">Email</th>
								<th className="p-3 text-left">Specialty</th>
								<th className="p-3 text-left">Delete</th>
								

							</tr>
						</thead>
						<tbody >

							{ 
								
								doctors?.map((doctor, i) =>
									<tr className=' border-b  border-blue-500' key={doctor._id} >
										<td className="px-3 py-2 text-left">
											{i + 1}
										</td>
										<td className="px-3 py-2 text-left">
											{doctor.name}
										</td>
										<td className="px-3 py-2">
											{doctor.email}
										</td>
										<td className="px-3 py-2">
											{doctor.specialty}
										</td>
										<td >{ doctor?.role !=='admin'&& <button onClick={() => handleDeletedoctor(doctor._id)} className='btn btn-xs border-hidden btn-error'>Delete</button>}</td>
										

									</tr>

									)
							}




						</tbody>
					</table>
				</div>
			</div>




		</div>
    );
};

export default ManageDoctor;