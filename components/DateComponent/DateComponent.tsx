import { View, Text } from 'react-native';
import React from 'react';
import StyleProvider from '../../helpers/combineStyles';
import moment from 'moment';
import {
	FONT_SIZE_3,
	FONT_SIZE_1,
	FONT_FAMILY_900,
	FONT_FAMILY_400,
	DIMENSIONS_4,
	COLOR_WHITE,
} from '../../constants';

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const DateComponent = () => {
	return (
		<View testID="current-date">
			<Text style={useStyles.dateText}>{moment().format('Do')}</Text>
			<Text style={useStyles.monthText}>{moment().format('MMM YYYY')}</Text>
		</View>
	);
};

const useStyles = {
	monthText: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_3,
			color: COLOR_WHITE,
			fontFamily: FONT_FAMILY_400,
			marginBottom: DIMENSIONS_4,
		},
		[]
	),
	dateText: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_1,
			color: COLOR_WHITE,
			fontFamily: FONT_FAMILY_900,
			marginBottom: DIMENSIONS_4,
		},
		[]
	),
};
export default DateComponent;
