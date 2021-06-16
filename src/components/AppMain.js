import React from 'react';

const AppMain = () => {

	const cStyles = {
		container: 'flex justify-center items-center h-screen bg-blue-900',
		card: 'text-center text-blue-600 rounded-lg bg-gray-50 border p-8 shadow-sm',
		title: 'font-bold text-6xl',
		subTitle: 'text-2xl text-blue-400',
		color: 'text-xl text-red'
	};

	return (

		

		<div className={cStyles.container}>
			<div className={cStyles.card}>
				<h1 className="text-blue-900">Hello World</h1>
				<h1 className={cStyles.title}>Create React App</h1>
				<h2 className={cStyles.subTitle}>tailwindcss v2.0</h2>
			</div>
		</div>
	);
}


export default AppMain;