const Expeditions = () => {
	return (
		<div className='expedition' id='expeditions'>
			<div className='expedition__inner'>
				<div className='expedition__titles reduced-width'>
					<h2 className='expedition__title title-section'>
						Explore the Majestic Mountains with a Certified Mountain Guide
					</h2>
					<p className='expedition__text'>
						Are you ready to embark on an unforgettable adventure? As a certified mountain guide with years of
						experience, I offer a range of guided mountain tours tailored to your skill level and interests. Whether
						you're an experienced hiker looking for a challenging trek or a beginner eager to explore the beauty of the
						mountains, I can provide a safe and enjoyable experience.
					</p>
					<h3 className='expedition__title title-section'>What I Offer:</h3>
				</div>

				<div className='expedition__tiles'>
					<div className='expedtion__tile'>
						<div className='expedtion__num'>1</div>
						<div className='expedtion__text'>
							<h4 className='expedtion__tile--title'>Customizable Hiking Tours </h4>
							<p className='expedtion__tile--text'>
								Choose from half-day, full-day, or multi-day hikes, with routes that range from gentle slopes to rugged
								terrains.
							</p>
						</div>
					</div>
					<div className='expedtion__tile'>
						<div className='expedtion__num'>2</div>
						<div className='expedtion__text'>
							<h4 className='expedtion__tile--title'>Specialized Expeditions</h4>
							<p className='expedtion__tile--text'>
								Winter hiking, sunrise/sunset tours, wildlife observation, and more.
							</p>
						</div>
					</div>
					<div className='expedtion__tile'>
						<div className='expedtion__num'>3</div>
						<div className='expedtion__text'>
							<h4 className='expedtion__tile--title'>Safety First</h4>
							<p className='expedtion__tile--text'>
								All tours include safety briefings, necessary equipment, and a focus on responsible and sustainable
								travel.
							</p>
						</div>
					</div>
					<div className='expedtion__tile'>
						<div className='expedtion__num'>4</div>
						<div className='expedtion__text'>
							<h4 className='expedtion__tile--title'>Local Expertise</h4>
							<p className='expedtion__tile--text'>
								Discover hidden gems and learn about the local culture, flora, and fauna from someone who knows the
								mountains intimately.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='expedition__img'></div>
		</div>
	)
}

export default Expeditions
