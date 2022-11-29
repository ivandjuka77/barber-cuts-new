import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<a href='#header'>
				<h2 className='nav-logo-text'>Barber Cuts</h2>
			</a>
			<ul className='nav-links'>
				{['pricing', 'about', 'career', 'booking'].map((item) => (
					<a
						key={`link-${item}`}
						className='nav-link'
						href={`#${item}`}
					>
						<li>{item}</li>
					</a>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
