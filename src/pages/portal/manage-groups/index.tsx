import React from 'react';
import { Button, Input } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { NoRecords, PageHeader } from '../../../components/common';
import { useNavigate } from 'react-router-dom';

export default function ManageGroups() {
  const navigate = useNavigate();

	return (
		<div>
			<PageHeader
				title="Manage Groups"
				buttons={
					<Button onClick={() => navigate("/portal/manage-groups/add")} className="flex items-center gap-1 group">
						<span>Add Group</span>
						<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				}
			/>
			<div className="overflow-auto h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full relative">
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
						<NoRecords />
					</tbody>
				</table>
			</div>
		</div>
	);
}
