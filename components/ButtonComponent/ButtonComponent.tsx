import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import StyleProvider from '../../helpers/combineStyles';
import {
	DIMENSIONS_1,
	COLOR_WHITE,
	COLOR_PRUSSIAN_BLUE,
	DIMENSIONS_3,
	FONT_SIZE_2,
	FONT_FAMILY_700,
	DIMENSIONS_2,
} from '../../constants';

type buttonComponentProps = {
	title: string;
	onPress: () => void;
};

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const ButtonComponent = ({ onPress, title }: buttonComponentProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={useStyles.container}>
				<Text style={useStyles.text}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const useStyles = {
	container: StyleProvider(
		deviceWidth.SM,
		{
			backgroundColor: COLOR_PRUSSIAN_BLUE,
			marginVertical: DIMENSIONS_3,
			paddingVertical: DIMENSIONS_2,
			borderRadius: DIMENSIONS_1,
		},
		[]
	),
	text: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_2,
			color: COLOR_WHITE,
			fontFamily: FONT_FAMILY_700,
			textAlign: 'center',
		},
		[]
	),
};

export default ButtonComponent;
