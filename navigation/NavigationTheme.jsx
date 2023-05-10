import { DefaultTheme } from '@react-navigation/native';
import { COLOR_STEEL_BLUE, COLOR_WHITE } from '../constants';

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: COLOR_STEEL_BLUE,
		background: COLOR_WHITE,
	},
};
