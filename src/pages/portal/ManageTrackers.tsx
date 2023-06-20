import React from 'react';
import { Button, Input, Select } from 'antd';
import { IoMdRefresh } from 'react-icons/io';
import { MdSort } from 'react-icons/md';

export default function ManageTrackers() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">Manage GPS Trackers</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						<span>Refresh</span>
						<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				</div>
			</div>
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start w-56">
								<div className="flex flex-col gap-1">
									<span>Tracker ID</span>
									<Input size="small" placeholder="Search" className="w-56" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start w-56">
								<div className="flex flex-col gap-1">
									<span>Sim Card</span>
									<Input size="small" placeholder="Search" className="w-56" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1 mb-1">
									<span>Status</span>
									<MdSort />
								</button>
								<Select
									size="small"
									className="w-full"
									defaultValue="all"
									options={[
										{ value: 'all', labale: 'All' },
										{ value: 'active', labale: 'Active' },
										{ value: 'inactive', labale: 'Inactive' },
									]}
								/>
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
