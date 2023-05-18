import { TextInput, View } from 'react-native';
import React from 'react';
import { useFormikContext } from 'formik';
import StyleProvider from '../../../helpers/combineStyles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
	COLOR_GREY,
	COLOR_RICH_BLACK,
	FONT_SIZE_3,
	DIMENSIONS_4,
	DIMENSIONS_3,
	FONT_WEIGHT_3,
	FONT_FAMILY_400,
} from '../../../constants';

type formFieldProps = {
	name: string;
	autoCorrect: boolean;
	placeholder: string;
	textContentType?: 'none' | 'username' | 'emailAddress' | 'password';
	secureTextEntry?: boolean;
};

type formikContextProps = {
	[key: string]: string;
};

enum deviceWidth {
	MD = 768,
	SM = 560,
	XS = 450,
}

const FormField = ({ name, ...otherProps }: formFieldProps) => {
	const { setFieldTouched, setFieldValue, errors, touched, values } =
		useFormikContext<formikContextProps>();
	return (
		<View style={useStyles.container}>
			<TextInput
				style={useStyles.containerInput}
				onBlur={() => {
					setFieldTouched(name);
				}}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				placeholderTextColor="black"
				{...otherProps}
				testID="my-input-field"
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	);
};

const useStyles = {
	container: StyleProvider(deviceWidth.SM, { marginBottom: DIMENSIONS_3 }, [
		{ width: deviceWidth.MD, style: { marginBottom: DIMENSIONS_3 } },
	]),
	containerInput: StyleProvider(
		deviceWidth.SM,
		{
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
		[
			{
				width: deviceWidth.MD,
				style: {
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
			},
		]
	),
};

export default FormField;
