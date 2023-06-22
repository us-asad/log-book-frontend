import React from 'react';
import PageHeader from '../../../components/common/PageHeader';
import { Button, Checkbox, Input, Select } from 'antd';

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
			<div className="card">
				<h3 className="card-title">General Settings</h3>
				<div className="flex gap-8">
					<div className="w-1/2 flex flex-col gap-3">
						<label>
							<span className="text-sm">
								Username <span className="text-red-600">*</span>
							</span>
							<Input placeholder="Username" />
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
								<Input type="email" placeholder="Email" />
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
							<Input.Password placeholder="Password" />
						</label>
						<label>
							<span className="text-sm">Confirm New Password</span>
							<Input.Password placeholder="Confirm Password" />
						</label>
					</div>
					<div className="w-1/2 flex flex-col gap-3">
						<div>
							<span className="text-sm">
								Name <span className="text-red-600">*</span>
							</span>
							<div className="flex gap-2">
								<Input placeholder="First Name" />
								<Input placeholder="Last Name" />
							</div>
						</div>
						<label>
							<span className="text-sm">Company Driver ID</span>
							<Input placeholder="Company Driver ID" />
						</label>
						<label>
							<span className="text-sm">Phone</span>
							<Input placeholder="Phone" />
						</label>
						<div>
							<span className="text-sm">
								Driver License <span className="text-red-600">*</span>
							</span>
							<div className="flex gap-2">
								<Select
									className="w-1/4"
									defaultValue="us"
									options={[
										{ value: 'us', label: 'United States' },
										{ value: 'ca', label: 'Canada' },
										{ value: 'fr', label: 'France' },
									]}
								/>
								<Select
									className="w-1/4"
									defaultValue="ny"
									options={[
										{ value: 'ny', label: 'New York' },
										{ value: 'ca', label: 'California' },
										{ value: 'ch', label: 'Chicago' },
									]}
								/>
								<Input className="w-2/4" placeholder="License Number" />
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
						<Select
							defaultValue="value-1"
							options={[
								{
									value: 'value-1',
									label: '40 Bellevue Ave, Pendell, PA, 19047',
								},
								{
									value: 'value-2',
									label: '41 Bellevue Ave, Pendell, PA, 19047',
								},
								{
									value: 'value-3',
									label: '42 Bellevue Ave, Pendell, PA, 19047',
								},
							]}
						/>
					</label>
					<label className="w-1/2 flex flex-col">
						<span className="text-sm">Assigned Vehicles</span>
						<Select
							defaultValue="001"
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
							<Checkbox className="scale-125" />
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								HOS Rules <span className="text-red-600">*</span>
							</span>
							<Select
								className="w-full"
								defaultValue="70/8"
								options={[
									{ value: '70/8', label: 'USA 70 hour / 8 day' },
									{ value: '60/7', label: 'USA 60 hour / 7 day' },
									{ value: '80/8', label: 'California 80 hour / 8 day' },
								]}
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								Cargo Type <span className="text-red-600">*</span>
							</span>
							<Select
								className="w-full"
								defaultValue="property"
								options={[
									{ value: 'property', label: 'Property' },
									{ value: 'passenger', label: 'Passenger' },
									{ value: 'oil-gas', label: 'Oil and Gas' },
								]}
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								Restart <span className="text-red-600">*</span>
							</span>
							<Select
								className="w-full"
								defaultValue="34"
								options={[
									{ value: '34', label: '34 Hour Restart' },
									{ value: '24', label: '24 Hour Restart' },
								]}
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-sm">
								Rest Break <span className="text-red-600">*</span>
							</span>
							<Select
								className="w-full"
								defaultValue="30"
								options={[
									{ value: '30', label: '30 Minute Rest Break Required' },
									{ value: 'no', label: 'No Rest Break Required' },
								]}
							/>
						</label>
					</div>
					<div className="w-1/2 flex flex-col gap-6">
						<label className="flex items-center gap-3">
							<span className="text-sm w-44">Short-Haul Exception</span>
							<Checkbox className="scale-125" />
						</label>
						<label className="flex items-center gap-3">
							<span className="text-sm w-44">Allow Personal Use</span>
							<Checkbox className="scale-125" />
						</label>
						<label className="flex items-center gap-3">
							<span className="text-sm w-44">Allow Yard Moves</span>
							<Checkbox className="scale-125" />
						</label>
						<div>
							<label className="flex items-center gap-3">
								<span className="text-sm w-44">Unlimited Trailers</span>
								<Checkbox className="scale-125" />
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
								<Checkbox className="scale-125" />
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
