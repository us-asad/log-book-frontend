import React, { useMemo } from 'react';
import { Button, Tabs } from 'antd';
import { IoMdRefresh } from 'react-icons/io';
import Generate from '../../components/ifta/Generate';
import Reports from '../../components/ifta/Reports';

export default function Ifta() {
	const tabItems = useMemo(
		() => [
			{ key: 'generate', label: 'Generate New Report', children: <Generate /> },
			{ key: 'reports', label: 'Reports', children: <Reports /> },
		],
		[]
	);

	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-medium">IFTA Reports</h2>
				<div className="flex items-center gap-2">
					<Button className="flex items-center gap-1 group">
						<span>Refresh</span>
						<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
					</Button>
				</div>
			</div>
			<Tabs items={tabItems} />
		</div>
	);
}
