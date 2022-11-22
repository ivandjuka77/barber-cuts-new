import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<h2 className='nav-logo-text'>Barber Cuts</h2>
			<ul className='nav-links'>
				<a
					href='#'
					className='nav-link'
				>
					<li>Gallery</li>
				</a>
				<a
					href='#'
					className='nav-link'
				>
					<li>Prices</li>
				</a>
				<a
					href='#'
					className='nav-link'
				>
					<li>About us</li>
				</a>
				<a
					href='#'
					className='nav-link'
				>
					<li>Booking</li>
				</a>
			</ul>
		</nav>
	);
};

export default Navbar;
