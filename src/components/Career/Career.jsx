import './Career.css';

const Career = () => {
	return (
		<div
			className='career'
			id='career'
		>
			<h1>Career</h1>
			<h2>Be a part of our mission.</h2>
			<div className='career-list'>
				<div className='career-listing'>
					<h2>Barber / Stylist (Full-time)</h2>
					<ul>
						<li>Work in a team environment</li>
						<br />
						<li>Work flexible schedules</li>
						<br />
						<li>Receive incentives and recognition for a job well done</li>
						<br />
						<li>Tips paid daily</li>
						<br />
						<li>Amazing benefits, paid time off, insurance</li>
					</ul>
					<div className='listing-bottom'>
						<span>25€ - 30€ an hour</span>
						<button>Apply</button>
					</div>
				</div>
				<div className='career-listing'>
					<h2>Barber / Stylist (Training) </h2>
					<ul>
						<li>Learn the ins and outs of how the business runs</li>
						<br />
						<li>Educational videos and real life practice</li>
						<br />
						<li>Receive incentives and recognition for a job well done</li>
						<br />
						<li>Supportive and helping environment</li>
						<br />
						<li>Assistance with getting your barber license</li>
					</ul>
					<div className='listing-bottom'>
						<span>15€ an hour</span>
						<button>Apply</button>
					</div>
				</div>
				<div className='career-listing'>
					<h2>Barbershop Manager</h2>
					<ul>
						<li>help your staff with clientele and business.</li>
						<br />
						<li>Work flexible schedules</li>
						<br />
						<li>Receive incentives and recognition for a job well done</li>
						<br />
						<li>Provide leadership and tools for success.</li>
						<br />
						<li>Amazing benefits, paid time off, insurance</li>
					</ul>
					<div className='listing-bottom'>
						<span>30€ - 35€ an hour</span>
						<button>Apply</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Career;
