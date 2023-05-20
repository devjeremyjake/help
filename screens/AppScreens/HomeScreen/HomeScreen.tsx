import { ScrollView } from 'react-native';
import React from 'react';
import DashboardHeader from '../../../Components/DashboardHeaderComponent/DashboardHeader';
import FavoritesComponent from '../../../Components/FavoritesComponent/FavoritesComponent';
const HomeScreen = () => {
	return (
		<ScrollView>
			<DashboardHeader />
			<FavoritesComponent />
		</ScrollView>
	);
};

export default HomeScreen;
