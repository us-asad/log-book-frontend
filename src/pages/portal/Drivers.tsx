import React from 'react';
import { Select, Input } from 'antd';
import PageHeader from '../../components/common/PageHeader';

export default function Drivers() {
	return (
		<div>
			<PageHeader
				title="Drivers"
				buttons={
					<Select
						className="w-40"
						defaultValue="auto"
						options={[
							{ value: 'auto', label: 'Auto Refresh Off' },
							{ value: '1', label: '1 Minute' },
							{ value: '5', label: '5 Minutes' },
							{ value: '10', label: '10 Minutes' },
						]}
					/>
				}
			/>
			<div className="overflow-auto h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Name</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Status</span>
									<Select
										size="small"
										defaultValue="all"
										className="w-full"
										options={[
											{ value: 'all', label: 'All Statuses' },
											{ value: 'off', label: 'OFF' },
											{ value: 'wt', label: 'WT' },
										]}
									/>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Location</span>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Vehicle</span>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Break</span>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Drive</span>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Shift</span>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Cycle</span>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Violations</span>
									<Select
										size="small"
										defaultValue="all"
										className="w-full"
										options={[
											{ value: 'all', label: 'All' },
											{ value: 'off', label: 'OFF' },
											{ value: 'wt', label: 'WT' },
										]}
									/>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>ELD</span>
									<Select
										size="small"
										defaultValue="all"
										className="w-full"
										options={[
											{ value: 'all', label: 'All' },
											{ value: 'off', label: 'OFF' },
											{ value: 'wt', label: 'WT' },
										]}
									/>
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start">
								<div className="flex flex-col gap-1">
									<span>Updated</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{[...new Array(10)].map((_, idx) => (
							<tr key={idx}>
								<td className="border border-black-2 border-solid px-3 py-2">
									Name Name2
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									<span className="bg-green text-white text-xs px-6 py-1 block w-max mx-auto rounded-sm">
										Driving
									</span>
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									5mi NW from Bristol, PA
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									220
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									08:00
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									11:00
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									14:00
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									33:14
								</td>
								<td className="border border-black-2 border-solid px-3 py-2"></td>
								<td className="border border-black-2 border-solid px-3 py-2"></td>
								<td className="border border-black-2 border-solid px-3 py-2">
									05/12/2023
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
