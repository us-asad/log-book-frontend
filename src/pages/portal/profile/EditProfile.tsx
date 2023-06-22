import React from 'react';
import { PageHeader } from '../../../components/common';
import { Button, Input, Select } from 'antd';

export default function EditProfile() {
	return (
		<div>
			<PageHeader
				title="Edit Your Profile"
				noRefresh
				buttons={
					<>
						<Button className="w-32">Cancel</Button>
						<Button className="w-32" type="primary">
							Save
						</Button>
					</>
				}
			/>
			<div className="card">
				<h3 className="card-title">Settings</h3>
				<div className="flex gap-8">
					<div className="w-1/2 flex flex-col gap-3">
						<div>
							<span className="text-sm">
								Name <span className="text-red-600"></span>
							</span>
							<div className="flex gap-3">
								<Input className="w-1/2" placeholder="First Name" />
								<Input className="w-1/2" placeholder="Last Name" />
							</div>
						</div>
						<label>
							<span className="text-sm">
								Email <span className="text-red-600"></span>
							</span>
							<Input placeholder="Email" />
						</label>
						<label>
							<span className="text-sm">
								Phone <span className="text-red-600"></span>
							</span>
							<Input placeholder="Phone number" />
						</label>
					</div>
					<div className="w-1/2 flex flex-col gap-3">
						<label>
							<span className="text-sm">New Password</span>
							<Input placeholder="New Password" />
						</label>
						<label>
							<span className="text-sm">Confirm Password</span>
							<Input placeholder="Confirm New Password" />
						</label>
						<label className='flex flex-col'>
							<span className="text-sm">Odometer Units</span>
							<Select
								defaultValue="mi"
								options={[
									{ value: 'mi', label: 'mi' },
									{ value: 'km', label: 'km' },
								]}
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
