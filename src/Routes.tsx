import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, ResetPassword } from './pages';
import {
	Company,
	Dvirs,
	Idling,
	Ifta,
	Logs,
	MaintenanceHistory,
	MaintenanceReminders,
	ManageDrivers,
	ManageGroups,
	ManageTrackers,
	ManageVehicles,
	UnidentifiedEvents,
	Vehicles,
	ManageELDs,
	Drivers,
	Driver,
	Vehicle,
	Log,
	AddMaintenanceReminders,
	AddDriver,
	AddVehicle,
	EditDriver,
	EditVehicle,
	AddGroup,
	EditProfile,
} from './pages/portal';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="/portal/">
				<Route path="vehicles">
					<Route path="" element={<Vehicles />} />
					<Route path=":id">
						<Route path="" element={<Vehicle />} />
						<Route path="edit" element={<EditVehicle />} />
					</Route>
				</Route>
				<Route path="drivers">
					<Route path="" element={<Drivers />} />
					<Route path=":id">
						<Route path="" element={<Driver />} />
						<Route path="edit" element={<EditDriver />} />
					</Route>
				</Route>
				<Route path="logs">
					<Route path="" element={<Logs />} />
					<Route path=":id" element={<Log />} />
				</Route>
				<Route path="unidentified-events" element={<UnidentifiedEvents />} />
				<Route path="dvirs" element={<Dvirs />} />
				<Route path="ifta" element={<Ifta />} />
				<Route path="idling" element={<Idling />} />
				<Route path="maintenance-reminders">
					<Route path="" element={<MaintenanceReminders />} />
					<Route path="add" element={<AddMaintenanceReminders />} />
				</Route>
				<Route path="maintenance-history" element={<MaintenanceHistory />} />
				<Route path="manage-drivers">
					<Route path="" element={<ManageDrivers />} />
					<Route path="add" element={<AddDriver />} />
				</Route>
				<Route path="manage-vehicles">
					<Route path="" element={<ManageVehicles />} />
					<Route path="add" element={<AddVehicle />} />
				</Route>
				<Route path="manage-groups">
					<Route path="" element={<ManageGroups />} />
					<Route path="add" element={<AddGroup />} />
				</Route>
				<Route path="manage-elds" element={<ManageELDs />} />
				<Route path="manage-trackers" element={<ManageTrackers />} />
				<Route path="company" element={<Company />} />

				<Route path='profile/edit' element={<EditProfile />} />
			</Route>
		</Routes>
	);
}
