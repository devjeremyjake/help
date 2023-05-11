import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { CreateResponsiveStyle } from 'rn-responsive-styles';
import {
	COLOR_PRUSSIAN_BLUE,
	COLOR_WHITE,
	COLOR_LAPIZ,
	COLOR_GREY,
	FONT_SIZE_3,
	FONT_SIZE_1,
	FONT_FAMILY_400,
	FONT_FAMILY_900,
} from '../../constants';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const AccountBalance = () => {
	const styles = useStyle();
	return (
		<View style={styles.container}>
			{/* Left side */}
			<View style={styles.walletIconContainer}>
				<View style={styles.walletIconWrapper}>
					<FontAwesome5 name="coins" size={27} color={COLOR_WHITE} />
				</View>
				<View>
					<Text style={styles.walletInfoUpperText}>Your donation pocket</Text>
					<Text style={styles.walletAmountInfo}>$340,898</Text>
				</View>
			</View>
			<TouchableWithoutFeedback onPress={() => null}>
				<View style={styles.topUpWrapper}>
					<Text style={styles.topUpText}>Top Up</Text>
					<View style={styles.topUpIconWrapper}>
						<AntDesign name="arrowright" size={24} color={COLOR_WHITE} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const useStyle = CreateResponsiveStyle({
	container: {
		borderWidth: 1,
		borderColor: COLOR_GREY,
		borderRadius: 20,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	walletIconContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: COLOR_PRUSSIAN_BLUE,
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 20,
	},
	walletIconWrapper: {
		backgroundColor: COLOR_LAPIZ,
		width: 44,
		height: 44,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 22,
		marginRight: 10,
	},
	walletInfoUpperText: {
		color: COLOR_WHITE,
		fontSize: FONT_SIZE_3,
		marginBottom: 5,
	},
	walletAmountInfo: {
		color: COLOR_WHITE,
		fontSize: FONT_SIZE_1,
		fontFamily: FONT_FAMILY_900,
	},
	topUpWrapper: {
		marginLeft: 15,
		fontFamily: FONT_FAMILY_400,
	},
	topUpIconWrapper: {
		backgroundColor: COLOR_PRUSSIAN_BLUE,
		width: 30,
		height: 30,
		borderRadius: 15,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	topUpText: {
		fontSize: FONT_SIZE_3,
		color: COLOR_PRUSSIAN_BLUE,
		fontFamily: FONT_FAMILY_900,
		marginBottom: 5,
	},
});

export default AccountBalance;
