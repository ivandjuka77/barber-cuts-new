import './Booking.css';
import { useState } from 'react';

const Booking = () => {
	const [service, setService] = useState('');

	const showSelect = () => {
		if (service === 'hair') {
			return (
				<select
					name='hair'
					id='hair'
				>
					<option value='25'>Men's Haircut 25€</option>
					<option value='30'>Men's Haircut (Long hair) 30€</option>
					<option value='20'>Men's Haircut (Juniors) 20€</option>
					<option value='20'>Shaving 20€</option>
				</select>
			);
		} else if (service === 'beard') {
			return (
				<select
					name='Beard'
					id='Beard'
				>
					<option value='20'>Beard Adjustment 20€</option>
					<option value='25'>Beard Adjustment (Long beard) 25€</option>
					<option value='20'>Beard Shaving 20€</option>
				</select>
			);
		} else if (service === 'hair-beard') {
			return (
				<select
					name='hair-beard'
					id='hair-beard'
				>
					<option value='35'>Haircut & Beard Adjustment 35€</option>
					<option value='40'>Haircut & Beard Adjustment (Long) 40€</option>
					<option value='30'>Beard & Hair Shaving 30€</option>
				</select>
			);
		} else if (service === 'minor-adjustments') {
			return (
				<select
					name='minor-adjustments'
					id='minor-adjustments'
				>
					<option value='5'>Nose Hair Removal 5€</option>
					<option value='5'>Ear Cleaning 5€</option>
					<option value='5'>Eyebrow adjustment 5€</option>
				</select>
			);
		} else if (service === 'coloring') {
			return (
				<select
					name='coloring'
					id='coloring'
				>
					<option value='10'>Beard Coloring 10€</option>
					<option value='0'>Hair Coloring (price on arrival)</option>
				</select>
			);
		} else if (service === 'skin') {
			return (
				<select
					name='skin'
					id='skin'
				>
					<option value='10'>Charcoal Peel Off Mask 10€</option>
				</select>
			);
		} else if (service === 'gold') {
			return (
				<select
					name='gold'
					id='gold'
				>
					<option value='70'>Gold Combo 70€</option>
				</select>
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
				<label htmlFor='hair'>Choose your service:</label>
				<select
					name='service'
					id='service'
					onChange={(e) => setService(e.target.value)}
				>
					<option
						value=''
						defaultValue
					></option>
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
