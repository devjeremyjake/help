import { View } from 'react-native';
import React from 'react';
import SafeAreaScreen from '../../../Components/SafeAreaComponent';
import AccountBalance from '../../../Components/AccountBalance/AccountBalance';
import DashboardHeader from '../../../Components/DashboardHeaderComponent/DashboardHeader';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

const HomeScreen = () => {
	const styles = useStyle();
	return (
		<SafeAreaScreen>
			<View style={styles.containerWrapper}>
				<DashboardHeader />
				<AccountBalance />
			</View>
		</SafeAreaScreen>
	);
};

const useStyle = CreateResponsiveStyle({
	containerWrapper: {
		marginHorizontal: 20,
		marginTop: 20,
	},
});

export default HomeScreen;
