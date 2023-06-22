import React from 'react';
import { Button, Input, Select } from 'antd';
import { MdSort } from 'react-icons/md';
import { AiFillAndroid, AiOutlinePlus } from 'react-icons/ai';
import PageHeader from '../../../components/common/PageHeader';
import { useNavigate } from 'react-router-dom';

export default function ManageDrivers() {
  const navigate = useNavigate();

	return (
		<div>
			<PageHeader
				title="Manage Drivers"
				buttons={
					<Button onClick={() => navigate("/portal/manage-drivers/add")} className="flex items-center gap-1 group">
            <span>Add Driver</span>
						<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				}
			/>
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-max border-collapse">
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
									<span>Username / Email</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="table-th text-start">
								Cycle
							</th>
							<th className="table-th text-start">
								Groups
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Assigned Vehicles</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>

							<th className="table-th text-start">
								Sim Card
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>App Ver.</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>OS</span>
									<Select
										size="small"
										className="w-28"
										defaultValue="all"
										options={[
											{ value: 'all', labale: 'All' },
											{ value: 'android', labale: 'Android' },
											{ value: 'ios', labale: 'iOS' },
										]}
									/>
								</div>
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
									Username2
								</td>
								<td className="table-td">
									USA 70 hour / 8 day
								</td>
								<td className="table-td"></td>
								<td className="table-td">
									576
								</td>
								<td className="table-td">
									8901260295780568152
								</td>
								<td className="table-td">
									2.22.25
								</td>
								<td className="table-td">
									<div className="flex items-center gap-1">
										<AiFillAndroid className="text-green-600 text-lg" />
										<span>13</span>
									</div>
								</td>
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
