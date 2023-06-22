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
} from './pages/portal';
import EditDriver from './pages/portal/drivers/EditDriver';
import EditVehicle from './pages/portal/vehicles/EditVehicle';

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
				<Route
					path="maintenance-reminders"
					element={<MaintenanceReminders />}
				/>
				<Route path="maintenance-history" element={<MaintenanceHistory />} />
				<Route path="manage-drivers" element={<ManageDrivers />} />
				<Route path="manage-vehicles" element={<ManageVehicles />} />
				<Route path="manage-groups" element={<ManageGroups />} />
				<Route path="manage-elds" element={<ManageELDs />} />
				<Route path="manage-trackers" element={<ManageTrackers />} />
				<Route path="company" element={<Company />} />
			</Route>
		</Routes>
	);
}
