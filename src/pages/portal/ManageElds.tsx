import React from 'react';
import { Button, Input } from 'antd';
import { IoMdRefresh } from 'react-icons/io';
import { MdSort } from 'react-icons/md';

export default function ManageELDs() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">Manage ELDs</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						<span>Refresh</span>
						<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				</div>
			</div>
			<div className="overflow-auto max-h-[calc(100vh-200px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start w-56">
								<div className="flex flex-col gap-1">
									<span>ELD</span>
									<Input size="small" placeholder="Search" className="w-56" />
								</div>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Status</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>ELD Type</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Vehicle</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Malfunctions</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
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
								<td className="border border-black-2 border-solid px-3 py-2">
									3B2000142717 (F9:F4:43:FD:E9:64)
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									Active
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									PT30 (BT)
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									1129
								</td>
								<td className="border border-black-2 border-solid px-3 py-2"></td>
								<td className="border border-black-2 border-solid px-3 py-2">
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
