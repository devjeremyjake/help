import React from 'react';
import { Formik } from 'formik';

type appFormProps = {
	onSubmit: (e: { email: string; password: string; fullname: string }) => void;
	children: React.ReactNode;
	initialValues: { email: string; password: string; fullname: string };
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
			validationSchema={validationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
};

export default AppForm;
