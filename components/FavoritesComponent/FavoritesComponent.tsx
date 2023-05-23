import {
	View,
	Text,
	TouchableWithoutFeedback,
	FlatList,
	Dimensions,
} from 'react-native';
import StyleProvider from '../../helpers/combineStyles';
import { AntDesign } from '@expo/vector-icons';
import CardComponent from '../CardComponent/CardComponent';
import {
	DIMENSIONS_2,
	COLOR_RICH_BLACK,
	FONT_SIZE_2,
	FONT_FAMILY_900,
} from '../../constants';
import { FAVORITES } from './Data';

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

interface CardComponentProps {
	id: number;
	title: string;
	desc: string;
	price: number;
	amountRaised: number;
	category: string;
	image: string;
	start_date: Date;
	end_date: Date;
	author: authorType;
	contributors: contributorsType[];
	onPress: (event: Event) => void;
}

type authorType = {
	id: number;
	name: string;
	image: string;
};

type contributorsType = {
	id: number;
	name: string;
	nationality: string;
	image: string;
	amountAdded: number;
};

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
						<CardComponent onPress={() => null} {...item} />
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
