import { PageHeader } from '../../components/common';

export default function Company() {
	return (
		<div>
			<PageHeader title="Company Details" />
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full border-collapse">
					<tbody>
						<tr>
							<td colSpan={2} className="bg-blue text-white px-3 py-1.5">
								General Information
							</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Company ID</td>
							<td className="px-3 py-1.5">Company:ffyOIap53H</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Company Name</td>
							<td className="px-3 py-1.5">KMS TRANS INC</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">DOT Number</td>
							<td className="px-3 py-1.5">2556034</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Company Time Zone</td>
							<td className="px-3 py-1.5">ET</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Company Address</td>
							<td className="px-3 py-1.5">
								40 Bellevue Ave, Penndel, PA, 19047
							</td>
						</tr>
						<tr>
							<td colSpan={2} className="bg-blue text-white px-3 py-1.5">
								Carrier Settings
							</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Compliance Mode</td>
							<td className="px-3 py-1.5">ELD</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Vehicle Motion Threshold</td>
							<td className="px-3 py-1.5">5 mi/h</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Cycle Rule</td>
							<td className="px-3 py-1.5">USA 70 hour / 8 day</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Cargo Type</td>
							<td className="px-3 py-1.5">Property</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Restart</td>
							<td className="px-3 py-1.5">34 Hour Restart</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Rest Break</td>
							<td className="px-3 py-1.5">30 Minute Rest Break Required</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Short-Haul Exception</td>
							<td className="px-3 py-1.5">Forbidden</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Personal Conveyance</td>
							<td className="px-3 py-1.5">Allowed</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Yard Moves</td>
							<td className="px-3 py-1.5">Allowed</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Exempt Driver</td>
							<td className="px-3 py-1.5">Forbidden</td>
						</tr>
						<tr>
							<td colSpan={2} className="bg-blue text-white px-3 py-1.5">
								Terminal 1
							</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Terminal Address</td>
							<td className="px-3 py-1.5">
								40 Bellevue Ave, Pendell, PA, 19047
							</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Time Zone</td>
							<td className="px-3 py-1.5">ET</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">24 Hour Period Staring Time</td>
							<td className="px-3 py-1.5">00:00:00</td>
						</tr>
						<tr>
							<td colSpan={2} className="bg-blue text-white px-3 py-1.5">
								Integrations
							</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">Project 44</td>
							<td className="px-3 py-1.5">Off</td>
						</tr>
						<tr className="border-b-0.5 border-solid border-black-2">
							<td className="px-3 py-1.5">MacroPoint</td>
							<td className="px-3 py-1.5">Off</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
