import React from 'react';
import { Input, Select } from 'antd';
import { MdSort } from 'react-icons/md';
import { NoRecords, PageHeader } from '../../components/common';

export default function ManageTrackers() {
	return (
		<div>
			<PageHeader title="Manage GPS Trackers" />
			<div className="overflow-auto h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full relative">
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start w-56">
								<div className="flex flex-col gap-1">
									<span>Tracker ID</span>
									<Input size="small" placeholder="Search" className="w-56" />
								</div>
							</th>
							<th className="table-th text-start w-56">
								<div className="flex flex-col gap-1">
									<span>Sim Card</span>
									<Input size="small" placeholder="Search" className="w-56" />
								</div>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
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
						<NoRecords />
					</tbody>
				</table>
			</div>
		</div>
	);
}
