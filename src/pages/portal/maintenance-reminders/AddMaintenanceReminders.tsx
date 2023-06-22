import React, { useState } from 'react';
import { Button, Input, Modal, Select } from 'antd';
import { BsFillTrashFill } from 'react-icons/bs';
import { PageHeader } from '../../../components/common';

export default function AddMaintenanceReminders() {
	const [showServiceTypes, setShowServiceTypes] = useState(false);

	return (
		<div>
			<PageHeader
				title="Add Reminder"
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
			<div className="card flex gap-8">
				<div className="w-1/2 flex flex-col gap-3">
					<label className="w-full flex flex-col">
						<span className="text-sm">
							Vehicle <span className="text-red-600">*</span>
						</span>
						<Select
							defaultValue="001"
							options={[
								{ value: '001', label: '001' },
								{ value: '002', label: '002' },
								{ value: '003', label: '003' },
							]}
						/>
					</label>
					<label className="w-full flex flex-col">
						<span className="text-sm">
							Service Type <span className="text-red-600">*</span>
						</span>
						<div className="flex gap-3">
							<Select
								className="w-full"
								defaultValue="air"
								options={[
									{ value: 'air', label: 'Air Filter' },
									{ value: 'alternator', label: 'Alternator' },
								]}
							/>
							<Button onClick={() => setShowServiceTypes(true)}>
								Manage Service Type
							</Button>
						</div>
					</label>
				</div>
				<div className="w-1/2 flex flex-col gap-3">
					<label className="w-full flex flex-col">
						<span className="text-sm">
							Type Of Reminder <span className="text-red-600">*</span>
						</span>
						<Select
							defaultValue="001"
							options={[
								{ value: '001', label: '001' },
								{ value: '002', label: '002' },
								{ value: '003', label: '003' },
							]}
						/>
					</label>
				</div>
			</div>
			<Modal
				open={showServiceTypes}
				onCancel={() => setShowServiceTypes(false)}
				title="Manage Service Types"
				okText="Save"
			>
				<div>
					<span className="text-sm">Service Type</span>
					<div className="flex gap-3">
						<Input placeholder="Service Type" />
						<Button type="primary">Add</Button>
					</div>
				</div>
				<div className="overflow-auto max-h-48 border border-solid border-black-2 my-10">
					<table className="table">
						<thead>
							<tr>
								<th className="table-th text-start">Service Type</th>
								<th className="table-th w-16">Action</th>
							</tr>
						</thead>
						<tbody>
							{[...new Array(20)].map((_, idx) => (
								<tr key={idx}>
									<td className="table-td">Air Filter {idx}</td>
                  <td className='table-td'>
                    <Button type='link' danger className='w-full text-base'>
                      <BsFillTrashFill />
                    </Button>
                  </td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Modal>
		</div>
	);
}
