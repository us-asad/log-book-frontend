import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { IoMdRefresh } from 'react-icons/io';

export default function UnidentifiedEvents() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">Unidentified Events</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						Bulk Assign Events
					</Button>
					<Button className="flex items-center gap-1 group">
						<span>Refresh</span>
						<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				</div>
			</div>
			<div className="flex gap-2 mt-8">
				<DatePicker />
				<DatePicker placeholder="End Date" />
				<Select
					className="w-32"
					defaultValue="all"
					options={[
						{ label: 'All Vehicles', value: 'all' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
				<Select
					className="w-32"
					defaultValue="active"
					options={[
						{ label: 'Active', value: 'active' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
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
			<div className="overflow-auto max-h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Time
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Vehicle
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Event
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Status
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Location
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Odometer (mi)
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Engine Hours
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						<div className="px-3 py-2">No records found</div>
					</tbody>
				</table>
			</div>
			{/* <Button type="link" className="mx-auto block mt-2">
				Load More
			</Button> */}
		</div>
	);
}
