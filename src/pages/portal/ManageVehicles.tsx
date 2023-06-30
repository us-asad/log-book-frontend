import { useState, useEffect } from 'react';
import { Button, Input, Select } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSort } from 'react-icons/md';
import { NoRecords, PageHeader } from '../../components/common';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../utils/functions';
import { Vehicle } from '../../types';

export default function ManageVehicles() {
	const navigate = useNavigate();
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		setVehicles(getData('vehicles') || []);
	}, []);

	return (
		<div>
			<PageHeader
				title="Manage Vehicles"
				buttons={
					<Button
						onClick={() => navigate('/portal/manage-vehicles/add')}
						className="flex items-center gap-1 group"
					>
						<span>Add Vehicle</span>
						<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				}
			/>
			<div className="relative overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-max min-w-full border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Name</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Licence Plate</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="table-th text-start">Make / Model</th>
							<th className="table-th text-start">ELD</th>
							<th className="table-th text-start">Groups</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<div className="flex flex-col gap-1">
									<button className="flex items-center gap-1">
										<span>Status</span>
										<MdSort />
									</button>
									<Select
										size="small"
										className="w-28"
										defaultValue="all"
										options={[
											{ value: 'all', labale: 'All' },
											{ value: 'active', labale: 'Active' },
											{ value: 'inactive', labale: 'Inactive' },
										]}
									/>
								</div>
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{vehicles?.length ? (
							vehicles.map((vehicle: Vehicle, idx) => (
								<tr
									key={idx}
									className="table-tr-hoverable"
									onClick={() =>
										navigate(`/portal/manage-vehicles/edit/${vehicle.id}`)
									}
								>
									<td className="table-td">{vehicle.vehicleUnit}</td>
									<td className="table-td">Pending</td>
									<td className="table-td">
										{vehicle.make} {vehicle.model}
									</td>
									<td className="table-td">{vehicle.eld}</td>
									<td className="table-td"></td>
									<td className="table-td">
										{vehicle?.status ? 'Active' : 'Inactive'}
									</td>
								</tr>
							))
						) : (
							<tr>
								<td>
									<NoRecords />
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
