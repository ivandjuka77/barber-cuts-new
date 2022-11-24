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
						<option value='25'>Men's Haircut 25€</option>
						<option value='30'>Men's Haircut (Long hair) 30€</option>
						<option value='20'>Men's Haircut (Juniors) 20€</option>
						<option value='20'>Shaving 20€</option>
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
						<option value='20'>Beard Adjustment 20€</option>
						<option value='25'>Beard Adjustment (Long beard) 25€</option>
						<option value='20'>Beard Shaving 20€</option>
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
						<option value='35'>Haircut & Beard Adjustment 35€</option>
						<option value='40'>Haircut & Beard Adjustment (Long) 40€</option>
						<option value='30'>Beard & Hair Shaving 30€</option>
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
						<option value='5'>Nose Hair Removal 5€</option>
						<option value='5'>Ear Cleaning 5€</option>
						<option value='5'>Eyebrow adjustment 5€</option>
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
						<option value='10'>Beard Coloring 10€</option>
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
						<option value='10'>Charcoal Peel Off Mask 10€</option>
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
						<option value='70'>Gold Combo 70€</option>
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
			<form>
				<div className='category'>
					<label htmlFor='hair'>Choose your category:</label>
					<select
						name='category'
						id='category'
						onChange={(e) => setCategory(e.target.value)}
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
				<div className='booking-total'>
					<h1>
						Your total: <span>{`${price}€`}</span>
					</h1>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Booking;
