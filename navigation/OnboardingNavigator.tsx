import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';

import WelcomeScreen from '../screens/Onboarding/WelcomeScreen/WelcomeScreen';
import SignInScreen from '../screens/Onboarding/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/Onboarding/SignUpScreen/SignUpScreen';

type RootStackParamList = {
	WELCOME_SCREEN: undefined;
	SIGNIN_SCREEN: undefined;
	SIGNUP_SCREEN: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const OnboardingNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name={Routes.WELCOME_SCREEN}
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name={Routes.SIGNIN_SCREEN}
			component={SignInScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name={Routes.SIGNUP_SCREEN}
			component={SignUpScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default OnboardingNavigator;
