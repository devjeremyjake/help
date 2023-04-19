import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingNavigator from './navigation/OnboardingNavigator';

export default function App() {
	return (
		<NavigationContainer>
			<OnboardingNavigator />
		</NavigationContainer>
	);
}
