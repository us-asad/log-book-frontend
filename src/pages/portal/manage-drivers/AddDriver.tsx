import React from 'react';
import { PageHeader } from '../../../components/common';
import { Button } from 'antd';
import { DriverForm } from '../../../components/forms';

export default function AddDriver() {
	return (
		<div>
			<PageHeader
				title="Add Driver"
				noRefresh
				buttons={
					<>
						<Button className='w-32'>Cancel</Button>
						<Button type="primary" className='w-32'>Save</Button>
					</>
				}
			/>
      <DriverForm />
		</div>
	);
}
