import { View } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingNavigator from './navigation/OnboardingNavigator';
import NavigationTheme from './navigation/NavigationTheme';
import MainNavigator from './navigation/MainNavigator';
import {
	useFonts,
	Lato_100Thin,
	Lato_300Light,
	Lato_400Regular,
	Lato_900Black,
} from '@expo-google-fonts/lato';
import * as Font from 'expo-font';
SplashScreen.preventAutoHideAsync();

export default function App() {
	async function loadFonts() {
		await Font.loadAsync({
			'Lato-Regular': require('./assets/Lato/Lato-Regular.ttf'),
			'Lato-Bold': require('./assets/Lato/Lato-Bold.ttf'),
			'Lato-Thin': require('./assets/Lato/Lato-Light.ttf'),
		});
	}

	const onLayoutRootView = useCallback(async () => {
		loadFonts();
		await SplashScreen.hideAsync();
	}, []);
	return (
		<View onLayout={onLayoutRootView} style={{ flex: 1 }}>
			<NavigationContainer theme={NavigationTheme}>
				{/* <OnboardingNavigator /> */}
				<MainNavigator />
			</NavigationContainer>
		</View>
	);
}
