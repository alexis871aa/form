export const validatorSchema = {
	email: {
		isRequired: {
			message: 'Email is required',
		},
		isEmail: {
			message: 'Email is invalid',
		},
	},
	password: {
		isRequired: {
			message: 'Password is required',
		},
		min: {
			message: 'Password must be at least 6 characters long',
			param: 6,
		},
		max: {
			message: 'Password must be less than 10 characters long',
			param: 10,
		},
	},
	checkPassword: {
		matchPassword: {
			message: 'Passwords do not match',
			param: 'password',
		},
	},
};
