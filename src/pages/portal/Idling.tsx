import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { IoMdRefresh } from 'react-icons/io';

export default function Idling() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">Idling Report</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						<span>Refresh</span>
						<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				</div>
			</div>
			<div className="mt-5">
				<form className="flex flex-col gap-4 w-96">
					<label className="flex flex-col gap-1">
						<span className="text-sm">
							Start Date <span className="text-red-600">*</span>
						</span>
						<DatePicker />
					</label>
					<label className="flex flex-col gap-1">
						<span className="text-sm">
							End Date <span className="text-red-600">*</span>
						</span>
						<DatePicker placeholder="End Date" />
					</label>
					<label className="flex flex-col gap-1">
						<span className="text-sm">
							Vehicle <span className="text-red-600">*</span>
						</span>
						<Select
							defaultValue="select"
							options={[
								{ value: 'select', label: 'Select Vehicle' },
								{ value: 'select2', label: 'Select Vehicle2' },
							]}
						/>
						<span className="text-xs text-black-4">
							Please note: driver&apos;s app version should be at least 2.3.78.
							Previous app versions are not supported.
						</span>
					</label>
					<label className="flex flex-col gap-1">
						<span className="text-sm">Output Format</span>
						<Select
							defaultValue="pdf"
							options={[
								{ value: 'pdf', label: 'PDF' },
								{ value: 'csv', label: 'CSV' },
							]}
						/>
					</label>
					<Button type="primary" className="w-max">
						Generate
					</Button>
				</form>
			</div>
		</div>
	);
}
