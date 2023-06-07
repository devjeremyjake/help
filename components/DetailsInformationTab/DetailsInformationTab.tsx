import { Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native-expo-image-cache';
import { Foundation } from '@expo/vector-icons';
import StyleProvider from '../../helpers/combineStyles';
import {
	DIMENSIONS_1,
	FONT_SIZE_2,
	FONT_FAMILY_700,
	DIMENSIONS_4,
	DIMENSIONS_2,
	COLOR_PRUSSIAN_BLUE,
	DIMENSIONS_3,
	COLOR_LIGHT_GREY,
	FONT_SIZE_3,
	COLOR_GREY,
	COLOR_RICH_BLACK,
	FONT_FAMILY_900,
} from '../../constants';
import ScrollViewComponent from '../ScrollViewComponent';

type detailsInformationProp = {
	image: string;
	desc: string;
	author: authorType;
};

type authorType = {
	id: number;
	name: string;
	image: string;
};

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const DetailsInformationTab = ({
	image,
	desc,
	author,
}: detailsInformationProp) => {
	return (
		<ScrollViewComponent>
			<Image
				style={useStyles.image}
				tint="light"
				preview={{ uri: image }}
				uri={image}
			/>
			<View style={useStyles.totalTarget}>
				<View style={useStyles.singleSection}>
					<View style={useStyles.sectionIcon}>
						<Foundation name="target-two" size={30} color={COLOR_LIGHT_GREY} />
					</View>
					<View>
						<Text style={useStyles.sectionHeading}>Target Amount</Text>
						<Text style={useStyles.sectionAmount}>$3400</Text>
					</View>
				</View>

				<View style={useStyles.singleSection}>
					<View style={useStyles.sectionIcon}>
						<Foundation name="target-two" size={30} color={COLOR_LIGHT_GREY} />
					</View>
					<View>
						<Text style={useStyles.sectionHeading}>Raised</Text>
						<Text style={useStyles.sectionAmount}>$3400</Text>
					</View>
				</View>
			</View>
			<View style={useStyles.authorContainer}>
				<Image
					style={useStyles.imageAuthor}
					tint="light"
					preview={{ uri: author?.image }}
					uri={author?.image}
				/>
				<Text style={useStyles.authorText}>
					by <Text style={useStyles.authorName}>Teach for Africa</Text>
				</Text>
			</View>
			<View>
				<Text style={useStyles.descHeading}>Our Goal</Text>
				<Text style={useStyles.description}>{desc}</Text>
			</View>
		</ScrollViewComponent>
	);
};

const useStyles = {
	image: StyleProvider(
		deviceWidth.SM,
		{
			width: '100%',
			height: 250,
			marginBottom: DIMENSIONS_2,
			borderRadius: DIMENSIONS_4,
		},
		[]
	),
	description: StyleProvider(
		deviceWidth.SM,
		{
			lineHeight: DIMENSIONS_1,
			fontSize: FONT_SIZE_2,
			fontFamily: FONT_FAMILY_700,
		},
		[]
	),
	descHeading: StyleProvider(
		deviceWidth.SM,
		{
			fontFamily: FONT_FAMILY_700,
			marginBottom: DIMENSIONS_4,
			color: COLOR_PRUSSIAN_BLUE,
		},
		[]
	),
	totalTarget: StyleProvider(
		deviceWidth.SM,
		{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: DIMENSIONS_3,
		},
		[]
	),
	singleSection: StyleProvider(
		deviceWidth.SM,
		{
			width: '50%',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
		[]
	),
	sectionIcon: StyleProvider(
		deviceWidth.SM,
		{
			backgroundColor: COLOR_PRUSSIAN_BLUE,
			marginRight: DIMENSIONS_4,
			width: DIMENSIONS_2 + 20,
			height: DIMENSIONS_2 + 20,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: DIMENSIONS_3,
		},
		[]
	),
	sectionHeading: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_3,
			fontFamily: FONT_FAMILY_700,
			marginBottom: DIMENSIONS_4,
			color: COLOR_GREY,
		},
		[]
	),
	sectionAmount: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_2,
			fontFamily: FONT_FAMILY_900,
			marginBottom: DIMENSIONS_4,
			color: COLOR_RICH_BLACK,
		},
		[]
	),
	authorContainer: StyleProvider(
		deviceWidth.SM,
		{
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			marginBottom: DIMENSIONS_3,
		},
		[]
	),
	imageAuthor: StyleProvider(
		deviceWidth.SM,
		{
			width: 30,
			height: 30,
			marginRight: DIMENSIONS_4,
			borderRadius: DIMENSIONS_3 + 5,
		},
		[]
	),
	authorText: StyleProvider(
		deviceWidth.SM,
		{
			fontSize: FONT_SIZE_3,
			fontFamily: FONT_FAMILY_700,
			marginBottom: DIMENSIONS_4,
			color: COLOR_GREY,
		},
		[]
	),
	authorName: StyleProvider(
		deviceWidth.SM,
		{
			fontFamily: FONT_FAMILY_900,
			marginBottom: DIMENSIONS_4,
			color: COLOR_PRUSSIAN_BLUE,
		},
		[]
	),
};

export default DetailsInformationTab;
