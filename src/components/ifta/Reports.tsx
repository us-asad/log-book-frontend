import { Button } from 'antd';
import { MdSort } from 'react-icons/md';

export default function Reports() {
	return (
		<>
			<div className="overflow-auto max-h-[calc(100vh-300px)] border border-black-2 border-solid rounded-md mt-4 w-full">
				<table className="table">
					<thead className="text-sm">
						<tr>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Submitted</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>Form</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
								<button className="flex items-center gap-1">
									<span>To</span>
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
									<span>Status</span>
									<MdSort />
								</button>
							</th>
							<th className="table-th text-start hover:bg-black-2 duration-150 cursor-pointer">
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
								<td className="table-td">
									May 27, 03:29 PM
								</td>
								<td className="table-td">
									2022/07/01
								</td>
								<td className="table-td">
									2023/06/30
								</td>
								<td className="table-td">
									925
								</td>
								<td className="table-td">
									Ready
								</td>
								<td className="table-td">
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
