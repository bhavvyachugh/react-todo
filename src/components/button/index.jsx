const Button = ({ title, className }) => {
	return (
		<button type='submit' class={`btn btn-primary ${className}`}>
			{title}
		</button>
	);
};

export default Button;
