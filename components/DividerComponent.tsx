import { View, Text } from 'react-native';
import React from 'react';
import { CreateResponsiveStyle } from 'rn-responsive-styles';
import { COLOR_GREY } from '../constants';

const DividerComponent = () => {
	const styles = useStyle();
	return <View style={styles.container} />;
};

const useStyle = CreateResponsiveStyle({
	container: {
		height: 2,
		backgroundColor: COLOR_GREY,
		marginHorizontal: 20,
		marginVertical: 20,
	},
});

export default DividerComponent;
