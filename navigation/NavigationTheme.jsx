import { DefaultTheme } from '@react-navigation/native';
import { COLOR_PRUSSIAN_BLUE, COLOR_WHITE } from '../constants';

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: COLOR_PRUSSIAN_BLUE,
		background: COLOR_WHITE,
	},
};
