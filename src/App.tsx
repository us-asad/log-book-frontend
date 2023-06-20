import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import Vehicles from './pages/portal/Vehicles';
import Layout from './components/layout';
import Drivers from './pages/portal/Drivers';
import Logs from './pages/portal/Logs';
import UnidentifiedEvents from './pages/portal/UnidentifiedEvents';
import Dvirs from './pages/portal/Dvirs';
import Ifta from './pages/portal/Ifta';
import Idling from './pages/portal/Idling';
import MaintenanceReminders from './pages/portal/MaintenanceReminders';
import MaintenanceHistory from './pages/portal/MaintenanceHistory';
import ManageDrivers from './pages/portal/ManageDrivers';
import ManageVehicles from './pages/portal/ManageVehicles';

export default function App() {
	return (
		<div className="min-h-screen bg-purple-2">
			<Layout>
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
				</Routes>
			</Layout>
		</div>
	);
}
