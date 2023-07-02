import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUser = () => {
    const {data: allusers =[] ,refetch} = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers')
            const data = await res.json();
            return data;
        }
	})
	const handleMakeAdmin = id => {
		
		fetch(`http://localhost:5000/allusers/admin/${id}`,
			{
				method: 'PUT',
				headers: {
					authorization:`bearer ${localStorage.getItem('accessToken')}`
				}
			})
			.then(res => res.json())
			.then(data => {
				
				if (data.acknowledged) {
					toast.success('Made admin successfully');
					refetch();
				}
			})

	}

	const handleDeleteUser = id => {
		fetch(`http://localhost:5000/allusers/${id}`)
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
			<h3 className='p-2 mb-2 text-xl font-semibold text-blue-600 '>All Users</h3>

			<div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
				<div className="overflow-x-auto">
					<table className="min-w-full text-xs">
						<thead className="rounded-t-lg">
							<tr className="border-b bg-blue-200  border-blue-500">
								<th  className="p-3 text-left ">No.</th>
								<th  className="p-3 text-left">Name</th>
								<th className="p-3 text-left">Email</th>
								<th className="p-3 text-left">Admin</th>
								<th className="p-3 text-left">Delete</th>
								

							</tr>
						</thead>
						<tbody >

							{
								
								allusers?.map((user, i) =>
									<tr className=' border-b  border-blue-500' key={user._id} >
										<td className="px-3 py-2 text-left">
											{i + 1}
										</td>
										<td className="px-3 py-2 text-left">
											{user.firstname}
										</td>
										<td className="px-3 py-2">
											{user.email}
										</td>
										<td >{user?.role !=='admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs border-hidden bg-blue-500'>Make Admin</button>}</td>
										<td >{ user?.role !=='admin'&& <button onClick={() => handleDeleteUser(user._id)} className='btn btn-xs border-hidden btn-error'>Delete</button>}</td>
										

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

export default AllUser;