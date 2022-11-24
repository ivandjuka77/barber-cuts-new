import { useState } from 'react';
import { motion } from 'framer-motion';

import './Booking.css';

const Booking = () => {
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');

	const showSelect = () => {
		if (category === 'hair') {
			return (
				<motion.select
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					name='hair'
					id='hair'
					onChange={(e) => setPrice(e.target.value)}
				>
					<option value=''>Select service</option>
					<option value='25'>Men's Haircut 25€</option>
					<option value='30'>Men's Haircut (Long hair) 30€</option>
					<option value='20'>Men's Haircut (Juniors) 20€</option>
					<option value='20'>Shaving 20€</option>
				</motion.select>
			);
		} else if (category === 'beard') {
			return (
				<motion.select
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					name='Beard'
					id='Beard'
					onChange={(e) => setPrice(e.target.value)}
				>
					<option value=''>Select service</option>
					<option value='20'>Beard Adjustment 20€</option>
					<option value='25'>Beard Adjustment (Long beard) 25€</option>
					<option value='20'>Beard Shaving 20€</option>
				</motion.select>
			);
		} else if (category === 'hair-beard') {
			return (
				<motion.select
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					name='hair-beard'
					id='hair-beard'
					onChange={(e) => setPrice(e.target.value)}
				>
					<option value=''>Select service</option>
					<option value='35'>Haircut & Beard Adjustment 35€</option>
					<option value='40'>Haircut & Beard Adjustment (Long) 40€</option>
					<option value='30'>Beard & Hair Shaving 30€</option>
				</motion.select>
			);
		} else if (category === 'minor-adjustments') {
			return (
				<motion.select
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					name='minor-adjustments'
					id='minor-adjustments'
					onChange={(e) => setPrice(e.target.value)}
				>
					<option value=''>Select service</option>
					<option value='5'>Nose Hair Removal 5€</option>
					<option value='5'>Ear Cleaning 5€</option>
					<option value='5'>Eyebrow adjustment 5€</option>
				</motion.select>
			);
		} else if (category === 'coloring') {
			return (
				<motion.select
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					name='coloring'
					id='coloring'
					onChange={(e) => setPrice(e.target.value)}
				>
					<option value=''>Select service</option>
					<option value='10'>Beard Coloring 10€</option>
					<option value='Price on arrival'>
						Hair Coloring (price on arrival)
					</option>
				</motion.select>
			);
		} else if (category === 'skin') {
			return (
				<motion.select
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					name='skin'
					id='skin'
					onChange={(e) => setPrice(e.target.value)}
				>
					<option value=''>Select service</option>
					<option value='10'>Charcoal Peel Off Mask 10€</option>
				</motion.select>
			);
		} else if (category === 'gold') {
			return (
				<motion.select
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					name='gold'
					id='gold'
					onChange={(e) => setPrice(e.target.value)}
				>
					<option value=''>Select service</option>
					<option value='70'>Gold Combo 70€</option>
				</motion.select>
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
				{showSelect()}
			</form>
		</div>
	);
};

export default Booking;
