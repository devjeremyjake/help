import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorMessage from './ErrorMessage';

type ErrorMessageProps = {
	visible: boolean;
	error: string;
};

describe('<ErrorMessage />', () => {
	const setUpErrorMessage = (props: ErrorMessageProps) =>
		render(<ErrorMessage {...props} />);

	it('should render error message when visible and error are true', () => {
		const valuesProps = {
			error: 'Email is a required field',
			visible: true,
		};
		const { getByText } = setUpErrorMessage(valuesProps);
		const errorMessageValue = getByText(valuesProps.error);
		expect(errorMessageValue).toBeOnTheScreen();
	});
	it('should hide error message when visible and error are false', () => {
		const valuesProps = {
			error: '',
			visible: false,
		};
		const { queryByText } = setUpErrorMessage(valuesProps);
		const errorMessageValue = queryByText(valuesProps.error);
		expect(errorMessageValue).not.toBeOnTheScreen();
	});
	it('should not render error message when visible is false', () => {
		const valuesProps = {
			error: 'Email is a required field',
			visible: false,
		};
		const { queryByText } = setUpErrorMessage(valuesProps);
		const errorMessageValue = queryByText(valuesProps.error);
		expect(errorMessageValue).not.toBeOnTheScreen();
	});
});
