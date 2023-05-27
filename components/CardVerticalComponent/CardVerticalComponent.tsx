import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Image } from 'react-native-expo-image-cache';
import StyleProvider from '../../helpers/combineStyles';
import {
	COLOR_LIGHT_GREY,
	DIMENSIONS_3,
	FONT_SIZE_3,
	COLOR_RICH_BLACK,
	DIMENSIONS_4,
	FONT_SIZE_4,
	FONT_FAMILY_700,
	DIMENSIONS_2,
	FONT_FAMILY_900,
} from '../../constants';

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
	onPress: () => void;
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

const CardVerticalComponent = ({ onPress, ...item }: CardComponentProps) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={useStyles.container}>
				<Image
					style={useStyles.image}
					tint="light"
					preview={{ uri: item?.image }}
					uri={item?.image}
				/>
				<View style={useStyles.contentContainer}>
					<Text numberOfLines={1} style={useStyles.contentHeading}>
						{item?.title}
					</Text>
					<Text numberOfLines={2} style={useStyles.contentSubheading}>
						{item?.desc}
					</Text>
					<View style={useStyles.authorContainer}>
						<Image
							style={useStyles.authorImage}
							tint="light"
							preview={{ uri: item?.author?.image }}
							uri={item?.author?.image}
						/>
						<Text style={useStyles.authorName}>{item?.author?.name}</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const useStyles = {
	container: StyleProvider(
		deviceWidth.SM,
		{
			width: '100%',
			borderRadius: 10,
			backgroundColor: COLOR_LIGHT_GREY,
		},
		[]
	),
	image: StyleProvider(
		deviceWidth.SM,
		{
			width: '100%',
			aspectRatio: 5 / 3,
			borderTopLeftRadius: 10,
			borderTopRightRadius: 10,
		},
		[]
	),
	contentContainer: StyleProvider(
		deviceWidth.SM,
		{
			paddingHorizontal: DIMENSIONS_3,
			paddingVertical: DIMENSIONS_3,
		},
		[]
	),
	contentHeading: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_4,
			color: COLOR_RICH_BLACK,
			marginBottom: DIMENSIONS_4,
			fontFamily: FONT_FAMILY_900,
		},
		[]
	),
	contentSubheading: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_3,
			color: COLOR_RICH_BLACK,
			marginBottom: DIMENSIONS_3,
			fontFamily: FONT_FAMILY_700,
			lineHeight: DIMENSIONS_2,
		},
		[]
	),
	authorContainer: StyleProvider(
		deviceWidth.SM,
		{
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
		},
		[]
	),
	authorImage: StyleProvider(
		deviceWidth.SM,
		{
			width: 26,
			height: 26,
			borderRadius: 13,
		},
		[]
	),
	authorName: StyleProvider(
		deviceWidth.SM,
		{
			marginLeft: DIMENSIONS_4,
			fontSize: FONT_SIZE_3,
			color: COLOR_RICH_BLACK,
			fontFamily: FONT_FAMILY_700,
		},
		[]
	),
};

export default CardVerticalComponent;
