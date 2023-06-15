import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Vehicles from "./pages/portal/Vehicles";

export default function App() {
	return (
		<div className="min-h-screen bg-purple-2">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/portal/vehicles" element={<Vehicles />} />
			</Routes>
		</div>
	)
}