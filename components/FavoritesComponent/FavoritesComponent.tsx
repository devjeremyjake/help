import { View, Text, TouchableWithoutFeedback } from 'react-native';
import StyleProvider from '../../helpers/combineStyles';
import { AntDesign } from '@expo/vector-icons';
import {
	DIMENSIONS_2,
	COLOR_RICH_BLACK,
	FONT_SIZE_2,
	FONT_FAMILY_900,
} from '../../constants';

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const FavoritesComponent = () => {
	return (
		<View style={useStyles.container}>
			<View style={useStyles.headingContainer}>
				<Text style={useStyles.headingText}>Favorites</Text>
				<TouchableWithoutFeedback onPress={() => null}>
					<View>
						<AntDesign name="arrowright" size={26} color={COLOR_RICH_BLACK} />
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};

const useStyles = {
	container: StyleProvider(
		deviceWidth.SM,
		{
			marginHorizontal: DIMENSIONS_2,
		},
		[]
	),
	headingContainer: StyleProvider(
		deviceWidth.SM,
		{
			marginBottom: 10,
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		[]
	),
	headingText: StyleProvider(
		deviceWidth.SM,
		{
			color: COLOR_RICH_BLACK,
			fontSize: FONT_SIZE_2,
			marginBottom: 5,
			fontFamily: FONT_FAMILY_900,
		},
		[]
	),
};

export default FavoritesComponent;
