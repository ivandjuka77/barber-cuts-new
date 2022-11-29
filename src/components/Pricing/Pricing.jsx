import { motion } from 'framer-motion';

import './Pricing.css';

const Pricing = () => {
	return (
		<div
			className='pricing'
			id='pricing'
		>
			<h1>Pricing</h1>
			<div className='pricing-list'>
				<motion.div
					className='pricing-hair pricing-section'
					whileHover={{ scale: 1.01, y: -5 }}
					transition={{ duration: 0.3, type: 'tween' }}
				>
					<h2>Hair</h2>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Men's Haircut <span className='pricing-item-price'>25€</span>
						</span>
						<span className='pricing-item-desc'>
							Haircut using machine and scissors, <br />
							styling & washing.
						</span>
					</div>

					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Men's Haircut (Long hair)
							<span className='pricing-item-price'>30€</span>
						</span>
						<span className='pricing-item-desc'>
							Haircut for longer hair using mostly scissors, <br />
							styling & washing.
						</span>
					</div>

					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Men's Haircut (Juniors)
							<span className='pricing-item-price'>20€</span>
						</span>
						<span className='pricing-item-desc'>
							Haircut for juniors (12 years or younger) using <br />
							machine and scissors, styling & washing.
						</span>
					</div>

					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Shaving
							<span className='pricing-item-price'>20€</span>
						</span>
						<span className='pricing-item-desc'>
							Full shave of the head mostly using a razor, washing.
						</span>
					</div>
				</motion.div>

				<motion.div
					className='pricing-beard pricing-section'
					whileHover={{ scale: 1.01, y: -5 }}
					transition={{ duration: 0.3, type: 'tween' }}
				>
					<h2>Beard</h2>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Beard Adjustment
							<span className='pricing-item-price'>20€</span>
						</span>
						<span className='pricing-item-desc'>
							Beard adjustment using machine and razor, <br /> styling &
							washing.
						</span>
					</div>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Beard Adjustment (Long beard)
							<span className='pricing-item-price'>25€</span>
						</span>
						<span className='pricing-item-desc'>
							Beard adjustment for longer beards using machine <br /> and razor
							, styling & washing.
						</span>
					</div>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Beard Shaving
							<span className='pricing-item-price'>20€</span>
						</span>
						<span className='pricing-item-desc'>
							Full shave of the beard mostly using a razor, washing.
						</span>
					</div>
				</motion.div>

				<motion.div
					className='pricing-both pricing-section'
					whileHover={{ scale: 1.01, y: -5 }}
					transition={{ duration: 0.3, type: 'tween' }}
				>
					<h2>Hair & Beard</h2>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Haircut & Beard Adjustment
							<span className='pricing-item-price'>35€</span>
						</span>
						<span className='pricing-item-desc'>
							Haircut and beard adjustment using machine, <br /> scissors and
							razor, styling & washing.
						</span>
					</div>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Haircut & Beard Adjustment (Long beard / hair )
							<span className='pricing-item-price'>40€</span>
						</span>
						<span className='pricing-item-desc'>
							Haircut and beard adjustment using mostly scissors <br /> and
							razor, styling & washing.
						</span>
					</div>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Beard & Hair Shaving
							<span className='pricing-item-price'>30€</span>
						</span>
						<span className='pricing-item-desc'>
							Full shave of the beard and head mostly using a razor, <br />
							washing.
						</span>
					</div>
				</motion.div>

				<motion.div
					className='pricing-depilation pricing-section'
					whileHover={{ scale: 1.01, y: -5 }}
					transition={{ duration: 0.3, type: 'tween' }}
				>
					<h2>Minor Adjustments</h2>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Nose Hair Removal
							<span className='pricing-item-price'>5€</span>
						</span>
						<span className='pricing-item-desc'>
							Nose hair removal with a machine, cleaning.
						</span>
					</div>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Ear Cleaning
							<span className='pricing-item-price'>5€</span>
						</span>
						<span className='pricing-item-desc'>
							Ear wax & general ear cleaning.
						</span>
					</div>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Eyebrow adjustment
							<span className='pricing-item-price'>5€</span>
						</span>
						<span className='pricing-item-desc'>
							Eyebrow adjustment, depilation, slits with razor.
						</span>
					</div>
				</motion.div>

				<motion.div
					className='pricing-coloring pricing-section'
					whileHover={{ scale: 1.01, y: -5 }}
					transition={{ duration: 0.3, type: 'tween' }}
				>
					<h2>Coloring</h2>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Beard Coloring
							<span className='pricing-item-price'>10€</span>
						</span>
						<span className='pricing-item-desc'>
							Beard coloring with natural hair coloring products.
						</span>
					</div>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Hair Coloring
							<span className='pricing-item-price'>30€ +</span>
						</span>
						<span className='pricing-item-desc'>
							Hair coloring with natural hair coloring products. <br />
							(price depending on color & hair)
						</span>
					</div>
				</motion.div>

				<motion.div
					className='pricing-skin pricing-section'
					whileHover={{ scale: 1.01, y: -5 }}
					transition={{ duration: 0.3, type: 'tween' }}
				>
					<h2>Skin</h2>
					<div className='pricing-item'>
						<span className='pricing-item-name'>
							Charcoal Peel Off Mask
							<span className='pricing-item-price'>10€</span>
						</span>
						<span className='pricing-item-desc'>
							Charcoal mask for removing blackheads, brightening <br /> &
							exfoliating the skin, skin smoothing, acne & dark spots reduction.
						</span>
					</div>
				</motion.div>

				<motion.div
					className='pricing-special pricing-section'
					whileHover={{ scale: 1.03, y: -5 }}
					transition={{ duration: 0.3, type: 'tween' }}
				>
					<h2>
						Gold Combo <span className='pricing-item-price'>70€</span>
					</h2>
					<div className='pricing-item'>
						<span className='pricing-item-desc'>
							Haircut & Beard Adjustment, Charcoal Mask, Eyebrow Adjustment, Ear
							Cleaning, Nose Hair Removal, Styling & Cleaning.
						</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Pricing;
