import { Button, DatePicker, Select } from 'antd';
import { NoRecords, PageHeader } from '../../components/common';

export default function UnidentifiedEvents() {
	return (
		<div>
			<PageHeader
				title="Unidentified Events"
				buttons={
					<Button className="flex items-center gap-1 group">
						Bulk Assign Events
					</Button>
				}
			/>
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
			<div className="overflow-auto h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full relative">
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start">
								Time
							</th>
							<th className="table-th text-start">
								Vehicle
							</th>
							<th className="table-th text-start">
								Event
							</th>
							<th className="table-th text-start">
								Status
							</th>
							<th className="table-th text-start">
								Location
							</th>
							<th className="table-th text-start">
								Odometer (mi)
							</th>
							<th className="table-th text-start">
								Engine Hours
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
			{/* <Button type="link" className="mx-auto block mt-2">
				Load More
			</Button> */}
		</div>
	);
}
