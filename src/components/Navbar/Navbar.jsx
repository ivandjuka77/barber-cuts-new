import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
	return (
		<motion.nav
			className='navbar'
			whileInView={{ opacity: 1 }}
			onViewportLeave={{ opacity: 0 }}
		>
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
		</motion.nav>
	);
};

export default Navbar;
