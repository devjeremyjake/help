import { Text, TouchableWithoutFeedback, View } from 'react-native';

import SafeAreaScreen from '../../../Components/SafeAreaComponent';
import HeaderComponent from '../../../Components/HeaderComponent';
import ScrollViewComponent from '../../../Components/ScrollViewComponent';
import StyleProvider from '../../../helpers/combineStyles';
import React, { useState } from 'react';
import {
	DIMENSIONS_2,
	COLOR_LIGHT_GREY,
	DIMENSIONS_3,
	FONT_SIZE_3,
	FONT_FAMILY_900,
	COLOR_RICH_BLACK,
	COLOR_WHITE,
} from '../../../constants';
import DetailsPeopleTab from '../../../Components/DetailsPeopleTab/DetailsPeopleTab';
import DetailsInformationTab from '../../../Components/DetailsInformationTab/DetailsInformationTab';

type routeParam = {
	route: {
		params: {
			item: {
				title: string;
				desc: string;
				image: string;
			};
		};
	};
};

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const CardDetails = ({ route }: routeParam) => {
	const { title, desc, image } = route.params?.item;
	const [currentTab, setCurrentTab] = useState(1);

	const updateTab = (value: number) => {
		setCurrentTab(value);
	};
	const currentTabStyleOne =
		currentTab === 1
			? [
					useStyles.sectionSingle,
					useStyles.sectionRightMargin,
					useStyles.sectionSingleActive,
			  ]
			: [useStyles.sectionSingle, useStyles.sectionRightMargin];
	const currentTabText =
		currentTab === 1 ? [useStyles.sectionTextActive] : [useStyles.sectionText];
	const currentTabStyleTwo =
		currentTab === 2
			? [useStyles.sectionSingle, useStyles.sectionSingleActive]
			: [useStyles.sectionSingle];
	const currentTabTextTwo =
		currentTab === 2 ? [useStyles.sectionTextActive] : [useStyles.sectionText];

	const CurrentTabIndex = () =>
		currentTab === 1 ? (
			<DetailsInformationTab desc={desc} image={image} />
		) : (
			<DetailsPeopleTab />
		);
	return (
		<SafeAreaScreen>
			<HeaderComponent title={title} />
			<ScrollViewComponent>
				<View style={useStyles.container}>
					<View style={useStyles.sectionNavigator}>
						<TouchableWithoutFeedback onPress={() => updateTab(1)}>
							<View style={currentTabStyleOne}>
								<Text style={currentTabText}>Campaign</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={() => updateTab(2)}>
							<View style={currentTabStyleTwo}>
								<Text style={currentTabTextTwo}>Supporters</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<CurrentTabIndex />
				</View>
			</ScrollViewComponent>
		</SafeAreaScreen>
	);
};

const useStyles = {
	container: StyleProvider(
		deviceWidth.SM,
		{
			paddingHorizontal: DIMENSIONS_2,
		},
		[]
	),
	sectionNavigator: StyleProvider(
		deviceWidth.SM,
		{
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			alignItems: ' center',
			backgroundColor: COLOR_LIGHT_GREY,
			borderRadius: DIMENSIONS_2,
			marginBottom: DIMENSIONS_3,
			padding: DIMENSIONS_3,
		},
		[]
	),
	sectionSingle: StyleProvider(
		deviceWidth.SM,
		{
			width: '46%',
			padding: DIMENSIONS_3,
			borderRadius: DIMENSIONS_3,
		},
		[]
	),
	sectionSingleActive: StyleProvider(
		deviceWidth.SM,
		{
			backgroundColor: COLOR_RICH_BLACK,
		},
		[]
	),
	sectionRightMargin: StyleProvider(
		deviceWidth.SM,
		{
			marginRight: 8,
		},
		[]
	),
	sectionText: StyleProvider(
		deviceWidth.SM,
		{
			color: COLOR_RICH_BLACK,
			fontSize: FONT_SIZE_3,
			fontFamily: FONT_FAMILY_900,
		},
		[]
	),
	sectionTextActive: StyleProvider(
		deviceWidth.SM,
		{
			color: COLOR_WHITE,
			fontSize: FONT_SIZE_3,
			fontFamily: FONT_FAMILY_900,
		},
		[]
	),
};

export default CardDetails;
