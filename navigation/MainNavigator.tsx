import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';

import AppNavigator from './AppNavigator';
import CardDetails from '../screens/AppScreens/CardDetailsPage/CardDetails';

type RootStackParamList = {
	MAIN_APP: undefined;
	CARD_DETAILS: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name={Routes.MAIN_APP} component={AppNavigator} />
		<Stack.Screen name={Routes.CARD_DETAILS} component={CardDetails} />
	</Stack.Navigator>
);

export default MainNavigator;
