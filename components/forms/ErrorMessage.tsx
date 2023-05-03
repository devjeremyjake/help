import React from 'react';
import { Text } from 'react-native';

type errorMessageProps = {
	error: any;
	visible: any;
};

function ErrorMessage({ error, visible }: errorMessageProps) {
	return <Text>{error}</Text>;
}

export default ErrorMessage;
