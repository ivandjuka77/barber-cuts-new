import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
	return (
		<header>
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
			<h1 className='header-main'>
				If you can dream it, <br /> we can cut it.
			</h1>
			<div className='header-sub'>
				<h3>
					Leave stress at the door and come enjoy the good vibes, <br />
					good music and good people.
				</h3>
				<button className='header-reservation-btn'>Reserve a seat</button>
			</div>
		</header>
	);
};

export default Header;
