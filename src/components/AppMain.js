import React, { Component } from 'react';

export default class appMain extends Component {
	cStyles = {
		container: 'flex justify-center items-center h-screen bg-blue-100',
		card: 'text-center text-blue-600 rounded-lg bg-gray-50 border p-8 shadow-sm',
		title: 'font-bold text-6xl',
		subTitle: 'text-2xl text-blue-400',
		color: 'text-xl text-red'
	};

	render() {
		return (
			<div className={this.cStyles.container}>
				<div className={this.cStyles.card}>
					<h1 className="text-blue-900">Hello World</h1>
					<h1 className={this.cStyles.title}>Create React App</h1>
					<h2 className={this.cStyles.subTitle}>w/ tailwindcss v2.0</h2>
				</div>
			</div>
		);
	}
}
