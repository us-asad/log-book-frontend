import React from 'react';
import Layout from './components/layout';
import AppRoutes from './Routes';

export default function App() {
	return (
		<div className="min-h-screen bg-purple-2">
			<Layout>
				<AppRoutes />
			</Layout>
		</div>
	);
}
