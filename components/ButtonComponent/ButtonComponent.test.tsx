import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

type buttonComponentProp = {
	title: string;
	onPress: () => void;
};

describe('<ButtonComponent />', () => {
	const setupButtonComponent = (props: buttonComponentProp) =>
		render(<ButtonComponent {...(props as any)} />);
	it('should render button component with title and onPress function', () => {
		const buttonProp = {
			title: 'Start helping',
			onPress: jest.fn(),
		};
		const { getByText } = setupButtonComponent(buttonProp);
		const buttonText = getByText(buttonProp.title);
		fireEvent.press(buttonText);
		expect(buttonText).toBeOnTheScreen();
		expect(buttonProp.onPress).toHaveBeenCalled();
	});
	it('does not render button component with empty title', () => {
		const buttonProp = {
			title: undefined as never,
			onPress: jest.fn(),
		};
		const { queryByText } = render(
			<ButtonComponent title={buttonProp.title} onPress={buttonProp.onPress} />
		);
		const buttonText = queryByText('Start helping');
		expect(buttonText).not.toBeOnTheScreen();
	});
});
