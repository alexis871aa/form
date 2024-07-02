import { useEffect, useRef, useState } from 'react';
import { TextField } from './components';
import { validate, validatorSchema } from './utils';
import style from './App.module.css';

export const App = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		checkPassword: '',
	});
	const buttonRef = useRef(null);

	const [error, setError] = useState({
		email: '',
		password: '',
		checkPassword: '',
	});
	const isValid = Object.keys(error).length === 0;

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(data);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		const error = validate(data, validatorSchema);
		setError(error);
	}, [data]);

	useEffect(() => {
		if (isValid) {
			buttonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={style.app}>
			<h1>App</h1>
			<form onClick={handleSubmit}>
				<TextField
					label={'Email'}
					error={error.email}
					onChange={handleChange}
					name={'email'}
					value={data.email}
				/>
				<TextField
					label={'Password'}
					error={error.password}
					onChange={handleChange}
					name={'password'}
					value={data.password}
				/>
				<TextField
					label={'checkPassword'}
					error={error.checkPassword}
					onChange={handleChange}
					name={'checkPassword'}
					value={data.checkPassword}
				/>
				<button type="submit" disabled={!isValid} ref={buttonRef}>
					Submit
				</button>
			</form>
		</div>
	);
};
