import React from 'react';
import { render } from '@testing-library/react-native';
import FormField from './FormField';
import { formikMockValue, useFormikContext } from '../../../__mocks__/formik';

jest.mock('formik');

describe('<FormField />', () => {
	const setUpFormFiled = () =>
		render(
			<FormField
				name="email"
				placeholder="Enter Email"
				textContentType="emailAddress"
				autoCorrect={false}
			/>
		);
	it('should render with correct props and values', () => {
		const { getByPlaceholderText } = setUpFormFiled();
		const inputElement = getByPlaceholderText('Enter Email');
		expect(inputElement).toBeOnTheScreen();
	});
	it('updates values of FormField component on change', async () => {
		useFormikContext.mockReturnValue({
			...formikMockValue,
			values: { email: 'Hello@gmail.com' },
		});
		const { getByTestId } = setUpFormFiled();
		const inputElement = getByTestId('my-input-field');
		expect(inputElement.props.value).toBe('Hello@gmail.com');
	});
});
