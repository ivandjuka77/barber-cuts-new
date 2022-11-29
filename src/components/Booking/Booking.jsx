import { useState } from 'react';
import { motion } from 'framer-motion';

import './Booking.css';

const Booking = () => {
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');

	const showSelect = () => {
		if (category === 'hair') {
			return (
				<motion.div
					className='service'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<label>Choose your service:</label>
					<select
						name='hair'
						id='hair'
						onChange={(e) => setPrice(e.target.value)}
					>
						<option value=''>Select service</option>
						<option value='25'>Men's Haircut </option>
						<option value='30'>Men's Haircut (Long hair) </option>
						<option value='20'>Men's Haircut (Juniors) </option>
						<option value='20'>Shaving </option>
					</select>
				</motion.div>
			);
		} else if (category === 'beard') {
			return (
				<motion.div
					className='service'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<label>Choose your service:</label>
					<select
						name='Beard'
						id='Beard'
						onChange={(e) => setPrice(e.target.value)}
					>
						<option value=''>Select service</option>
						<option value='20'>Beard Adjustment </option>
						<option value='25'>Beard Adjustment (Long beard) </option>
						<option value='20'>Beard Shaving </option>
					</select>
				</motion.div>
			);
		} else if (category === 'hair-beard') {
			return (
				<motion.div
					className='service'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<label>Choose your service:</label>
					<select
						name='hair-beard'
						id='hair-beard'
						onChange={(e) => setPrice(e.target.value)}
					>
						<option value=''>Select service</option>
						<option value='35'>Haircut & Beard Adjustment </option>
						<option value='40'>Haircut & Beard Adjustment (Long) </option>
						<option value='30'>Beard & Hair Shaving </option>
					</select>
				</motion.div>
			);
		} else if (category === 'minor-adjustments') {
			return (
				<motion.div
					className='service'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<label>Choose your service:</label>
					<select
						name='minor-adjustments'
						id='minor-adjustments'
						onChange={(e) => setPrice(e.target.value)}
					>
						<option value=''>Select service</option>
						<option value='5'>Nose Hair Removal</option>
						<option value='5'>Ear Cleaning</option>
						<option value='5'>Eyebrow adjustment</option>
					</select>
				</motion.div>
			);
		} else if (category === 'coloring') {
			return (
				<motion.div
					className='service'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<label>Choose your service:</label>
					<select
						name='coloring'
						id='coloring'
						onChange={(e) => setPrice(e.target.value)}
					>
						<option value=''>Select service</option>
						<option value='10'>Beard Coloring </option>
						<option value='Price on arrival'>
							Hair Coloring (price on arrival)
						</option>
					</select>
				</motion.div>
			);
		} else if (category === 'skin') {
			return (
				<motion.div
					className='service'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<label>Choose your service:</label>
					<select
						name='skin'
						id='skin'
						onChange={(e) => setPrice(e.target.value)}
					>
						<option value=''>Select service</option>
						<option value='10'>Charcoal Peel Off Mask </option>
					</select>
				</motion.div>
			);
		} else if (category === 'gold') {
			return (
				<motion.div
					className='service'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<label>Choose your service:</label>
					<select
						name='gold'
						id='gold'
						onChange={(e) => setPrice(e.target.value)}
					>
						<option value=''>Select service</option>
						<option value='70'>Gold Combo </option>
					</select>
				</motion.div>
			);
		}
	};
	return (
		<div
			className='booking'
			id='booking'
		>
			<h1>Booking</h1>
			<div className='booking-content'>
				<div className='content-form'>
					<form>
						<div className='category'>
							<label htmlFor='hair'>Choose your category:</label>
							<select
								name='category'
								id='category'
								onChange={(e) => {
									setCategory(e.target.value);
									if (category === '') setPrice(0);
								}}
							>
								<option
									value=''
									defaultValue
								>
									Category
								</option>
								<option value='hair'>Hair</option>
								<option value='beard'>Beard</option>
								<option value='hair-beard'>Hair & Beard</option>
								<option value='minor-adjustments'>Minor Adjustments</option>
								<option value='coloring'>Coloring</option>
								<option value='skin'>Skin</option>
								<option value='gold'>Gold Combo</option>
							</select>
						</div>
						{showSelect()}
					</form>
					{category && price ? (
						<motion.div
							className='booking-total'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.7 }}
						>
							<h1>
								Your total:{' '}
								<span>
									{price === 'Price on arrival'
										? 'Price on arrival'
										: `${price}€`}
								</span>
							</h1>
						</motion.div>
					) : (
						''
					)}
				</div>

				{category && price ? (
					<div className='content-booking-options'>
						<motion.div
							className='booking-calendar'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
						>
							<h2>Use our calendar: </h2>
							<a
								href='https://calendly.com/barbercuts/60min'
								target='blank'
							>
								<motion.button
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3, type: 'tween' }}
								>
									Calendar
								</motion.button>
							</a>
						</motion.div>
						<motion.div
							className='booking-calendar'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
						>
							<h2>Or call us directly on:</h2>
							<h3>(+387) 065 / 403-935</h3>
						</motion.div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Booking;
