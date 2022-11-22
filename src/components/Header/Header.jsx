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
		</header>
	);
};

export default Header;
