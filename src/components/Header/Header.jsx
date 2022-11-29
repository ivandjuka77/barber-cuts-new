import Navbar from '../Navbar/Navbar';

import { motion } from 'framer-motion';

import './Header.css';

const Header = () => {
	return (
		<header id='header'>
			<Navbar />
			<div>
				<video
					autoPlay
					muted
					loop
					className='header-video'
				>
					<source
						src={require('../../assets/video2.mp4')}
						type='video/mp4'
					/>
				</video>
			</div>
			<motion.h1
				className='header-main'
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				If you can dream it, <br /> we can cut it.
			</motion.h1>
			<motion.div
				className='header-sub'
				initial={{ opacity: 0, x: -10 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<h3>
					Leave stress at the door and come enjoy the good vibes, <br />
					good music and good people.
				</h3>
				<a href='#booking'>
					<motion.button
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3, type: 'tween' },
						}}
						className='header-reservation-btn'
					>
						Reserve a seat
					</motion.button>
				</a>
			</motion.div>
		</header>
	);
};

export default Header;
