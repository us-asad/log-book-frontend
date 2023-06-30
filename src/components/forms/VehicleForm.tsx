import { Input, Select } from 'antd';
import { FormProps } from '../../types';
import { Controller } from 'react-hook-form';
import { getInputValidations } from '../../utils/functions';

export default function VehicleForm({ control, errors }: FormProps) {
	return (
		<div className="card">
			<h3 className="card-title">Settings</h3>
			<div className="flex gap-8">
				<div className="flex flex-col gap-3 w-1/2">
					<label className="w-full">
						<span className="text-sm">
							Vehicle Unit # <span className="text-red-600">*</span>
						</span>
						<Controller
							control={control}
							name="vehicleUnit"
							rules={getInputValidations(true, 2, 100)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									placeholder="Vehicle Unit"
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									status={errors?.vehicleUnit ? 'error' : ''}
								/>
							)}
						/>
						{errors?.vehicleUnit && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.vehicleUnit.message}`}
							</span>
						)}
					</label>
					<div>
						<span className="text-sm">
							Make / Model <span className="text-red-600">*</span>
						</span>
						<div className="flex gap-3">
							<div className="w-1/2">
								<Controller
									control={control}
									name="make"
									rules={getInputValidations(true, 2, 100)}
									render={({ field: { onChange, onBlur, value } }) => (
										<Input
											placeholder="Make"
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											status={errors?.make ? 'error' : ''}
											className="h-max"
										/>
									)}
								/>
								{errors?.make && (
									<span className="text-red-600 font-medium text-xs">
										{`${errors.make.message}`}
									</span>
								)}
							</div>
							<div className="w-1/2">
								<Controller
									control={control}
									name="model"
									rules={getInputValidations(true, 2, 100)}
									render={({ field: { onChange, onBlur, value } }) => (
										<Input
											placeholder="Model"
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											status={errors?.model ? 'error' : ''}
											className="h-max"
										/>
									)}
								/>
								{errors?.model && (
									<span className="text-red-600 font-medium text-xs">
										{`${errors.model.message}`}
									</span>
								)}
							</div>
						</div>
					</div>
					<label className="w-full">
						<span className="text-sm">
							Year <span className="text-red-600">*</span>
						</span>
						<Controller
							control={control}
							name="year"
							rules={getInputValidations(true, 2, 100)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									type="number"
									placeholder="Year"
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									status={errors?.year ? 'error' : ''}
									className="h-max"
								/>
							)}
						/>
						{errors?.year && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.year.message}`}
							</span>
						)}
					</label>
					<label className="w-full">
						<span className="text-sm">
							VIN <span className="text-red-600">*</span>
						</span>
						<Controller
							control={control}
							name="vin"
							rules={getInputValidations(true, 2, 100)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									placeholder="VIN"
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									status={errors?.vin ? 'error' : ''}
									className="h-max"
								/>
							)}
						/>
						{errors?.vin && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.vin.message}`}
							</span>
						)}
						<p className="text-xs text-black-4 text-end mt-2">
							You may not modify the VIN on existing vehicle. To change the VIN
							you can create a new vehicle with that VIN and deactivate the
							current vehicle. Please contact technical support if you have
							questions or concerns.
						</p>
					</label>
				</div>
				<div className="flex flex-col gap-[18px] w-1/2">
					<label className="w-full flex flex-col">
						<span className="text-sm">
							Fuel <span className="text-red-600">*</span>
						</span>
						<Controller
							control={control}
							name="fuel"
							rules={getInputValidations(true)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Select
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									status={errors?.fuel ? 'error' : ''}
									className="h-max"
									options={[
										{ value: 'diesel', label: 'Diesel' },
										{ value: 'gasoline', label: 'Gasoline' },
									]}
								/>
							)}
						/>
						{errors?.fuel && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.fuel.message}`}
							</span>
						)}
					</label>
					<label className="w-full flex flex-col">
						<span className="text-sm">
							ELD Connection Interface <span className="text-red-600">*</span>
						</span>
						<Controller
							control={control}
							name="eld"
							rules={getInputValidations(true)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Select
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									status={errors?.eld ? 'error' : ''}
									className="h-max"
									options={[
										{ value: 'heavy', label: 'Heavy Duty Vehicle' },
										{ value: 'light', label: 'Light Duty Vehicle' },
									]}
								/>
							)}
						/>
						{errors?.eld && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.eld.message}`}
							</span>
						)}
					</label>
					<label className="w-full flex flex-col">
						<span className="text-sm">
							Tracker Device <span className="text-red-600">*</span>
						</span>
						<Controller
							control={control}
							name="trackerDevice"
							rules={getInputValidations(true)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Select
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									status={errors?.trackerDevice ? 'error' : ''}
									className="h-max"
									options={[{ value: 'choose', label: 'Choose Tracker' }]}
								/>
							)}
						/>
						{errors?.trackerDevice && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.trackerDevice.message}`}
							</span>
						)}
					</label>
					<div>
						<span className="text-sm">
							Driver License <span className="text-red-600">*</span>
						</span>
						<div className="flex gap-2">
							<div className="w-1/4">
								<Controller
									control={control}
									name="country"
									rules={getInputValidations(true)}
									render={({ field: { onChange, onBlur, value } }) => (
										<Select
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											status={errors?.country ? 'error' : ''}
											className="w-full h-max"
											options={[
												{ value: 'us', label: 'United States' },
												{ value: 'ca', label: 'Canada' },
												{ value: 'fr', label: 'France' },
											]}
										/>
									)}
								/>
								{errors?.country && (
									<span className="text-red-600 font-medium text-xs">
										{`${errors.country.message}`}
									</span>
								)}
							</div>
							<div className="w-1/4">
								<Controller
									control={control}
									name="state"
									rules={getInputValidations(true)}
									render={({ field: { onChange, onBlur, value } }) => (
										<Select
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											status={errors?.state ? 'error' : ''}
											className="w-full h-max"
											options={[
												{ value: 'ny', label: 'New York' },
												{ value: 'ca', label: 'California' },
												{ value: 'ch', label: 'Chicago' },
											]}
										/>
									)}
								/>
								{errors?.state && (
									<span className="text-red-600 font-medium text-xs">
										{`${errors.state.message}`}
									</span>
								)}
							</div>
							<div className="w-2/4">
								<Controller
									control={control}
									name="licenseNumber"
									rules={getInputValidations(true, 2, 100)}
									render={({ field: { onChange, onBlur, value } }) => (
										<Input
											placeholder="License Number"
											value={value}
											className="h-max"
											onChange={onChange}
											onBlur={onBlur}
											status={errors?.licenseNumber ? 'error' : ''}
										/>
									)}
								/>
								{errors?.licenseNumber && (
									<span className="text-red-600 font-medium text-xs">
										{`${errors.licenseNumber.message}`}
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
