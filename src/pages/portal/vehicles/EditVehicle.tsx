import React from 'react';
import PageHeader from '../../../components/common/PageHeader';
import { Button, Input, Select } from 'antd';

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
			<div className="card">
				<h3 className="card-title">Settings</h3>
				<div className="flex gap-8">
					<div className="flex flex-col gap-3 w-1/2">
						<label className="w-full">
							<span className="text-sm">
								Vehicle Unit # <span className="text-red-600">*</span>
							</span>
							<Input placeholder="Vehicle Unit" />
						</label>
						<div>
							<span className="text-sm">
								Make / Model <span className="text-red-600">*</span>
							</span>
							<div className="flex gap-3">
								<Input placeholder="Make" />
								<Input placeholder="Model" />
							</div>
						</div>
						<label className="w-full">
							<span className="text-sm">
								Year <span className="text-red-600">*</span>
							</span>
							<Input type="number" placeholder="Year" />
						</label>
						<label className="w-full">
							<span className="text-sm">
								VIN <span className="text-red-600">*</span>
							</span>
							<Input placeholder="VIN" />
							<p className="text-xs text-black-4 text-end mt-2">
								You may not modify the VIN on existing vehicle. To change the
								VIN you can create a new vehicle with that VIN and deactivate
								the current vehicle. Please contact technical support if you
								have questions or concerns.
							</p>
						</label>
					</div>
					<div className="flex flex-col gap-[18px] w-1/2">
						<label className="w-full flex flex-col">
							<span className="text-sm">
								Fuel <span className="text-red-600">*</span>
							</span>
							<Select
								defaultValue="diesel"
								options={[
									{ value: 'diesel', label: 'Diesel' },
									{ value: 'gasoline', label: 'Gasoline' },
								]}
							/>
						</label>
						<label className="w-full flex flex-col">
							<span className="text-sm">
								ELD Connection Interface <span className="text-red-600">*</span>
							</span>
							<Select
								defaultValue="heavy"
								options={[
									{ value: 'heavy', label: 'Heavy Duty Vehicle' },
									{ value: 'light', label: 'Light Duty Vehicle' },
								]}
							/>
						</label>
						<label className="w-full flex flex-col">
							<span className="text-sm">
								Tracker Device <span className="text-red-600">*</span>
							</span>
							<Select
								defaultValue="choose"
								options={[{ value: 'choose', label: 'Choose Tracker' }]}
							/>
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
		</div>
	);
}
