const combineStyles = (
	deviceWidth: number,
	defaultStyle: object,
	activatedStyles: any[]
): any => {
	for (let style of activatedStyles) {
		const { width, style: activatedStyle } = style;

		if (deviceWidth >= width) {
			return { ...defaultStyle, ...activatedStyle };
		} else {
			return { ...defaultStyle };
		}
	}

	return defaultStyle;
};

export default combineStyles;
