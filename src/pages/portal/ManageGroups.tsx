import { Button, Input } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';

export default function ManageGroups() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">Manage Groups</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						<span>Add Group</span>
						<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
					<Button className="flex items-center gap-1 group">
						<span>Refresh</span>
						<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				</div>
			</div>
			<div className="overflow-auto max-h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start w-56">
								<div className="flex flex-col gap-1">
									<span>Name</span>
									<Input size="small" placeholder="Search" className="w-56" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Drivers
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Vehicles
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						<div className="px-3 py-2">No records found</div>
					</tbody>
				</table>
			</div>
		</div>
	);
}
