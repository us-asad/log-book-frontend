import { Button, DatePicker, Select } from 'antd';
import { IoMdCloudDownload } from 'react-icons/io';
import { MdCloudUpload } from 'react-icons/md';
import PageHeader from '../../../components/common/PageHeader';
import { useNavigate } from 'react-router-dom';

export default function Logs() {
	const navigate = useNavigate();

	return (
		<div>
			<PageHeader
				title="Logs"
				buttons={
					<>
						<Button className="flex items-center gap-1 group">
							<span>Send Output File</span>
							<MdCloudUpload className="text-lg text-black-4 group-hover:text-inherit duration-50" />
						</Button>
						<Button className="flex items-center gap-1 group">
							<span>Download</span>
							<IoMdCloudDownload className="text-lg text-black-4 group-hover:text-inherit duration-50" />
						</Button>
					</>
				}
			/>
			<div className="flex gap-2 mt-8">
				<DatePicker />
				<DatePicker placeholder="End Date" />
				<Select
					className="w-32"
					defaultValue="driver"
					options={[
						{ label: 'Driver', value: 'driver' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
				<Select
					className="w-32"
					defaultValue="violations"
					options={[
						{ label: 'Violations', value: 'violations' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
				<Select
					className="w-32"
					defaultValue="form"
					options={[
						{ label: 'Form & Manner', value: 'form' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
				<Select
					className="w-32"
					defaultValue="desc"
					options={[
						{ label: 'Date (desc.)', value: 'desc' },
						{ label: 'Driver-2', value: 'driver2' },
						{ label: 'Driver3', value: 'driver3' },
						{ label: 'Driver4', value: 'driver4' },
					]}
				/>
			</div>
			<div className="overflow-auto max-h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start">
								Date
							</th>
							<th className="table-th text-start">
								Driver
							</th>
							<th className="table-th text-start">
								Hours Drove
							</th>
							<th className="table-th text-start">
								Violations
							</th>
							<th className="table-th text-start">
								Form & Manner
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{[...new Array(20)].map((_, idx) => (
							<tr key={idx} className='table-th-hoverable' onClick={() => navigate("/portal/logs/asddasd")}>
								<td className="table-td">
									Jun 20
								</td>
								<td className="table-td">
									Name1 Name2
								</td>
								<td className="table-td">
									00.00
								</td>
								<td className="table-td"></td>
								<td className="table-td">
									Not Crtified
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Button type="link" className="mx-auto block mt-2">
				Load More
			</Button>
		</div>
	);
}
