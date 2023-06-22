import React from 'react';
import { Button, Select } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSort } from 'react-icons/md';
import PageHeader from '../../../components/common/PageHeader';
import NoRecords from '../../../components/common/NoRecords';
import { Link } from 'react-router-dom';

export default function MaintenanceReminders() {
	return (
		<div>
			<PageHeader
				title="Maintenance Reminders"
				buttons={
					<>
						<Button>
							<Link className="flex items-center gap-1 group" to="/portal/maintenance-reminders/add">
								<span>Add Reminder</span>
								<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
							</Link>
						</Button>
						<Button className="flex items-center gap-1 group">
							Copy Reminder
						</Button>
					</>
				}
			/>
			<div className="flex gap-2 mt-8">
				<Select
					className="w-28"
					defaultValue="all"
					options={[
						{ value: 'all', label: 'All Vehicles' },
						{ value: '1', label: '0001' },
						{ value: '2', label: '001' },
						{ value: '3', label: '002' },
					]}
				/>
			</div>
			<div className="overflow-auto h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full relative">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Vehicle
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Service Type
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Service Interval
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Next Service Due</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Complete
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Action
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
