import {
	View,
	Text,
	TouchableWithoutFeedback,
	FlatList,
	Dimensions,
} from 'react-native';
import StyleProvider from '../../helpers/combineStyles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardHorizontalComponent from '../CardHorizontalComponent/CardHorizontalComponent';
import {
	DIMENSIONS_2,
	COLOR_RICH_BLACK,
	FONT_SIZE_2,
	FONT_FAMILY_900,
} from '../../constants';
import { FAVORITES } from './Data';
import Routes from '../../navigation/routes';

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const FavoritesComponent = () => {
	const navigation = useNavigation() as any;
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
			<View>
				<FlatList
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					horizontal
					snapToAlignment="start"
					decelerationRate={'fast'}
					snapToInterval={
						Dimensions.get('window').width * 0.8 +
						Dimensions.get('window').width * 0.07
					}
					scrollEnabled={true}
					data={FAVORITES}
					renderItem={({ item }) => (
						<CardHorizontalComponent
							onPress={() => navigation.navigate(Routes.CARD_DETAILS, { item })}
							{...item}
						/>
					)}
					ItemSeparatorComponent={() => <View style={{ marginRight: 10 }} />}
				/>
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
