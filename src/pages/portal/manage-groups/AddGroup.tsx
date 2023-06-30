import { PageHeader } from '../../../components/common';
import { Button, Input, Select } from 'antd';

export default function AddGroup() {
	return (
		<div>
			<PageHeader
				title="Add Group"
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
						<label className="flex flex-col">
							<span className="text-sm">
								Name <span className="text-red-600">*</span>
							</span>
							<Input placeholder="Group Name" />
						</label>
						<label className="flex flex-col">
							<span className="text-sm">Assigned Drivers</span>
							<Select
								options={[
									{ value: 'driver-1', label: 'Driver 1' },
									{ value: 'driver-2', label: 'Driver 2' },
									{ value: 'driver-3', label: 'Driver 3' },
								]}
							/>
						</label>
					</div>
					<div className="w-1/2 flex flex-col gap-3">
						<label className="flex flex-col">
							<span className="text-sm">Assigned Drivers</span>
							<Select
								options={[
									{ value: 'driver-1', label: 'Driver 1' },
									{ value: 'driver-2', label: 'Driver 2' },
									{ value: 'driver-3', label: 'Driver 3' },
								]}
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
