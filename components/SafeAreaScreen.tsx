import { SafeAreaView, View } from 'react-native';
import React, { FC } from 'react';
import { CreateResponsiveStyle } from 'rn-responsive-styles';

type ContainerProps = {
	children: React.ReactNode;
};

const SafeAreaScreen: FC<ContainerProps> = ({ children }) => {
	const styles = useStyles();
	return (
		<SafeAreaView style={styles.containerWrapper}>{children}</SafeAreaView>
	);
};

const useStyles = CreateResponsiveStyle({
	containerWrapper: {
		flex: 1,
	},
});

export default SafeAreaScreen;
