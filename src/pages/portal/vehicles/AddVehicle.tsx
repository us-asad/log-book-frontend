import React from 'react';
import { PageHeader } from '../../../components/common';
import { Button } from 'antd';
import VehicleForm from '../../../components/forms/VehicleForm';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Vehicle } from '../../../types';
import { getData, saveData } from '../../../utils/functions';

export default function AddVehicle() {
	const navigate = useNavigate();
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<Vehicle>();

	const createVehicle: SubmitHandler<Vehicle> = (data: Vehicle) => {
		const vehicles = getData('vehicles') || [];
		data.id = Date.now();
		vehicles.unshift(data);
		saveData('vehicles', vehicles);
		navigate('/portal/manage-vehicles');
	};

	return (
		<form onSubmit={handleSubmit(createVehicle)}>
			<PageHeader
				title="Add Vehicle"
				noRefresh
				buttons={
					<>
						<Button className="w-32">Cancel</Button>
						<Button htmlType="submit" className="w-32" type="primary">
							Save
						</Button>
					</>
				}
			/>
			<VehicleForm control={control} errors={errors} />
		</form>
	);
}
