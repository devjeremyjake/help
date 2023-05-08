import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateResponsiveStyle, DEVICE_SIZES } from 'rn-responsive-styles';
import { FONT_FAMILY_400, FONT_SIZE_2 } from '../constants';
type headerProps = {
	title: string;
};

const HeaderComponent = ({ title }: headerProps) => {
	const styles = useStyles();
	const navigation = useNavigation();
	return (
		<View style={styles.navWrapper}>
			<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
				<Ionicons
					name="chevron-back"
					size={34}
					color="black"
					style={styles.backButton}
				/>
			</TouchableWithoutFeedback>
			<Text style={styles.navTitle}>{title}</Text>
			<View />
		</View>
	);
};

const useStyles = CreateResponsiveStyle({
	navWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	navTitle: {
		fontFamily: FONT_FAMILY_400,
		fontSize: FONT_SIZE_2,
		marginLeft: -10,
	},
	backButton: {
		marginLeft: 10,
	},
});

export default HeaderComponent;
