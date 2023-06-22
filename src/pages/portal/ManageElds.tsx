import React from 'react';
import { Input } from 'antd';
import { MdSort } from 'react-icons/md';
import { PageHeader } from '../../components/common';

export default function ManageELDs() {
	return (
		<div>
			<PageHeader title="Manage ELDs" />
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start w-56">
								<div className="flex flex-col gap-1">
									<span>ELD</span>
									<Input size="small" placeholder="Search" className="w-56" />
								</div>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Status</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>ELD Type</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Vehicle</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Malfunctions</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>F/W Version</span>
									<MdSort />
								</button>
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{[...new Array(20)].map((_, idx) => (
							<tr key={idx}>
								<td className="table-td">
									3B2000142717 (F9:F4:43:FD:E9:64)
								</td>
								<td className="table-td">
									Active
								</td>
								<td className="table-td">
									PT30 (BT)
								</td>
								<td className="table-td">
									1129
								</td>
								<td className="table-td"></td>
								<td className="table-td">
									1.0,5 | 1.1.46,72
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
