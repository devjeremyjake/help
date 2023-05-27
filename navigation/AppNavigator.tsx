import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from '../screens/AppScreens/HomeScreen/HomeScreen';
import MyAccountScreen from '../screens/AppScreens/MyAccountScreen/MyAccountScreen';
import MyDonationsScreen from '../screens/AppScreens/MyDonationsScreen/MyDonationsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator screenOptions={{ headerShown: false }}>
		<Tab.Screen
			name="Home"
			component={HomeScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<AntDesign name="home" color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name="MyDonations"
			component={MyDonationsScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<AntDesign name="hearto" color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name="Account"
			component={MyAccountScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<AntDesign name="user" color={color} size={size} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
