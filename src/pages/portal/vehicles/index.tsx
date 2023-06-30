import { useState, useEffect } from 'react';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/common/PageHeader';
import { getData } from '../../../utils/functions';
import { NoRecords } from '../../../components/common';
import { Vehicle } from '../../../types';

export default function Vehicles() {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		setVehicles(getData('vehicles'));
	}, []);

	return (
		<div>
			<PageHeader
				title="Vehicles"
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
				<Select
					className="w-28"
					defaultValue="all"
					options={[
						{ value: 'all', label: 'All Drivers' },
						{ value: '1', label: '0001' },
						{ value: '2', label: '001' },
						{ value: '3', label: '002' },
					]}
				/>
				<Select
					className="w-32"
					defaultValue="all"
					options={[
						{ value: 'all', label: 'Sort by Time' },
						{ value: '1', label: '0001' },
						{ value: '2', label: '001' },
						{ value: '3', label: '002' },
					]}
				/>
				<Select
					className="w-28"
					defaultValue="all"
					options={[
						{ value: 'all', label: 'Desc.' },
						{ value: '1', label: '0001' },
						{ value: '2', label: '001' },
						{ value: '3', label: '002' },
					]}
				/>
			</div>
			<div className="border border-black-2 border-solid rounded-md overflow-hidden mt-4 w-full flex">
				<div className="relative h-[calc(100vh-260px)] w-[28%] bg-black-1 overflow-y-auto">
					{vehicles?.length ? (
						vehicles.map((vehicle: Vehicle, idx) => (
							<div
								className="cursor-pointer hover:bg-blue-2 duration-150 text-sm flex justify-between items-start px-3 py-2 border-solid border-0 border-b border-black-2"
								key={idx}
							>
								<div className="flex flex-col gap-2">
									<p className="flex gap-2">
										<Link
											to={`/portal/vehicles/${vehicle.id}`}
											className="hover:text-blue duration-150"
										>
											{vehicle.vehicleUnit}
										</Link>
										<span>-</span>
										<Link
											to="/portal/drivers/testdriver1"
											className="hover:text-blue duration-150"
										>
											{vehicle.country}
										</Link>
									</p>
									<p className="text-black-4">June 15, 07:52 PM EDT</p>
								</div>
								<span className="text-xs font-medium bg-green text-white px-1 rounded-sm py-0.5">
									Moving
								</span>
							</div>
						))
					) : (
						<tr>
							<td>
								<NoRecords />
							</td>
						</tr>
					)}
				</div>
				<div className="w-[62%] grid place-content-center">Coming SooN</div>
			</div>
		</div>
	);
}
