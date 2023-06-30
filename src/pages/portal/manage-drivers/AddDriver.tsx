import React from 'react';
import { PageHeader } from '../../../components/common';
import { Button } from 'antd';
import { DriverForm } from '../../../components/forms';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getData, saveData } from '../../../utils/functions';
import { useNavigate } from 'react-router-dom';
import { Driver } from '../../../types';

export default function AddDriver() {
	const navigate = useNavigate();
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<Driver>();

	const createDriver: SubmitHandler<Driver> = (data: Driver) => {
		const drivers = getData('drivers') || [];
		data.status = true;
		drivers.unshift(data);
		saveData('drivers', drivers);
		navigate("/portal/manage-drivers");
	};

	return (
		<form onSubmit={handleSubmit(createDriver)}>
			<PageHeader
				title="Add Driver"
				noRefresh
				buttons={
					<>
						<Button className="w-32">Cancel</Button>
						<Button htmlType="submit" type="primary" className="w-32">
							Save
						</Button>
					</>
				}
			/>
			<DriverForm control={control} errors={errors} />
		</form>
	);
}
