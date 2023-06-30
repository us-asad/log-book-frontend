import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PageHeader } from '../../../components/common';
import { DriverForm } from '../../../components/forms';
import { Driver } from '../../../types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getData, saveData } from '../../../utils/functions';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditDriver() {
	const params = useParams();
	const navigate = useNavigate();
	const [driver, setDriver] = useState<{
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
	} = useForm<Driver>();
	
	const changeStatus = () => {
		setDriver((prev) => {
			const drivers = getData('drivers') || [];

			const driverIdx = drivers.findIndex(
				(dv: Driver) => dv.username === params.username
			);

			const updatedDriver = { ...prev };
			updatedDriver.data.status = !updatedDriver.data.status;
			drivers[driverIdx] = updatedDriver.data;
			console.log(drivers);
			
			saveData('drivers', drivers);

			return updatedDriver;
		});
	};

	const editDriver: SubmitHandler<Driver> = (data: Driver) => {
		const drivers = getData('drivers') || [];
		drivers[driver.index] = data;
		saveData('drivers', drivers);
		navigate("/portal/manage-drivers");
	};

	useEffect(() => {
		const drivers = getData('drivers');
		const driverIdx =
			drivers?.findIndex(
				(driver: Driver) => driver.username === params.username
			);
		const driver = drivers[driverIdx];
		
		setDriver({ data: driver, index: driverIdx });
		Object.entries(driver || {}).forEach(([key, value]) => {
			setValue(key as keyof Driver, value as string);
			return;
		});
	}, []);

	return (
		<form onSubmit={handleSubmit(editDriver)}>
			<PageHeader
				title="Edit Driver"
				noRefresh
				buttons={
					<>
						<Button
							className="w-32"
							danger={driver.data?.status}
							type="primary"
							onClick={changeStatus}
						>
							{driver.data?.status ? 'Deactivate' : 'Activate'}
						</Button>
						<Button
							onClick={() => navigate('/portal/manage-drivers')}
							className="w-32"
						>
							Cancel
						</Button>
						<Button htmlType="submit" className="w-32" type="primary">
							Save
						</Button>
					</>
				}
			/>
			<DriverForm control={control} errors={errors} />
		</form>
	);
}

new Date(2023, 5, 22);
