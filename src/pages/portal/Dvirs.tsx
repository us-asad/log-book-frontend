import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { IoMdCloudDownload } from 'react-icons/io';
import { NoRecords, PageHeader } from '../../components/common';

export default function Dvirs() {
	return (
		<div>
			<PageHeader

				title="DVIRs"
				buttons={
					<Button className="flex items-center gap-1 group">
						<span>Download</span>
						<IoMdCloudDownload className="text-lg text-black-4 group-hover:text-inherit duration-50" />
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
								Driver
							</th>
							<th className="table-th text-start">
								Defects
							</th>
							<th className="table-th text-start">
								Status
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
