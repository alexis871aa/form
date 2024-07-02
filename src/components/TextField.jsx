export const TextField = ({ label, error, ...props }) => {
	return (
		<div>
			<label htmlFor="10">
				<span>{label}</span>
				<input {...props} />
			</label>
			{error && <span>{error}</span>}
		</div>
	);
};
