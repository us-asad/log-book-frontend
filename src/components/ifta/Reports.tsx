import React from 'react';
import { Button } from 'antd';
import { MdSort } from 'react-icons/md';

export default function Reports() {
	return (
		<>
			<div className="overflow-auto max-h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="w-full min-w-max border-collapse">
					<thead className="text-sm">
						<tr>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Submitted</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Form</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>To</span>
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
									<span>Status</span>
									<MdSort />
								</button>
							</th>
							<th className="font-medium border border-black-2 border-solid px-3 py-2 text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Report</span>
									<MdSort />
								</button>
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{[...new Array(20)].map((_, idx) => (
							<tr key={idx}>
								<td className="border border-black-2 border-solid px-3 py-2">
									May 27, 03:29 PM
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									2022/07/01
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									2023/06/30
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									925
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									Ready
								</td>
								<td className="border border-black-2 border-solid px-3 py-2">
									<div className="flex flex-col">
										<Button type="link" className="p-0 h-max w-max">
											Download PDF
										</Button>
										<Button type="link" className="p-0 h-max w-max">
											Download CSV
										</Button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Button type="link" className="mx-auto block mt-2">
				Load More
			</Button>
		</>
	);
}
