import React from 'react';
import { PageHeader } from '../../../components/common';
import { Button } from 'antd';
import VehicleForm from '../../../components/forms/VehicleForm';

export default function AddVehicle() {
	return (
		<div>
			<PageHeader
				title="Add Vehicle"
				noRefresh
				buttons={
					<>
						<Button className='w-32'>Cancel</Button>
						<Button className='w-32' type="primary">Save</Button>
					</>
				}
			/>
      <VehicleForm />
		</div>
	);
}
