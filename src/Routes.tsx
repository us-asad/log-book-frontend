import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, ResetPassword } from './pages';
import {
	Company,
	Drivers,
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
} from './pages/portal';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="/portal/vehicles" element={<Vehicles />} />
			<Route path="/portal/drivers" element={<Drivers />} />
			<Route path="/portal/logs" element={<Logs />} />
			<Route
				path="/portal/unidentified-events"
				element={<UnidentifiedEvents />}
			/>
			<Route path="/portal/dvirs" element={<Dvirs />} />
			<Route path="/portal/ifta" element={<Ifta />} />
			<Route path="/portal/idling" element={<Idling />} />
			<Route
				path="/portal/maintenance-reminders"
				element={<MaintenanceReminders />}
			/>
			<Route
				path="/portal/maintenance-history"
				element={<MaintenanceHistory />}
			/>
			<Route path="/portal/manage-drivers" element={<ManageDrivers />} />
			<Route path="/portal/manage-vehicles" element={<ManageVehicles />} />
			<Route path="/portal/manage-groups" element={<ManageGroups />} />
			<Route path="/portal/manage-elds" element={<ManageELDs />} />
			<Route path="/portal/manage-trackers" element={<ManageTrackers />} />
			<Route path="/portal/company" element={<Company />} />
		</Routes>
	);
}
