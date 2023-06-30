import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Select } from 'antd';
import { FaClipboardList, FaEdit } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { BsFillTruckFrontFill } from 'react-icons/bs';
import { MdLabel } from 'react-icons/md';
import { PageHeader } from '../../../components/common';
import { getData } from '../../../utils/functions';
import { Vehicle } from '../../../types';

export default function VehiclePage() {
	const params = useParams();
	const navigate = useNavigate();
	const [vehicle, setVehicle] = useState<Vehicle | null>(null);

	useEffect(() => {
		setVehicle(
			getData('vehicles')?.find((vehicle: Vehicle) => `${vehicle.id}` === `${params.id}`)
		);
	}, []);

	return (
		<div>
			<PageHeader
				title={params.id}
				buttons={
					<>
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
						<Button
							onClick={() => navigate('/portal/vehicles/001/edit')}
							className="flex items-center gap-2 group"
						>
							<span>Edit</span>
							<FaEdit className="text-black-4 group-hover:text-inherit duration-75" />
						</Button>
					</>
				}
			/>
			<div className="flex gap-2 my-8">
				<DatePicker />
			</div>
			<div className="border border-solid border-black-2 rounded-md overflow-hidden">
				<div className="border-b border-solid border-black-2 flex items-center gap-4 px-3 py-2 border-0">
					<p className="flex items-center gap-2">
						<BsFillTruckFrontFill />
						<span className="text-black-4 text-sm">{vehicle?.make} {vehicle?.model}</span>
					</p>
					<p className="flex items-center gap-2">
						<FaClipboardList />
						<span className="text-black-4 text-sm">{vehicle?.licenseNumber}</span>
					</p>
					<p className="flex items-center gap-2">
						<MdLabel />
						<span className="text-black-4 text-sm">{vehicle?.vin}</span>
					</p>
				</div>
				<div>
					<div className=" overflow-hidden w-full flex">
						<div className="h-[calc(100vh-320px)] w-[28%] bg-black-1 overflow-y-auto">
							{[...new Array(20)].map((_, idx) => (
								<div
									className="text-xs cursor-pointer hover:bg-blue-2 duration-150 flex justify-between items-start px-3 py-2 border-solid border-0 border-b border-black-2"
									key={idx}
								>
									<p className="text-black-4">12:37 AM - 03:17 AM (EDT)</p>
									<p>2h 40m</p>
									<span className="font-medium bg-green text-white px-1 rounded-sm py-0.5">
										Moving
									</span>
								</div>
							))}
						</div>
						<div className="grid place-content-center w-[72%]">Coming sOOn</div>
					</div>
				</div>
			</div>
		</div>
	);
}
