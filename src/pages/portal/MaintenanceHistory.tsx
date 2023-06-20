import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import PageHeader from '../../components/common/PageHeader';
import NoRecords from '../../components/common/NoRecords';

export default function MaintenanceHistory() {
	return (
		<div>
			<PageHeader
				title="Maintenance History"
				buttons={
					<Button className="flex items-center gap-1 group">
						<span>Add Event</span>
						<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				}
			/>
			<div className="flex gap-2 mt-8">
				<DatePicker />
				<DatePicker placeholder="End Date" />
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
				<Select
					className="w-32"
					defaultValue="desc"
					options={[
						{ label: 'Date (desc.)', value: 'desc' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
			</div>
			<div className="overflow-auto h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full relative">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Date Completed
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Vehicle
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Service Type
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Odometer
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Engine Hours
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Cost
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Notes
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
