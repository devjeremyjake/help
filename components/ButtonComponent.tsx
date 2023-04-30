import {
	View,
	Text,
	TouchableOpacity,
	GestureResponderEvent,
} from 'react-native';
import React from 'react';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import {
	DIMENSIONS_1,
	COLOR_WHITE,
	COLOR_LAPIZ,
	DIMENSIONS_3,
	FONT_SIZE_2,
	FONT_FAMILY_700,
	DIMENSIONS_2,
} from '../constants';

type buttonComponentProps = {
	title: string;
	onPress: (e: GestureResponderEvent) => void;
};

const ButtonComponent = ({ onPress, title }: buttonComponentProps) => {
	const styles = useStyles();
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.text}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const useStyles = CreateResponsiveStyle({
	container: {
		backgroundColor: COLOR_LAPIZ,
		marginVertical: DIMENSIONS_3,
		paddingVertical: DIMENSIONS_2,
		borderRadius: DIMENSIONS_1,
	},
	text: {
		fontSize: FONT_SIZE_2,
		color: COLOR_WHITE,
		fontFamily: FONT_FAMILY_700,
		textAlign: 'center',
	},
});

export default ButtonComponent;
