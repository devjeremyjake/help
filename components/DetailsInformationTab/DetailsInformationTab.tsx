import { Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native-expo-image-cache';
import StyleProvider from '../../helpers/combineStyles';
import {
	DIMENSIONS_1,
	FONT_SIZE_2,
	FONT_FAMILY_700,
	DIMENSIONS_4,
	DIMENSIONS_2,
	COLOR_PRUSSIAN_BLUE,
} from '../../constants';

type detailsInformationProp = {
	image: string;
	desc: string;
};

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const DetailsInformationTab = ({ image, desc }: detailsInformationProp) => {
	return (
		<>
			<Image
				style={useStyles.image}
				tint="light"
				preview={{ uri: image }}
				uri={image}
			/>
			<View>
				<Text style={useStyles.descHeading}>Our Goal</Text>
				<Text style={useStyles.description}>{desc}</Text>
			</View>
		</>
	);
};

const useStyles = {
	image: StyleProvider(
		deviceWidth.SM,
		{
			width: '100%',
			height: 200,
			marginBottom: DIMENSIONS_2,
			borderRadius: DIMENSIONS_4,
		},
		[]
	),
	description: StyleProvider(
		deviceWidth.SM,
		{
			lineHeight: DIMENSIONS_1,
			fontSize: FONT_SIZE_2,
			fontFamily: FONT_FAMILY_700,
		},
		[]
	),
	descHeading: StyleProvider(
		deviceWidth.SM,
		{
			fontFamily: FONT_FAMILY_700,
			marginBottom: DIMENSIONS_4,
			color: COLOR_PRUSSIAN_BLUE,
		},
		[]
	),
};

export default DetailsInformationTab;
