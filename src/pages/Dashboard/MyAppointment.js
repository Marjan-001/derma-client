import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {
	const { user } = useContext(AuthContext);
	const url = `http://localhost:5000/bookings?email=${user?.email}`
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

			<div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
				<div className="overflow-x-auto">
					<table className="min-w-full text-xs">
						<thead className="rounded-t-lg">
							<tr className="">
								<th  className="p-3 text-left ">#</th>
								<th  className="p-3 text-left">Name</th>
								<th className="p-3 text-left">Treatment</th>
								<th className="p-3 text-left">Date</th>
								<th className="p-3 text-left">Time</th>

							</tr>
						</thead>
						<tbody>

							{
								bookings.map((booking, i) =>
									<tr className=' border-b border-opacity-20 border-blue-700' >
										<td className="px-3 py-2 text-left">
											{i + 1}
										</td>
										<td className="px-3 py-2 text-left">
											{booking.patient}
										</td>
										<td className="px-3 py-2">
											{booking.treatment}
										</td>
										<td className="px-3 py-2">
											{booking.selectedDate}
										</td>
										<td className="px-3 py-2">
											{booking.slot}
										</td>


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

export default MyAppointment;