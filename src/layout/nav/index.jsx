import Button from '../../components/button';

const Nav = () => {
	return (
		<header>
			<nav class='navbar bg-light p-3'>
				<div class='container-fluid'>
					<a href='/' class='navbar-brand'>
						TODO
					</a>

					<div>
						<Button title='Login' className='m-2' />
						<Button title='Signup' className='m-2' />
						<Button title='Logout' className='m-2' />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
