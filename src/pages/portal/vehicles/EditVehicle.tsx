import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PageHeader } from '../../../components/common';
import VehicleForm from '../../../components/forms/VehicleForm';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Vehicle } from '../../../types';
import { getData, saveData } from '../../../utils/functions';

export default function EditVehicle() {
	const params = useParams();
	const navigate = useNavigate();
	const [vehicle, setVehicle] = useState<{
		data: { status?: boolean };
		index: number;
	}>({
		data: {},
		index: 0,
	});
	const {
		control,
		formState: { errors },
		setValue,
		handleSubmit,
	} = useForm<Vehicle>();

	const changeStatus = () => {
		setVehicle((prev) => {
			const vehicles = getData('vehicles') || [];

			const vehicleIdx = vehicles.findIndex(
				(vh: Vehicle) => `${vh.id}` === `${params.id}`
			);

			const updatedVehicle = { ...prev };

			updatedVehicle.data.status = !updatedVehicle.data.status;
			vehicles[vehicleIdx] = updatedVehicle.data;
			console.log(vehicles[0]?.status, 'vehicles');

			saveData('vehicles', vehicles);

			return updatedVehicle;
		});
	};

	const editVehicle: SubmitHandler<Vehicle> = (data: Vehicle) => {
		console.log(data);

		const vehicles = getData('vehicles') || [];
		vehicles[vehicle.index] = data;
		saveData('vehicles', vehicles);
		navigate('/portal/manage-vehicles');
	};

	useEffect(() => {
		const vehicles = getData('vehicles');
		const vehicleIdx = vehicles?.findIndex(
			(vehicle: Vehicle) => `${vehicle.id}` === `${params.id}`
		);
		const vehicle = vehicles[vehicleIdx];

		setVehicle({ data: vehicle, index: vehicleIdx });

		Object.entries(vehicle || {}).forEach(([key, value]) => {
			if (key) {
				setValue(key as keyof Vehicle, value as string);
			}
			return;
		});
	}, []);

	return (
		<form onSubmit={handleSubmit(editVehicle)}>
			<PageHeader
				title="Edit Vehicle"
				noRefresh
				buttons={
					<>
						<Button danger type="primary" className="w-32">
							Unassign ELD
						</Button>
						<Button
							onClick={changeStatus}
							danger={vehicle.data?.status}
							type="primary"
							className="w-32"
						>
							{vehicle.data?.status ? 'Deactivete' : 'Activete'}
						</Button>
						<Button className="w-32">Cancel</Button>
						<Button htmlType="submit" type="primary" className="w-32">
							Save
						</Button>
					</>
				}
			/>
			<VehicleForm control={control} errors={errors} />
		</form>
	);
}
