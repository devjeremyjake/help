import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import StyleProvider from '../../helpers/combineStyles';
import {
	FONT_SIZE_3,
	FONT_SIZE_4,
	FONT_SIZE_5,
	FONT_FAMILY_400,
	FONT_FAMILY_900,
	COLOR_PRUSSIAN_BLUE,
	DIMENSIONS_2,
	DIMENSIONS_4,
	COLOR_WHITE,
	COLOR_RICH_BLACK,
	DIMENSIONS_3,
	COLOR_GREY,
	COLOR_LAPIZ,
} from '../../constants';
import useLocation from '../../hooks/useLocation/useLocation';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import DateComponent from '../DateComponent/DateComponent';
import SafeAreaScreen from '../SafeAreaComponent';

const { width: DEVICE_WIDTH } = Dimensions.get('window');

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const DashboardHeader = () => {
	const { address } = useLocation();
	return (
		<View style={useStyles.container}>
			<View style={useStyles.infoContainer}>
				<SafeAreaScreen>
					<DateComponent />
					<Text style={useStyles.nameText}>Morning, Jake</Text>
					<View style={useStyles.locationContainer}>
						<Ionicons name="location-outline" size={20} color={COLOR_WHITE} />
						<Text style={useStyles.locationText}>
							{address[0]?.city} {address[0]?.country}
						</Text>
					</View>
				</SafeAreaScreen>
			</View>
			<View style={useStyles.accountInfo}>
				<SafeAreaScreen>
					<View style={useStyles.rightIconsWrapper}>
						<View style={useStyles.searchIconWrapper}>
							<FontAwesome name="search" size={24} color={COLOR_RICH_BLACK} />
						</View>
						<View style={useStyles.notificationIconWrapper}>
							<FontAwesome name="bell-o" size={24} color={COLOR_RICH_BLACK} />
						</View>
					</View>
					<>
						<Text style={useStyles.walletInfoUpperText}>Your wallet</Text>
						<Text style={useStyles.walletAmountInfo}>$340,898</Text>
					</>
					<TouchableWithoutFeedback onPress={() => null}>
						<View style={useStyles.topUpWrapper}>
							<Text style={useStyles.topUpText}>Top Up</Text>
							<View style={useStyles.topUpIconWrapper}>
								<AntDesign name="arrowright" size={24} color={COLOR_WHITE} />
							</View>
						</View>
					</TouchableWithoutFeedback>
				</SafeAreaScreen>
			</View>
		</View>
	);
};

const useStyles = {
	container: StyleProvider(
		deviceWidth.SM,
		{
			marginBottom: 10,
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			width: DEVICE_WIDTH,
		},
		[]
	),
	infoContainer: StyleProvider(
		deviceWidth.SM,
		{
			backgroundColor: COLOR_PRUSSIAN_BLUE,
			width: DEVICE_WIDTH / 2,
			height: 250,
			borderBottomRightRadius: 30,
			borderTopRightRadius: 20,
			paddingLeft: DIMENSIONS_2,
			paddingBottom: DIMENSIONS_2,
		},
		[]
	),
	locationContainer: StyleProvider(
		deviceWidth.SM,
		{
			marginTop: 'auto',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
		[]
	),
	nameText: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_3,
			color: COLOR_WHITE,
			fontFamily: FONT_FAMILY_400,
		},
		[]
	),
	locationText: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_5,
			color: COLOR_WHITE,
			fontFamily: FONT_FAMILY_400,
			flexWrap: 'wrap',
			width: 130,
			marginLeft: DIMENSIONS_4,
		},
		[]
	),
	accountInfo: StyleProvider(
		deviceWidth.SM,
		{
			height: 250,
			width: DEVICE_WIDTH / 2,
			paddingRight: DIMENSIONS_2,
			paddingLeft: DIMENSIONS_3,
		},
		[]
	),
	rightIconsWrapper: StyleProvider(
		deviceWidth.SM,
		{
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			marginLeft: 'auto',
			marginBottom: DIMENSIONS_3,
		},
		[]
	),
	notificationIconWrapper: StyleProvider(
		deviceWidth.SM,
		{
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
		[]
	),
	searchIconWrapper: StyleProvider(
		deviceWidth.SM,
		{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		[]
	),
	walletInfoUpperText: StyleProvider(
		deviceWidth.SM,
		{
			color: COLOR_RICH_BLACK,
			fontSize: FONT_SIZE_3,
			marginBottom: 5,
		},
		[]
	),
	walletAmountInfo: StyleProvider(
		deviceWidth.SM,
		{
			color: COLOR_RICH_BLACK,
			fontSize: FONT_SIZE_4,
			fontFamily: FONT_FAMILY_900,
		},
		[]
	),
	topUpWrapper: StyleProvider(
		deviceWidth.SM,
		{
			marginTop: DIMENSIONS_2,
		},
		[]
	),
	topUpText: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_3,
			color: COLOR_PRUSSIAN_BLUE,
			fontFamily: FONT_FAMILY_900,
			marginBottom: 5,
		},
		[]
	),
	topUpIconWrapper: StyleProvider(
		deviceWidth.SM,
		{
			backgroundColor: COLOR_PRUSSIAN_BLUE,
			width: 30,
			height: 30,
			borderRadius: 15,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		[]
	),
};

export default DashboardHeader;
