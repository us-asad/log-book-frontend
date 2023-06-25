import React from 'react';
import { Button, Input, Select } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSort } from 'react-icons/md';
import { PageHeader } from '../../components/common';
import { useNavigate } from 'react-router-dom';

export default function ManageVehicles() {
	const navigate = useNavigate();

	return (
		<div>
			<PageHeader
				title="Manage Vehicles"
				buttons={
					<Button onClick={() => navigate("/portal/manage-vehicles/add")} className="flex items-center gap-1 group">
						<span>Add Vehicle</span>
						<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				}
			/>
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
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
							<th className="table-th text-start">
								Make / Model
							</th>
							<th className="table-th text-start">
								ELD
							</th>
							<th className="table-th text-start">
								Groups
							</th>
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
						{[...new Array(20)].map((_, idx) => (
							<tr key={idx}>
								<td className="table-td">
									Name1 Name2
								</td>
								<td className="table-td">
									Pending
								</td>
								<td className="table-td">
									Volvo VNL
								</td>
								<td className="table-td">
									3B5000052624 (C8:FB:C3:36:74:35)
								</td>
								<td className="table-td"></td>
								<td className="table-td">
									Active
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
