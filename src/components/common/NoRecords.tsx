import { FaBoxOpen } from 'react-icons/fa';

export default function NoRecords({ text }: { text?: string }) {
	return (
		<div className="text-black-4 px-3 py-2 text-sm flex flex-col gap-1 items-center justify-center absolute top-0 left-0 w-full h-4/5">
			<FaBoxOpen className="text-9xl" />
			<span className="text-lg">{text || 'No records found'}</span>
		</div>
	);
}
