import React from 'react';
import { Button } from 'antd';
import { PageHeader } from '../../../components/common';
import VehicleForm from '../../../components/forms/VehicleForm';

export default function EditVehicle() {
	return (
		<div>
			<PageHeader
				title="Edit Vehicle"
				noRefresh
				buttons={
					<>
						<Button className="w-32">Cancel</Button>
						<Button danger type="primary" className="w-32">
							Unassign ELD
						</Button>
						<Button danger type="primary" className="w-32">
							Deactivete
						</Button>
						<Button type="primary" className="w-32">
							Save
						</Button>
					</>
				}
			/>
			<VehicleForm />
		</div>
	);
}
