import React, { useEffect } from 'react';
import Cookie from "js-cookie";
import Layout from './components/layout';
import AppRoutes from './Routes';
import { useLocation, useNavigate } from 'react-router-dom';
import publicPages from './constants/public-pages';

export default function App() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const login = Cookie.get("login");
		if (!login && !publicPages.includes(location.pathname)) navigate("/login");
	}, []);

	return (
		<div className="min-h-screen bg-purple-2">
			<Layout>
				<AppRoutes />
			</Layout>
		</div>
	);
}
