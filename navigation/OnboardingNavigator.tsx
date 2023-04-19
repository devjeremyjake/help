import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';

import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import SignInScreen from '../screens/Onboarding/SignInScreen';
import SignUpScreen from '../screens/Onboarding/SignUpScreen';

const Stack = createStackNavigator();

const OnboardingNavigator = () => {
	<Stack.Navigator>
		<Stack.Screen
			name={Routes.WELCOME_SCREEN}
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name={Routes.SIGNIN_SCREEN} component={SignInScreen} />
		<Stack.Screen name={Routes.SIGNUP_SCREEN} component={SignUpScreen} />
	</Stack.Navigator>;
};

export default OnboardingNavigator;
