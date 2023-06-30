import { Button, Select } from 'antd';
import { AiFillPrinter, AiOutlineClockCircle } from 'react-icons/ai';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaUser, FaThList } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import { BsCheckLg, BsPlusCircleFill } from 'react-icons/bs';
import { PageHeader } from '../../../components/common';

export default function Logs() {
	return (
		<div>
			<PageHeader
				title="Wed Jun 21, 2023"
				noRefresh
				buttons={
					<>
						<Button className="flex items-center gap-2">
							<span>Print</span>
							<AiFillPrinter className="text-lg" />
						</Button>
						<div>
							<Button className="px-2 text-lg rounded-tr-none rounded-br-none">
								<HiOutlineChevronLeft />
							</Button>
							<Button className="px-2 text-lg rounded-tl-none rounded-bl-none">
								<HiOutlineChevronRight />
							</Button>
						</div>
					</>
				}
			/>
			<div className="flex gap-5 mt-8">
				<Button className="icon-btn px-0" type="link">
					<FaUser />
					<span>Amir Kholmukhammedov</span>
				</Button>
				<p className="icon-btn">
					<AiOutlineClockCircle className="text-lg" />
					<span>USA 70 hour / 8 day</span>
				</p>
				<p className="text-red-600 icon-btn">
					<MdErrorOutline className="text-lg" />
					<span>No Form</span>
				</p>
				<p className="text-green-600 icon-btn">
					<BsCheckLg className="text-lg" />
					<span>No Violations</span>
				</p>
			</div>

			<div className="mt-10">
				<h2 className="text-lg font-normal mb-6">Driver Log</h2>
				<table className="table">
					<thead>
						<tr className="bg-blue text-white">
							<th colSpan={5} className="table-th text-start !capitalize">
								General
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan={3} className="table-td">
								<div className="flex justify-between">
									<span>Driver</span>
									<span>Amir Kholmukhammedov</span>
								</div>
							</td>
							<td colSpan={2} className="table-td">
								<div className="flex justify-between">
									<span>Exempt Driver Status</span>
									<span>No</span>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="table-td">
								<div className="flex justify-between">
									<span>Driver ID</span>
									<span>amir578k</span>
								</div>
							</td>
							<td colSpan={2} className="table-td">
								<div className="flex justify-between">
									<span>Co-Driver</span>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="table-td">
								<div className="flex justify-between">
									<span>Driver Licence</span>
									<span>32975403</span>
								</div>
							</td>
							<td colSpan={2} className="table-td">
								<div className="flex justify-between">
									<span>Co-Driver ID</span>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="table-td">
								<div className="flex justify-between">
									<span>Driver Licence State</span>
									<span>PA</span>
								</div>
							</td>
							<td colSpan={2} className="table-td">
								<div className="flex justify-between">
									<span>Exceptions</span>
								</div>
							</td>
						</tr>
						<tr className="bg-blue text-white">
							<th colSpan={5} className="table-th text-start !capitalize">
								Common
							</th>
						</tr>
						<tr>
							<th className="table-th text-start">Vehicle</th>
							<th className="table-th text-start">VIN</th>
							<th className="table-th text-start">ODOMETER (MI)</th>
							<th className="table-th text-start">DISTANCE (MI)</th>
							<th className="table-th text-start">ENGINE HOURS</th>
						</tr>
						<tr>
							<td className="table-td">
								<Button className="p-0" type="link">
									578
								</Button>
							</td>
							<td className="table-td">3AKJHHDR6LSLR0686</td>
							<td className="table-td">471831</td>
							<td className="table-td"></td>
							<td className="table-td">11933.1</td>
						</tr>
						<tr>
							<th colSpan={3} className="table-th text-start">
								TRAILERS
							</th>
							<th colSpan={2} className="table-th text-start">
								SHIPPING DOCS
							</th>
						</tr>
						<tr>
							<td colSpan={3} className="table-td">
								<span className="invisible">.</span>
							</td>
							<td colSpan={2} className="table-td"></td>
						</tr>
						<tr>
							<th className="table-th" colSpan={2}>
								CARRIER
							</th>
							<th className="table-th">MAIN OFFICE</th>
							<th className="table-th">HOME TERMINAL</th>
							<th className="table-th">DOT NUMBER</th>
						</tr>
						<tr>
							<td className="table-td" colSpan={2}>
								KMS TRANS INC
							</td>
							<td className="table-td">40 Bellevue Ave, Penndel, PA, 19047</td>
							<td className="table-td">40 Bellevue Ave, Pendell, PA, 19047</td>
							<td className="table-td">2556034</td>
						</tr>
						<tr>
							<th colSpan={3} className="table-th">
								SN (MAC)
							</th>
							<th colSpan={2} className="table-th">
								PROVIDER
							</th>
						</tr>
						<tr>
							<td colSpan={3} className="table-td">
								3B2000096104 (D1:0F:83:23:DF:00)
							</td>
							<td colSpan={2} className="table-td">
								SOLID ELD
							</td>
						</tr>
						<tr>
							<th colSpan={3} className="table-th">
								Diagnostic Indicator
							</th>
							<th colSpan={2} className="table-th">
								Malfunction Indicator
							</th>
						</tr>
						<tr>
							<td colSpan={3} className="table-td">
								No
							</td>
							<td colSpan={2} className="table-td">
								No
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="mt-10">
				<h2 className="text-lg font-normal mb-6">Log</h2>
				<table className="table">
					<thead>
						<tr>
							<td colSpan={9} className="table-td bg-blue !text-white">
								<div className="flex items-center justify-between">
									<span>Log Events</span>
									<div className="flex items-center gap-2">
										<button>
											<BsPlusCircleFill />
										</button>
										<button>
											<FaThList />
										</button>
									</div>
								</div>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan={9} className="table-td">
								<div className="h-20 grid place-content-center">
									Canvas Table
								</div>
							</td>
						</tr>
						<tr>
							<th className="table-th">Time</th>
							<th className="table-th">Event</th>
							<th className="table-th">
								<div className="flex flex-col gap-1">
									<span>Status</span>
									<Select
										size="small"
										defaultValue="all"
										className="w-28 text-start capitalize"
										options={[
											{ value: 'all', label: 'All' },
											{ value: 'active', label: 'Active' },
											{ value: 'inactive', label: 'Inactive' },
										]}
									/>
								</div>
							</th>
							<th className="table-th">Location</th>
							<th className="table-th">Oirign</th>
							<th className="table-th">Odometer (mi)</th>
							<th className="table-th">Engine Hours</th>
							<th className="table-th">Notes</th>
							<th className="table-th">Manage</th>
						</tr>
						<tr>
							<td className="table-td">Jun 21, 05:29:24 am</td>
							<td className="table-td">Off Duty</td>
							<td className="table-td">Active</td>
							<td className="table-td">2mi SW from Neenah, WI</td>
							<td className="table-td">Driver</td>
							<td className="table-td">471831</td>
							<td className="table-td">11933.1</td>
							<td className="table-td"></td>
							<td className="table-td"></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="mt-10">
				<h2 className="text-lg font-normal mb-6">Signature</h2>
				<div className="flex justify-between text-sm">
					<p>
						I hereby certify that my data entries and my record of duty status
						for this 24-hour period are true and correct.
					</p>
					<span className="text-red-600">Not Signed</span>
				</div>
			</div>
		</div>
	);
}
