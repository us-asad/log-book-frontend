import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { IoMdCloudDownload, IoMdRefresh } from 'react-icons/io';
import { MdCloudUpload } from 'react-icons/md';

export default function Logs() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">Logs</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						<span>Send Output File</span>
						<MdCloudUpload className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
					<Button className="flex items-center gap-1 group">
						<span>Download</span>
						<IoMdCloudDownload className="text-lg text-black-4 group-hover:text-inherit duration-50" />
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
					defaultValue="driver"
					options={[
						{ label: 'Driver', value: 'driver' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
				<Select
					className="w-32"
					defaultValue="violations"
					options={[
						{ label: 'Violations', value: 'violations' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
				<Select
					className="w-32"
					defaultValue="form"
					options={[
						{ label: 'Form & Manner', value: 'form' },
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
			<div className="overflow-auto h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Date
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Driver
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Hours Drove
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Violations
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								Form & Manner
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{[...new Array(20)].map((_, idx) => (
							<tr key={idx}>
								<td className="border border-black-2 border-solid px-3 py-2">
									Jun 20
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									Name1 Name2
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									00.00
								</td>
								<td className="border border-black-2 border-solid px-3 py-2"></td>
								<td className="border border-black-2 border-solid px-3 py-2">Not Crtified</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Button type="link" className="mx-auto block mt-2">Load More</Button>
		</div>
	);
}
