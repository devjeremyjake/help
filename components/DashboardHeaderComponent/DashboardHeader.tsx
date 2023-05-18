import { View, Text } from 'react-native';
import React from 'react';
import { CreateResponsiveStyle } from 'rn-responsive-styles';
import {
	FONT_SIZE_4,
	COLOR_RICH_BLACK,
	FONT_FAMILY_900,
	COLOR_GREY,
} from '../../constants';
import { FontAwesome } from '@expo/vector-icons';

const DashboardHeader = () => {
	const styles = useStyle();
	return (
		<View style={styles.container}>
			<Text style={styles.nameText}>Morning, Jake</Text>
			<View style={styles.rightIconsWrapper}>
				<View style={styles.searchIconWrapper}>
					<FontAwesome name="search" size={24} color={COLOR_RICH_BLACK} />
				</View>
				<View style={styles.notificationIconWrapper}>
					<FontAwesome name="bell-o" size={24} color={COLOR_RICH_BLACK} />
				</View>
			</View>
		</View>
	);
};

const useStyle = CreateResponsiveStyle({
	container: {
		marginBottom: 10,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	nameText: {
		fontSize: FONT_SIZE_4,
		color: COLOR_RICH_BLACK,
		fontFamily: FONT_FAMILY_900,
	},
	rightIconsWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	notificationIconWrapper: {
		marginLeft: 10,
		borderWidth: 1,
		borderColor: COLOR_GREY,
		width: 35,
		height: 35,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
	},
	searchIconWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default DashboardHeader;
