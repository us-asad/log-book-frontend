import { useMemo } from 'react';
import { Tabs } from 'antd';
import { Generate, Reports } from '../../components/ifta';
import { PageHeader } from '../../components/common';

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
			<PageHeader title="IFTA Reports" />
			<Tabs items={tabItems} />
		</div>
	);
}
