import React from 'react';
import { Checkbox, Input, Select } from 'antd';
import { Controller } from 'react-hook-form';
import { getInputValidations } from '../../utils/functions';
import { FormProps } from '../../types';


export default function DriverForm({ control, errors }: FormProps) {
	return (
		<div>
			<div className="card">
				<h3 className="card-title">General Settings</h3>
				<div className="flex gap-8">
					<div className="w-1/2 flex flex-col gap-3">
						<label>
							<span className="text-sm">
								Username <span className="text-red-600">*</span>
							</span>
							<Controller
								control={control}
								name="username"
								rules={getInputValidations(true, 2, 100)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Input
										placeholder="Username"
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.username ? 'error' : ''}
									/>
								)}
							/>
							{errors?.username && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.username.message}`}
								</span>
							)}
							<p className="text-xs mt-2 text-black-4 text-end">
								Please note: according to the FMCSA regulation users of the
								portal and drivers must have <b>different login credentials</b>{' '}
								even if this is the same person. Portal users can&apos;t login
								to mobile app and Drivers can&apos;t log in to the portal with
								the same login credentials. Please use different usernames for
								portal users and drivers.
							</p>
						</label>
						<div>
							<label>
								<span className="text-sm">Email</span>
								<Controller
									control={control}
									name="email"
									rules={getInputValidations(true, 2, 100)}
									render={({ field: { onChange, onBlur, value } }) => (
										<Input
											placeholder="Email"
											onChange={onChange}
											onBlur={onBlur}
											value={value}
											status={errors?.email ? 'error' : ''}
										/>
									)}
								/>
								{errors?.email && (
									<span className="text-red-600 font-medium text-xs">
										{`${errors?.email.message}`}
									</span>
								)}
							</label>
							<label className="flex items-center justify-end gap-2 mt-1.5">
								<Checkbox />
								<span className="text-sm">Same as above</span>
							</label>
							<p className="text-xs mt-1 text-black-4 text-end">
								Please note: email is used to change the password
							</p>
						</div>
						<label>
							<span className="text-sm">New Password</span>
							<Controller
								control={control}
								name="password"
								rules={getInputValidations(true, 2, 100)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Input.Password
										placeholder="Password"
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.password ? 'error' : ''}
									/>
								)}
							/>
							{errors?.password && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.password.message}`}
								</span>
							)}
						</label>
						<label>
							<span className="text-sm">Confirm New Password</span>
							<Controller
								control={control}
								name="confirmPassword"
								rules={getInputValidations(true, 2, 100)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Input.Password
										placeholder="Confirm Password"
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.confirmPassword ? 'error' : ''}
									/>
								)}
							/>
							{errors?.confirmPassword && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.confirmPassword.message}`}
								</span>
							)}
						</label>
					</div>
					<div className="w-1/2 flex flex-col gap-3">
						<div>
							<span className="text-sm">
								Name <span className="text-red-600">*</span>
							</span>
							<div className="flex gap-2">
								<div className="w-1/2">
									<Controller
										control={control}
										name="firstName"
										rules={getInputValidations(true, 2, 100)}
										render={({ field: { onChange, onBlur, value } }) => (
											<Input
												placeholder="First Name"
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												status={errors?.firstName ? 'error' : ''}
											/>
										)}
									/>
									{errors?.firstName && (
										<span className="text-red-600 font-medium text-xs">
											{`${errors?.firstName.message}`}
										</span>
									)}
								</div>
								<div className="w-1/2">
									<Controller
										control={control}
										name="lastName"
										rules={getInputValidations(true, 2, 100)}
										render={({ field: { onChange, onBlur, value } }) => (
											<Input
												placeholder="Last Name"
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												status={errors?.lastName ? 'error' : ''}
											/>
										)}
									/>
									{errors?.lastName && (
										<span className="text-red-600 font-medium text-xs">
											{`${errors?.lastName.message}`}
										</span>
									)}
								</div>
							</div>
						</div>
						<label>
							<span className="text-sm">Company Driver ID</span>
							<Controller
								control={control}
								name="driverId"
								rules={getInputValidations(true, 2, 100)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Input
										placeholder="Company Driver ID"
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.driverId ? 'error' : ''}
									/>
								)}
							/>
							{errors?.driverId && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.driverId.message}`}
								</span>
							)}
						</label>
						<label>
							<span className="text-sm">Phone</span>
							<Controller
								control={control}
								name="phone"
								rules={getInputValidations(true, 2, 100)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Input
										placeholder="Phone"
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.phone ? 'error' : ''}
									/>
								)}
							/>
							{errors?.phone && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.phone.message}`}
								</span>
							)}
						</label>
						<div>
							<span className="text-sm">
								Driver License <span className="text-red-600">*</span>
							</span>
							<div className="flex gap-2">
								<div className="flex flex-col min-w-[25%]">
									<Controller
										control={control}
										name="country"
										rules={getInputValidations(true)}
										render={({ field: { onChange, onBlur, value } }) => (
											<Select
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												status={errors?.country ? 'error' : ''}
												options={[
													{ value: 'United States', label: 'United States' },
													{ value: 'Canada', label: 'Canada' },
													{ value: 'France', label: 'France' },
												]}
											/>
										)}
									/>
									{errors?.country && (
										<span className="text-red-600 font-medium text-xs">
											{`${errors?.country.message}`}
										</span>
									)}
								</div>
								<div className="flex flex-col min-w-[25%]">
									<Controller
										control={control}
										name="region"
										rules={getInputValidations(true)}
										render={({ field: { onChange, onBlur, value } }) => (
											<Select
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												status={errors?.region ? 'error' : ''}
												options={[
													{ value: 'New York', label: 'New York' },
													{ value: 'California', label: 'California' },
													{ value: 'Chicago', label: 'Chicago' },
												]}
											/>
										)}
									/>
									{errors?.region && (
										<span className="text-red-600 font-medium text-xs">
											{`${errors?.region.message}`}
										</span>
									)}
								</div>
								<div className="flex flex-col w-2/4">
									<Controller
										control={control}
										name="licenseNumber"
										rules={getInputValidations(true, 2, 100)}
										render={({ field: { onChange, onBlur, value } }) => (
											<Input
												placeholder="License Number"
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												status={errors?.licenseNumber ? 'error' : ''}
											/>
										)}
									/>
									{errors?.licenseNumber && (
										<span className="text-red-600 font-medium text-xs">
											{`${errors?.licenseNumber.message}`}
										</span>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card">
				<h3 className="card-title">Carrier Settings</h3>
				<div className="flex gap-8">
					<label className="w-1/2 flex flex-col">
						<span className="text-sm">
							Home Terminal <span className="text-red-600">*</span>
						</span>
						<Controller
							control={control}
							name="homeTerminal"
							rules={getInputValidations(true)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Select
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									status={errors?.homeTerminal ? 'error' : ''}
									options={[
										{
											value: '40 Bellevue Ave, Pendell, PA, 19047',
											label: '40 Bellevue Ave, Pendell, PA, 19047',
										},
										{
											value: '41 Bellevue Ave, Pendell, PA, 19047',
											label: '41 Bellevue Ave, Pendell, PA, 19047',
										},
										{
											value: '42 Bellevue Ave, Pendell, PA, 19047',
											label: '42 Bellevue Ave, Pendell, PA, 19047',
										},
									]}
								/>
							)}
						/>
						{errors?.homeTerminal && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors?.homeTerminal.message}`}
							</span>
						)}
					</label>
					<label className="w-1/2 flex flex-col">
						<span className="text-sm">Assigned Vehicle</span>
						<Controller
							control={control}
							rules={getInputValidations(true)}
							name="assignedVehicle"
							render={({ field: { onChange, onBlur, value } }) => (
								<Select
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									status={errors?.assignedVehicle ? 'error' : ''}
									options={[
										{
											value: '001',
											label: '001',
										},
										{
											value: '002',
											label: '002',
										},
										{
											value: '003',
											label: '003',
										},
									]}
								/>
							)}
						/>
						{errors?.assignedVehicle && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors?.assignedVehicle.message}`}
							</span>
						)}
						<p className="text-xs text-black-4 text-end mt-2">
							Optional. Select which vehicles you want the driver to be
							restricted to. Leave blank for unristriced vehicle selection.
						</p>
					</label>
				</div>
			</div>
			<div className="card">
				<h3 className="card-title">Log Settings</h3>
				<div className="flex gap-8">
					<div className="w-1/2 flex flex-col gap-3">
						<label className="flex items-center gap-3">
							<span className="text-sm w-44">Exempt Driver</span>
							<Controller
								control={control}
								name="exemptDriver"
								render={({ field: { onChange, value } }) => (
									<Checkbox
										className="scale-125"
										onChange={onChange}
										checked={value}
									/>
								)}
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								HOS Rules <span className="text-red-600">*</span>
							</span>
							<Controller
								control={control}
								name="hosRule"
								rules={getInputValidations(true)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Select
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.hosRule ? 'error' : ''}
										className="w-full"
										options={[
											{
												value: 'USA 70 hour / 8 day',
												label: 'USA 70 hour / 8 day',
											},
											{
												value: 'USA 60 hour / 7 day',
												label: 'USA 60 hour / 7 day',
											},
											{
												value: 'California 80 hour / 8 day',
												label: 'California 80 hour / 8 day',
											},
										]}
									/>
								)}
							/>
							{errors?.hosRule && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.hosRule.message}`}
								</span>
							)}
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								Cargo Type <span className="text-red-600">*</span>
							</span>
							<Controller
								control={control}
								rules={getInputValidations(true)}
								name="cargoType"
								render={({ field: { onChange, onBlur, value } }) => (
									<Select
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors.cargoType ? 'error' : ''}
										className="w-full"
										options={[
											{ value: 'Property', label: 'Property' },
											{ value: 'Passenger', label: 'Passenger' },
											{ value: 'Oil and Gas', label: 'Oil and Gas' },
										]}
									/>
								)}
							/>
							{errors?.cargoType && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.cargoType.message}`}
								</span>
							)}
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								Restart <span className="text-red-600">*</span>
							</span>
							<Controller
								control={control}
								name="restart"
								rules={getInputValidations(true)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Select
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.restart ? 'error' : ''}
										className="w-full"
										options={[
											{ value: '34 Hour Restart', label: '34 Hour Restart' },
											{ value: '24 Hour Restart', label: '24 Hour Restart' },
										]}
									/>
								)}
							/>
							{errors?.restart && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.restart.message}`}
								</span>
							)}
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								Rest Break <span className="text-red-600">*</span>
							</span>
							<Controller
								control={control}
								name="restBreak"
								rules={getInputValidations(true)}
								render={({ field: { onChange, onBlur, value } }) => (
									<Select
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										status={errors?.restBreak ? 'error' : ''}
										className="w-full"
										options={[
											{
												value: '30 Minute Rest Break Required',
												label: '30 Minute Rest Break Required',
											},
											{
												value: 'No Rest Break Required',
												label: 'No Rest Break Required',
											},
										]}
									/>
								)}
							/>
							{errors?.restBreak && (
								<span className="text-red-600 font-medium text-xs">
									{`${errors?.restBreak.message}`}
								</span>
							)}
						</label>
					</div>
					<div className="w-1/2 flex flex-col gap-6">
						<label className="flex items-center gap-3">
							<span className="text-sm w-44">Short-Haul Exception</span>
							<Controller
								control={control}
								name="shortHaulException"
								render={({ field: { onChange, value } }) => (
									<Checkbox
										className="scale-125"
										onChange={onChange}
										checked={value}
									/>
								)}
							/>
						</label>
						<label className="flex items-center gap-3">
							<span className="text-sm w-44">Allow Personal Use</span>
							<Controller
								control={control}
								name="allowPersonalUse"
								render={({ field: { onChange, value } }) => (
									<Checkbox
										className="scale-125"
										onChange={onChange}
										checked={value}
									/>
								)}
							/>
						</label>
						<label className="flex items-center gap-3">
							<span className="text-sm w-44">Allow Yard Moves</span>
							<Controller
								control={control}
								name="allowYardMoves"
								render={({ field: { onChange, value } }) => (
									<Checkbox
										className="scale-125"
										onChange={onChange}
										checked={value}
									/>
								)}
							/>
						</label>
						<div>
							<label className="flex items-center gap-3">
								<span className="text-sm w-44">Unlimited Trailers</span>
								<Controller
									control={control}
									name="unlimitedTrailers"
									render={({ field: { onChange, value } }) => (
										<Checkbox
											className="scale-125"
											onChange={onChange}
											checked={value}
										/>
									)}
								/>
							</label>
							<p className="text-xs text-black-4 mt-2">
								Please note: This setting allows a driver to add unlimited
								trailer numbers to a specific log for a visual inspection only.
								The trailer numbers data length is limited to 32 characters when
								an output file is transferred to the FMCSA system.
							</p>
						</div>
						<div>
							<label className="flex items-center gap-3">
								<span className="text-sm w-44">
									Unlimited Shipping Documents
								</span>
								<Controller
									control={control}
									name="unlimitedShippingDocuments"
									render={({ field: { onChange, value } }) => (
										<Checkbox
											className="scale-125"
											onChange={onChange}
											checked={value}
										/>
									)}
								/>
							</label>
							<p className="text-xs text-black-4 mt-2">
								Please note: This setting allows a driver to add an unlimited
								number of shipping documents to a specific log for a visual
								inspection only. The shipping documents data length is limited
								to 40 characters when an output file is transferred to the FMCSA
								system.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
