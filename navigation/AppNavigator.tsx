import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from '../screens/AppScreens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
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
			component={HomeScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<AntDesign name="hearto" color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name="Account"
			component={HomeScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<AntDesign name="user" color={color} size={size} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
