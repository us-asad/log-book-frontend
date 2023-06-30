import { Button, DatePicker, Select } from 'antd';

export default function Generate() {
	return (
		<form className='flex flex-col gap-4 w-96'>
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
			</label>
      <Button type="primary" className='w-max'>Generate New</Button>
		</form>
	);
}
