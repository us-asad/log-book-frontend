import React from 'react';
import { Button } from 'antd';
import { PageHeader } from '../../../components/common';
import { DriverForm } from '../../../components/forms';

export default function EditDriver() {
	return (
		<div>
			<PageHeader
				title="Edit Driver"
				noRefresh
				buttons={
					<>
						<Button danger type="primary">
							Deactivate
						</Button>
						<Button>Cancel</Button>
						<Button type="primary">Save</Button>
					</>
				}
			/>
			<DriverForm />
		</div>
	);
}
