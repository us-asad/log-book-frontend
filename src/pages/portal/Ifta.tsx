import React, { useMemo } from 'react';
import { Tabs } from 'antd';
import Generate from '../../components/ifta/Generate';
import Reports from '../../components/ifta/Reports';
import PageHeader from '../../components/common/PageHeader';

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
