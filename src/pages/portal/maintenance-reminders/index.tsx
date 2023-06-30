import { Button, Select } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdSort } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { NoRecords, PageHeader } from '../../../components/common';

export default function MaintenanceReminders() {
	const navigate = useNavigate();

	return (
		<div>
			<PageHeader
				title="Maintenance Reminders"
				buttons={
					<>
						<Button
							onClick={() => navigate('/portal/maintenance-reminders/add')}
							className="flex items-center gap-1 group"
						>
							<span>Add Reminder</span>
							<AiOutlinePlus className="text-lg text-black-4 group-hover:text-inherit duration-50" />
						</Button>
						<Button className="flex items-center gap-1 group">
							Copy Reminder
						</Button>
					</>
				}
			/>
			<div className="flex gap-2 mt-8">
				<Select
					className="w-28"
					defaultValue="all"
					options={[
						{ value: 'all', label: 'All Vehicles' },
						{ value: '1', label: '0001' },
						{ value: '2', label: '001' },
						{ value: '3', label: '002' },
					]}
				/>
			</div>
			<div className="overflow-auto h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full relative">
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start">
								Vehicle
							</th>
							<th className="table-th text-start">
								Service Type
							</th>
							<th className="table-th text-start">
								Service Interval
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Next Service Due</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start">
								Complete
							</th>
							<th className="table-th text-start">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						<NoRecords />
					</tbody>
				</table>
			</div>
		</div>
	);
}
