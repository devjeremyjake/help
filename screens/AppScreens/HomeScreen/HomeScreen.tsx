import React from 'react';
import ScrollViewComponent from '../../../Components/ScrollViewComponent';
import DashboardHeader from '../../../Components/DashboardHeaderComponent/DashboardHeader';
import FavoritesComponent from '../../../Components/FavoritesComponent/FavoritesComponent';
import ProjectComponent from '../../../Components/ProjectComponent/ProjectComponent';
const HomeScreen = () => {
	return (
		<ScrollViewComponent>
			<DashboardHeader />
			<FavoritesComponent />
			<ProjectComponent />
		</ScrollViewComponent>
	);
};

export default HomeScreen;
