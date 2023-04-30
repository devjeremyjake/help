import { Text, View, GestureResponderEvent } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import ButtonComponent from '../../components/ButtonComponent';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import Routes from '../../navigation/routes';
import {
	COLOR_RICH_BLACK,
	FONT_SIZE_1,
	FONT_SIZE_2,
	FONT_FAMILY_700,
	FONT_FAMILY_900,
	DIMENSIONS_2,
	COLOR_GREY,
} from '../../constants';

const WelcomeScreen = () => {
	const styles = useStyles();
	const navigation = useNavigation();

	return (
		<SafeAreaScreen>
			<Image
				style={styles.image}
				source={require('../../assets/boy-background.jpg')}
				placeholder={'blurhash'}
				contentFit="cover"
				transition={1000}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.textMain}>You Have Two Hands To Empower</Text>
				<Text style={styles.textsub}>
					One to help yourself and the other to help others. Provide help today
					to improve lives
				</Text>
			</View>
			<View style={styles.actionButton}>
				<ButtonComponent
					title="Start to help"
					onPress={() => navigation.navigate(Routes.SIGNIN_SCREEN)}
				/>
			</View>
		</SafeAreaScreen>
	);
};

const useStyles = CreateResponsiveStyle(
	{
		image: {
			height: '55%',
			width: '90%',
			borderRadius: 40,
			marginHorizontal: 20,
			marginTop: 20,
		},
		textContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 'auto',
		},
		textMain: {
			fontSize: FONT_SIZE_1,
			color: COLOR_RICH_BLACK,
			fontFamily: FONT_FAMILY_900,
			marginBottom: DIMENSIONS_2,
			marginTop: DIMENSIONS_2,
			textAlign: 'center',
		},
		textsub: {
			fontSize: FONT_SIZE_2,
			color: COLOR_GREY,
			fontFamily: FONT_FAMILY_700,
			width: '86%',
			lineHeight: 25,
			textAlign: 'center',
		},
		actionButton: {
			marginHorizontal: 20,
			marginTop: 20,
		},
	},
	{
		[DEVICE_SIZES.SMALL_DEVICE]: {
			image: {
				height: '65%',
				width: '94%',
			},
		},
	}
);

export default WelcomeScreen;
