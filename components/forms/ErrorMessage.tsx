import React from 'react';
import { Text } from 'react-native';

type errorMessageProps = {
	error: undefined;
	visible: undefined;
};

function ErrorMessage({ error, visible }: errorMessageProps) {
	return <Text>ErrorMessage</Text>;
}

export default ErrorMessage;
