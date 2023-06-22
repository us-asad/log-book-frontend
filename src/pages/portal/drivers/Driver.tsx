import React from 'react';
import { Button, Collapse, Select } from 'antd';
import { useParams } from 'react-router-dom';
import { FaEdit, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { RiSmartphoneLine } from 'react-icons/ri';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { MdSort } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../../components/common';

export default function Drivers() {
	const params = useParams();

	return (
		<div>
			<PageHeader
				title={params.id}
				buttons={
					<>
						<Select
							className="w-40"
							defaultValue="auto"
							options={[
								{ value: 'auto', label: 'Auto Refresh Off' },
								{ value: '1', label: '1 Minute' },
								{ value: '5', label: '5 Minutes' },
								{ value: '10', label: '10 Minutes' },
							]}
						/>
						<Button>
							<Link
								className="flex items-center gap-2 group"
								to="/portal/drivers/testuser/edit"
							>
								<span>Edit</span>
								<FaEdit className="text-black-4 group-hover:text-inherit duration-75" />
							</Link>
						</Button>
					</>
				}
			/>
			<div className="flex items-center gap-3 py-3">
				<Button className="flex items-center gap-2 px-3 py-2 rounded-md">
					<FaPhoneAlt className="text-base" />
					<span className="text-base">(718) 708-0945</span>
				</Button>
				<Button className="flex items-center gap-2 px-3 py-2 rounded-md">
					<FaRegEnvelope className="text-base" />
					<span className="text-base">akobir220kms</span>
				</Button>

				<p className="flex items-center gap-2 border-b border-0 border-solid border-black-2  px-3 py-2">
					<FiClock className="text-lg" />
					<span className="text-sm">USA 70 hour / 8 day</span>
				</p>
				<p className="flex items-center gap-2 border-b border-0 border-solid border-black-2  px-3 py-2">
					<RiSmartphoneLine className="text-lg" />
					<span className="text-sm">bc692355866ba777</span>
				</p>
			</div>

			<div className="border border-solid border-black-2 rounded-md px-6 py-4 mt-5">
				<h2 className="text-xl font-normal">Hours of Service</h2>
				<div className="overflow-auto max-h-[calc(100vh-300px)] border border-black-2 border-solid rounded-tl-md rounded-tr-md border-b-0 mt-4 w-full">
					<table className="w-full min-w-max border-collapse">
						<thead className="text-xs tracking-[.05em]">
							<tr>
								<th className="table-th">Status</th>
								<th className="table-th">Date</th>
								<th className="table-th">Vehicle</th>
								<th className="table-th">Location</th>
								<th className="table-th">Break</th>
								<th className="table-th">Drive</th>
								<th className="table-th">Shift</th>
								<th className="table-th">Cycle</th>
							</tr>
						</thead>
						<tbody className="text-sm text-black-4">
							<tr>
								<td className="table-td text-center bg-black-4 text-white">
									OFF DUTY
								</td>
								<td className="table-td text-center">
									Jun 16, 2023 2:13 PM EDT
								</td>
								<td className="table-td text-center">220</td>
								<td className="table-td text-center">
									5mi NW from Bristol, PA
								</td>
								<td className="table-td text-center text-3xl">08:00</td>
								<td className="table-td text-center text-3xl">11:00 </td>
								<td className="table-td text-center text-3xl">14:00</td>
								<td className="table-td text-center text-3xl">33:14</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<Collapse
						className="rounded-tl-none rounded-tr-none"
						items={[
							{
								key: '1',
								label: 'Recap',
								children: <RecapTable />,
							},
							{
								key: '2',
								label: 'Map',
								children: <p>Coming sOOn!</p>,
							},
						]}
					/>
				</div>
			</div>

			<div className="border border-solid border-black-2 rounded-md px-6 py-4 mt-5">
				<h2 className="text-xl font-normal">Logs</h2>
				<div className="flex items-center justify-between bg-blue text-white text-sm px-3 py-2 mt-4 rounded-tl-md rounded-tr-md">
					<p>Last 14 Days</p>
					<button className="flex items-center gap-1 default-hover">
						<span>More</span>
						<AiTwotoneCalendar className="text-base" />
					</button>
				</div>
				<div className="rounded-br-md rounded-bl-md overflow-hidden border border-solid border-black-2">
					<table className="table">
						<thead>
							<tr>
								<th className="table-th table-th-hoverable">
									<button className="uppercase text-[13px] font-medium flex items-center gap-1">
										<span>Date</span>
										<MdSort className="text-base" />
									</button>
								</th>
								<th className="table-th text-start">Hours Drove</th>
								<th className="table-th text-start">Violations</th>
								<th className="table-th text-start">Form & Manner</th>
							</tr>
						</thead>
						<tbody>
							{[...new Array(10)].map((_, idx) => (
								<tr key={idx}>
									<td className="table-td">Jun 17</td>
									<td className="table-td">00.00</td>
									<td className="table-td"></td>
									<td className="table-td">Not Certified</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

const RecapTable = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th className="table-th text-start">Date</th>
					<th className="table-th text-start">Hours Worked</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="table-td">Saturday, Jun 10</td>
					<td className="table-td">00.00</td>
				</tr>
				<tr>
					<td className="table-td">Sunday, Jun 11</td>
					<td className="table-td"> 00.00</td>
				</tr>
				<tr>
					<td className="table-td">Monday, Jun 12</td>
					<td className="table-td"> 00.00</td>
				</tr>
				<tr>
					<td className="table-td">Tuesday, Jun 13</td>
					<td className="table-td">11.06</td>
				</tr>
				<tr>
					<td className="table-td">Wednesday, Jun 14</td>
					<td className="table-td">11.25</td>
				</tr>
				<tr>
					<td className="table-td">Thursday, Jun 15</td>
					<td className="table-td"> 10.14</td>
				</tr>
				<tr>
					<td className="table-td">Friday, Jun 16</td>
					<td className="table-td"> 04.31</td>
				</tr>
				<tr>
					<td className="table-td font-semibold">LAST 7 DAYS</td>
					<td className="table-td font-semibold text-3xl">36.76F</td>
				</tr>
			</tbody>
		</table>
	);
};
