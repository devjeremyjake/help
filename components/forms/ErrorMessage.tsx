import React from 'react';
import { Text } from 'react-native';
import { CreateResponsiveStyle } from 'rn-responsive-styles';
import { FONT_FAMILY_400, DIMENSIONS_3 } from '../../constants';

type errorMessageProps = {
	error: any;
	visible: any;
};

function ErrorMessage({ error, visible }: errorMessageProps) {
	const styles = useStyles();
	if (!visible || !error) return null;

	return <Text style={styles.container}>{error}</Text>;
}

const useStyles = CreateResponsiveStyle({
	container: {
		color: 'red',
		fontFamily: FONT_FAMILY_400,
		marginLeft: DIMENSIONS_3,
		marginBottom: DIMENSIONS_3,
	},
});

export default ErrorMessage;
