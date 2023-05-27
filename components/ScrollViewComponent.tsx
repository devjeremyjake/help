import { ScrollView } from 'react-native';
import React, { FC } from 'react';

type ContainerProps = {
	children: React.ReactNode;
};

const ScrollViewComponent: FC<ContainerProps> = ({ children }) => {
	return (
		<ScrollView
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
		>
			{children}
		</ScrollView>
	);
};

export default ScrollViewComponent;
