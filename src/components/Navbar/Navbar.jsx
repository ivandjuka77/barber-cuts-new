import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<h2 className='nav-logo-text'>Barber Cuts</h2>
			<ul className='nav-links'>
				<a
					href='#about'
					className='nav-link'
				>
					<li>About us</li>
				</a>
				<a
					href='#pricing'
					className='nav-link'
				>
					<li>Pricing</li>
				</a>
				<a
					href='#booking'
					className='nav-link'
				>
					<li>Booking</li>
				</a>
				<a
					href='#'
					className='nav-link'
				>
					<li>Career</li>
				</a>
			</ul>
		</nav>
	);
};

export default Navbar;
