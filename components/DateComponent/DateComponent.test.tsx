import React from 'react';
import { render } from '@testing-library/react-native';
import DateComponent from './DateComponent';

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
