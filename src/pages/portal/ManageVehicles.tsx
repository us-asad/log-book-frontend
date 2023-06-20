import { Button, Input, Select } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import { MdSort } from 'react-icons/md';

export default function ManageVehicles() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">Manage Vehicles</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						<span>Add Event</span>
						<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
					<Button className="flex items-center gap-1 group">
						<span>Refresh</span>
						<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				</div>
			</div>
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-max min-w-full border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Name</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Licence Plate</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Make / Model
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								ELD
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Groups
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
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
								<td className="border border-black-2 border-solid px-3 py-2">
									Name1 Name2
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									Pending
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									Volvo VNL
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									3B5000052624 (C8:FB:C3:36:74:35)
								</td>
								<td className="border border-black-2 border-solid px-3 py-2"></td>
								<td className="border border-black-2 border-solid px-3 py-2">
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
