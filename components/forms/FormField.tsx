import { TextInput } from 'react-native';
import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';

type formFieldProps = {
	name: string;
};

type formikContextProps = {
	[key: string]: string;
};

const FormField = ({ name }: formFieldProps) => {
	const { setFieldTouched, setFieldValue, errors, touched, values } =
		useFormikContext<formikContextProps>();
	return (
		<>
			<TextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default FormField;
