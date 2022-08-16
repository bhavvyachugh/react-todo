const Nav = () => {
	return (
		<header>
			<nav class='navbar bg-light p-3'>
				<div class='container-fluid'>
					<a href='/' class='navbar-brand'>
						TODO
					</a>

					<div>
						<a href='/login' class='btn btn-primary m-2'>
							Login
						</a>
						<a href='/signup' class='btn btn-primary m-2'>
							Signup
						</a>
						<a href='/logout' class='btn btn-primary m-2'>
							Logout
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
