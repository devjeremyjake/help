import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import SafeAreaComponent from '../../../Components/SafeAreaComponent';
import HeaderComponent from '../../../Components/HeaderComponent';
import DividerComponent from '../../../Components/DividerComponent';
import { Form, FormField, SubmitButton } from '../../../Components/Forms';
import { CreateResponsiveStyle } from 'rn-responsive-styles';
import Routes from '../../../navigation/routes';
import {
	DIMENSIONS_1,
	FONT_SIZE_2,
	FONT_FAMILY_400,
	FONT_WEIGHT_3,
	COLOR_RICH_BLACK,
	COLOR_PRUSSIAN_BLUE,
} from '../../../constants';

type RootStackParamList = {
	SIGNIN_SCREEN: undefined;
	SIGNUP_SCREEN: undefined;
};

type headerComponentNavigationProp = StackNavigationProp<
	RootStackParamList,
	'SIGNIN_SCREEN'
>;

type signInProps = {
	navigation: headerComponentNavigationProp;
};

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required('Password is a required field'),
});

const SignInScreen = ({ navigation }: signInProps) => {
	const styles = useStyles();
	const handleSubmit = ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => {
		console.warn('Reached here', { email, password });
	};

	return (
		<SafeAreaComponent>
			<HeaderComponent title="Sign In" />
			<Form
				initialValues={{ email: '', password: '', fullname: '', username: '' }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<View style={styles.container}>
					<FormField
						autoCorrect={false}
						name="email"
						placeholder="Email"
						textContentType="emailAddress"
					/>
					<FormField
						name="password"
						autoCorrect={false}
						placeholder="Password"
						textContentType="password"
						secureTextEntry
					/>
					<SubmitButton title="Continue" />
				</View>
			</Form>
			<DividerComponent />
			<View style={styles.newAccountWrapper}>
				<Text style={styles.newAccountText}>New User?</Text>
				<TouchableWithoutFeedback
					onPress={() => navigation.navigate(Routes.SIGNUP_SCREEN)}
				>
					<View>
						<Text style={styles.newAccountLink}>Create Account</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		</SafeAreaComponent>
	);
};

const useStyles = CreateResponsiveStyle({
	container: {
		paddingHorizontal: 20,
		marginTop: DIMENSIONS_1,
	},
	newAccountWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	newAccountText: {
		fontSize: FONT_SIZE_2,
		fontFamily: FONT_FAMILY_400,
		fontWeight: FONT_WEIGHT_3,
		marginRight: 6,
		color: COLOR_RICH_BLACK,
	},
	newAccountLink: {
		fontSize: FONT_SIZE_2,
		fontFamily: FONT_FAMILY_400,
		fontWeight: FONT_WEIGHT_3,
		color: COLOR_PRUSSIAN_BLUE,
	},
});

export default SignInScreen;
