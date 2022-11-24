import './Booking.css';

const Booking = () => {
	return (
		<div className='booking'>
			<h1>Booking</h1>
			<form>
				<select
					name='hair'
					id='hair'
				>
					<option value=''>Hair</option>

					<option value='25'>Men's Haircut 25€</option>
					<option value='30'>Men's Haircut (Long hair) 30€</option>
					<option value='20'>Men's Haircut (Juniors) 20€</option>
					<option value='20'>Shaving 20€</option>
				</select>
				<select
					name='Beard'
					id='Beard'
				>
					<option value=''>Beard</option>

					<option value='20'>Beard Adjustment 20€</option>
					<option value='25'>Beard Adjustment (Long beard) 25€</option>
					<option value='20'>Beard Shaving 20€</option>
				</select>
				<select
					name='hair-beard'
					id='hair-beard'
				>
					<option value=''>Hair & Beard</option>

					<option value='35'>Haircut & Beard Adjustment 35€</option>
					<option value='40'>Haircut & Beard Adjustment (Long) 40€</option>
					<option value='30'>Beard & Hair Shaving 30€</option>
				</select>
				<select
					name='minor-adjustments'
					id='minor-adjustments'
				>
					<option>Minor Adjustments</option>

					<option value='5'>Nose Hair Removal 5€</option>
					<option value='5'>Ear Cleaning 5€</option>
					<option value='5'>Eyebrow adjustment 5€</option>
				</select>
				<select
					name='coloring'
					id='coloring'
				>
					<option>Coloring</option>
					<option value='10'>Beard Coloring 10€</option>
					<option value='0'>Hair Coloring (price on arrival)</option>
				</select>
				<select
					name='skin'
					id='skin'
				>
					<option>Skin</option>
					<option value='10'>Charcoal Peel Off Mask 10€</option>
				</select>
				<select
					name='gold'
					id='gold'
				>
					<option>Gold Combo</option>
					<option value='70'>Gold Combo 70€</option>
				</select>
			</form>
		</div>
	);
};

export default Booking;
