import { useState, useEffect } from 'react';
import { Select, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NoRecords, PageHeader } from '../../../components/common';
import { getData } from '../../../utils/functions';
import { Driver } from '../../../types';

export default function Drivers() {
	const navigate = useNavigate();
	const [drivers, setDrivers] = useState([]);

	useEffect(() => {
		setDrivers(getData('drivers') || []);
	}, []);

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
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Name</span>
									<Input size="small" placeholder="Search" className="w-full" />
								</div>
							</th>
							<th className="table-th text-start">
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
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Location</span>
								</div>
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Vehicle</span>
								</div>
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Break</span>
								</div>
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Drive</span>
								</div>
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Shift</span>
								</div>
							</th>
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Cycle</span>
								</div>
							</th>
							<th className="table-th text-start">
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
							<th className="table-th text-start">
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
							<th className="table-th text-start">
								<div className="flex flex-col gap-1">
									<span>Updated</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{drivers?.length ? (
							drivers.map((driver: Driver, idx) => (
								<tr
									onClick={() => navigate(`/portal/drivers/${driver.username}`)}
									key={idx}
									className="cursor-pointer hover:bg-blue-2 duration-150"
								>
									<td className="table-td">
										{driver.firstName} {driver.lastName}
									</td>
									<td className="table-td">
										<span className="bg-green text-white text-xs px-6 py-1 block w-max mx-auto rounded-sm">
											Driving
										</span>
									</td>
									<td className="table-td">{driver.location}</td>
									<td className="table-td">{driver.assignedVehicles}</td>
									<td className="table-td">{driver.restBreak}</td>
									<td className="table-td">{driver.driveTime}</td>
									<td className="table-td">{driver.shiftTime}</td>
									<td className="table-td">{driver.hosRule}</td>
									<td className="table-td"></td>
									<td className="table-td"></td>
									<td className="table-td">05/12/2023</td>
								</tr>
							))
						) : (
							<tr>
								<td>
									<NoRecords text="No Drivers Found" />
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
