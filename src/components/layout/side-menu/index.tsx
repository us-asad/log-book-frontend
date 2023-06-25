import React, { useMemo } from 'react';
import { FaUser, FaListUl } from 'react-icons/fa';
import {
	BsFillTruckFrontFill,
	BsCalendarWeek,
	BsFillClipboardDataFill,
	BsFillFuelPumpFill,
	BsAlarm,
	BsBuildings,
} from 'react-icons/bs';
import { RiShieldCheckLine, RiTimerLine } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import { GoHistory } from 'react-icons/go';
import {
	MdOutlineManageHistory,
	MdOutlinePeopleAlt,
	MdOutlineCellWifi,
	MdGpsFixed,
} from 'react-icons/md';
import LinksWrapper from './LinksWrapper';
import LinkItem from './LinkItem';
import { HiChevronDown } from 'react-icons/hi';
import { Button, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function SideMenu() {
  const navigate = useNavigate();
	const profileDropDownItems = useMemo(
		() => [
			{ label: 'Account', key: 'account', onClick: () => navigate("/portal/profile/edit") },
			{ label: 'Log out', key: 'logout', danger: true, onClick: () => navigate("/login") },
		],
		[]
	);

	return (
		<div className="bg-white flex flex-col gap-1 sticky top-3 shadow-sm border-2 border-solid border-black-2 rounded-xl py-4 px-3">
			<Dropdown menu={{ items: profileDropDownItems }}>
				<Button className="flex items-center justify-between ">
					<span>John Doe</span>
					<HiChevronDown className="text-xl" />
				</Button>
			</Dropdown>
			{links.map((item) => (
				<React.Fragment key={item.label}>
					{item.links ? (
						<LinksWrapper
							label={item.label}
							links={item.links}
							Icon={item.Icon}
						/>
					) : (
						<LinkItem
							label={item.label}
							link={item.link}
							Icon={item.Icon}
							small={false}
						/>
					)}
				</React.Fragment>
			))}
		</div>
	);
}

const links = [
	{ label: 'Drivers', link: '/drivers', Icon: FaUser },
	{ label: 'Vehicles', link: '/vehicles', Icon: BsFillTruckFrontFill },
	{ label: 'Logs', link: '/logs', Icon: FaListUl },
	{
		label: 'Unidentified Events',
		link: '/unidentified-events',
		Icon: BsCalendarWeek,
	},
	{ label: 'DVIRs', link: '/dvirs', Icon: RiShieldCheckLine },
	{
		label: 'Reports',
		link: '#',
		Icon: BsFillClipboardDataFill,
		links: [
			{ label: 'IFTA', link: '/ifta', Icon: BsFillFuelPumpFill },
			{ label: 'Idiling', link: '/idling', Icon: RiTimerLine },
		],
	},
	{
		label: 'Maintenance',
		link: '#',
		Icon: AiFillSetting,
		links: [
			{ label: 'Reminders', link: '/maintenance-reminders', Icon: BsAlarm },
			{ label: 'History', link: '/maintenance-history', Icon: GoHistory },
		],
	},
	{
		label: 'Manage',
		link: '#',
		Icon: MdOutlineManageHistory,
		links: [
			{ label: 'Drivers', link: '/manage-drivers', Icon: FaUser },
			{
				label: 'Vehicles',
				link: '/manage-vehicles',
				Icon: BsFillTruckFrontFill,
			},
			{ label: 'Groups', link: '/manage-groups', Icon: MdOutlinePeopleAlt },
			{ label: 'ELDs', link: '/manage-elds', Icon: MdOutlineCellWifi },
			{ label: 'GPS Trackers', link: '/manage-trackers', Icon: MdGpsFixed },
			{ label: 'Company', link: '/company', Icon: BsBuildings },
		],
	},
];
