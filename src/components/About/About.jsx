import './About.css';

const About = () => {
	return (
		<div className='about'>
			<div className='about-text'>
				<h1>Who are we?</h1>
				<p>
					Barber Cuts was founded in 2021 by the Abbott family and only
					consisted of 2 members. <br />
					Nowdays, our team consists of 10 artists, all with their own style,
					personality and special <br />
					touches. We're a team of passionate barbers who live for the art of
					cutting hair and <br />
					making you look better. We take responsibility of you and your
					well-being while
					<br /> you're in our house, and we love to see you enjoy your stay!{' '}
					<br />
					<br />
				</p>
			</div>
			<div className='about-gallery'>
				<img
					src={require('../../assets/about5.jpg')}
					alt='barber'
					className='about-img'
				/>
				<img
					src={require('../../assets/about2.jpg')}
					alt='barber'
					className='about-img'
				/>
				<img
					src={require('../../assets/about6.jpg')}
					alt='barber'
					className='about-img'
				/>
			</div>
		</div>
	);
};

export default About;
