import React from 'react';
import { Formik } from 'formik';

type appFormProps = {
	onSubmit: () => void;
	children: React.ReactNode;
	initialValues: object;
	validationSchema: object;
};

const AppForm = ({
	initialValues,
	onSubmit,
	validationSchema,
	children,
}: appFormProps) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validateSchema={validationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
};

export default AppForm;
