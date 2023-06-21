import React from 'react';
import { Button } from 'antd';
import { IoMdRefresh } from 'react-icons/io';

interface Props {
	title?: string;
	buttons?: React.ReactNode;
}

export default function PageHeader({ title, buttons }: Props) {
	return (
		<div className="flex items-center justify-between mb-6">
			<h2 className="text-xl font-medium">{title}</h2>
			<div className="flex items-center gap-2">
				{buttons}
				<Button className="flex items-center gap-1 group">
					<span>Refresh</span>
					<IoMdRefresh className="text-lg text-black-4 group-hover:text-inherit duration-50" />
				</Button>
			</div>
		</div>
	);
}
