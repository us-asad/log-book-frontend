import React, { useState } from 'react';
import { Button, DatePicker, Input, Modal, Select } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { NoRecords, PageHeader } from '../../components/common';

export default function MaintenanceHistory() {
	const [showAddEvent, setShowAddEvent] = useState(false);

	return (
		<div>
			<PageHeader
				title="Maintenance History"
				buttons={
					<Button
						onClick={() => setShowAddEvent(true)}
						className="flex items-center gap-1 group"
					>
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
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start">
								Date Completed
							</th>
							<th className="table-th text-start">
								Vehicle
							</th>
							<th className="table-th text-start">
								Service Type
							</th>
							<th className="table-th text-start">
								Odometer
							</th>
							<th className="table-th text-start">
								Engine Hours
							</th>
							<th className="table-th text-start">
								Cost
							</th>
							<th className="table-th text-start">
								Notes
							</th>
							<th className="table-th text-start">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						<NoRecords />
					</tbody>
				</table>
			</div>
			<Modal
				title="Add Maintenance Event"
				open={showAddEvent}
				onCancel={() => setShowAddEvent(false)}
				okText="Save Changes"
			>
				<div className="flex flex-col gap-2 my-5">
					<label className="flex flex-col">
						<span className="text-sm">Date</span>
						<DatePicker />
					</label>
					<label className="flex flex-col">
						<span className="text-sm">Vehicle</span>
						<Select
							defaultValue="001"
							options={[
								{ value: '001', label: '001' },
								{ value: '002', label: '002' },
								{ value: '003', label: '003' },
							]}
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-sm">Service Type</span>
						<Select
							defaultValue="air"
							options={[
								{ value: 'air', label: 'Air Filter' },
								{ value: 'alternator', label: 'Alternator' },
							]}
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-sm">Odometer (mi)</span>
						<Input type="number" placeholder="Odometer (mi)" />
					</label>
					<label className="flex flex-col">
						<span className="text-sm">Engine Hours</span>
						<Input type="number" placeholder="Engine Hours" />
					</label>
					<label className="flex flex-col">
						<span className="text-sm">Cost</span>
						<Input placeholder="Cost" />
					</label>
					<label className="flex flex-col">
						<span className="text-sm">Notes</span>
						<Input placeholder="Notes" />
					</label>
				</div>
			</Modal>
		</div>
	);
}
