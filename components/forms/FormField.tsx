import { TextInput, View } from 'react-native';
import React from 'react';
import { CreateResponsiveStyle } from 'rn-responsive-styles';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import {
	COLOR_GREY,
	COLOR_RICH_BLACK,
	FONT_SIZE_3,
	DIMENSIONS_4,
	DIMENSIONS_3,
	FONT_WEIGHT_3,
	FONT_FAMILY_400,
} from '../../constants';

type formFieldProps = {
	name: string;
	autoCorrect: boolean;
	placeholder: string;
	textContentType?: any;
	secureTextEntry?: boolean;
};

type formikContextProps = {
	[key: string]: string;
};
type styleProps = {};

const FormField = ({ name, ...otherProps }: formFieldProps) => {
	const { setFieldTouched, setFieldValue, errors, touched, values } =
		useFormikContext<formikContextProps>();

	const styles = useStyles();

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.containerInput}
				onBlur={() => {
					setFieldTouched(name);
				}}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				placeholderTextColor="black"
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	);
};

const useStyles = CreateResponsiveStyle({
	container: {
		marginBottom: DIMENSIONS_3,
	},
	containerInput: {
		borderWidth: 1,
		borderColor: COLOR_GREY,
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderRadius: 15,
		color: COLOR_RICH_BLACK,
		fontSize: FONT_SIZE_3,
		marginBottom: DIMENSIONS_4,
		fontWeight: FONT_WEIGHT_3,
		fontFamily: FONT_FAMILY_400,
	},
});

export default FormField;
