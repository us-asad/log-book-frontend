import React from 'react';
import { Input, Select } from 'antd';
import { MdSort } from 'react-icons/md';
import { AiFillAndroid } from 'react-icons/ai';
import PageHeader from '../../components/common/PageHeader';

export default function ManageDrivers() {
	return (
		<div>
			<PageHeader title="Manage Drivers" />
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-max border-collapse">
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
									<span>Username / Email</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Cycle
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Groups
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Assigned Vehicles</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>

							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Sim Card
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>App Ver.</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
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
									Username2
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									USA 70 hour / 8 day
								</td>
								<td className="border border-black-2 border-solid px-3 py-2"></td>
								<td className="border border-black-2 border-solid px-3 py-2">
									576
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									8901260295780568152
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									2.22.25
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									<div className="flex items-center gap-1">
										<AiFillAndroid className="text-green-600 text-lg" />
										<span>13</span>
									</div>
								</td>
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
