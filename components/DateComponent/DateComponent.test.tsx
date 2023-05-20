import React from 'react';
import { render } from '@testing-library/react-native';
import DateComponent from './DateComponent';

// jest.mock('expo-location');

// jest.mock('@expo/vector-icons', () => {
// 	const React = require('react');
// 	const { View } = require('react-native');

// 	const Icon = ({
// 		name,
// 		size,
// 		color,
// 	}: {
// 		name: string;
// 		size: number;
// 		color: string;
// 	}) => (
// 		<View>
// 			Mocked Icon: {name} {size} {color}
// 		</View>
// 	);

// 	return {
// 		Ionicons: Icon,
// 		AntDesign: Icon,
// 		// Include other icons you want to mock...
// 	};
// });

describe('<DateComponent />', () => {
	const setUpDateDisplay = () => render(<DateComponent />);
	it('should render correctly on the screen', () => {
		const { getByTestId } = setUpDateDisplay();
		const renderedItem = getByTestId('current-date');
		expect(renderedItem).toBeOnTheScreen();
	});
});

describe('mock and get correct value for Date and Month entity', () => {
	beforeEach(() => {
		jest.useFakeTimers();
		jest.setSystemTime(946684800000); // saturday 01 January 2000 00:00 utc
	});
	afterEach(() => {
		jest.useRealTimers();
	});

	const setUpDateDisplay = () => render(<DateComponent />);
	it('should show current date and month', () => {
		const { getByText } = setUpDateDisplay();
		const presentDate = getByText(/1st/i);
		const presentMonth = getByText(/Jan/i);
		expect(presentDate).toBeOnTheScreen();
		expect(presentMonth).toBeOnTheScreen();
	});
	it('should show current year', () => {
		const { getByText } = setUpDateDisplay();
		const presentYear = getByText(/2000/i);
		expect(presentYear).toBeOnTheScreen();
	});
});
