import { View, Text } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import SafeAreaScreen from '../../components/SafeAreaScreen';
import HeaderComponent from '../../components/HeaderComponent';

type RootStackParamList = {
	SIGNIN_SCREEN: undefined;
};

type headerComponentNavigationProp = StackNavigationProp<
	RootStackParamList,
	'SIGNIN_SCREEN'
>;

type signInProps = {
	navigation: headerComponentNavigationProp;
};

const SignInScreen = ({ navigation }: signInProps) => {
	return (
		<SafeAreaScreen>
			<HeaderComponent title="Log In" />
			<Text>SignInScreen</Text>
		</SafeAreaScreen>
	);
};

export default SignInScreen;
