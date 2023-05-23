import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Image } from 'react-native-expo-image-cache';
import StyleProvder from '../../helpers/combineStyles';
import { COLOR_LIGHT_GREY } from '../../constants';

const { width: DEVICE_WIDTH } = Dimensions.get('window');
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
	start_date: string;
	end_date: string;
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

const CardComponent = ({ onPress, ...item }: CardComponentProps) => {
	return (
		<View style={useStyles.container}>
			<Image
				style={useStyles.image}
				tint="light"
				preview={{ uri: item?.image }}
				uri={item?.image}
			/>
			<Text>{item?.title}</Text>
			<Text>{item?.desc}</Text>
			<View>
				<Text>{item?.author?.name}</Text>
			</View>
		</View>
	);
};

const useStyles = {
	container: StyleProvder(
		deviceWidth.SM,
		{
			width: 270,
			borderRadius: 10,
			backgroundColor: COLOR_LIGHT_GREY,
		},
		[]
	),
	image: StyleProvder(
		deviceWidth.SM,
		{
			width: '100%',
			aspectRatio: 5 / 3,
			borderTopLeftRadius: 10,
			borderTopRightRadius: 10,
		},
		[]
	),
};

export default CardComponent;
