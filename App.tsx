import { View } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingNavigator from './navigation/OnboardingNavigator';
import NavigationTheme from './navigation/NavigationTheme';
import AppNavigator from './navigation/AppNavigator';
import {
	useFonts,
	Lato_100Thin,
	Lato_300Light,
	Lato_400Regular,
	Lato_900Black,
} from '@expo-google-fonts/lato';
SplashScreen.preventAutoHideAsync();

export default function App() {
	let [fontsLoaded] = useFonts({
		Lato_100Thin,
		Lato_300Light,
		Lato_400Regular,
		Lato_900Black,
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);
	return (
		<View onLayout={onLayoutRootView} style={{ flex: 1 }}>
			<NavigationContainer theme={NavigationTheme}>
				{/* <OnboardingNavigator /> */}
				<AppNavigator />
			</NavigationContainer>
		</View>
	);
}
