import React from 'react';
import { Text } from 'react-native';
import StyleProvider from '../../../helpers/combineStyles';
import { FONT_FAMILY_400, DIMENSIONS_3 } from '../../../constants';

interface ErrorMessageProps {
	error: any;
	visible: any;
}

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

function ErrorMessage({ error, visible }: ErrorMessageProps) {
	if (!visible || !error) return null;
	return <Text style={useStyles.container}>{error}</Text>;
}

const useStyles = {
	container: StyleProvider(
		deviceWidth.SM,
		{
			color: 'red',
			fontFamily: FONT_FAMILY_400,
			marginLeft: DIMENSIONS_3,
			marginBottom: DIMENSIONS_3,
		},
		[]
	),
};

export default ErrorMessage;
