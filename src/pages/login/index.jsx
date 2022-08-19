const Login = () => {
	return (
		<div class='container-fluid vh-100 d-flex align-items-center justify-content-center'>
			<div class='d-flex shadow rounded-3 align-items-center justify-content-between w-75 p-5'>
				<div>
					<img class='w-75' src='/images/login.svg' alt='signup' />
				</div>

				<form class='w-50' action='/login' method='POST'>
					<div class='mb-3'>
						<label for='email' class='form-label'>
							Email address
						</label>
						<input type='email' class='form-control' id='email' name='email' />
					</div>
					<div class='mb-3'>
						<label for='password' class='form-label'>
							Password
						</label>
						<input
							type='password'
							class='form-control'
							name='password'
							id='password'
						/>
					</div>

					<button type='submit' class='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
