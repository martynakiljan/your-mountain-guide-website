import React from 'react'
import Review from './Review'
import reviewsData from '../data/reviewsData'

const Reviews: React.FC = () => {
	return (
		<div className='reviews'>
			<div className='reviews__inner reduced-width'>
				<h2 className='reviews__title title-section'>
                what do others think about me?</h2>
				{reviewsData.reviews.map((review, index) => (
					<Review key={index} src={review.img} name={review.name} review={review.review} date={review.date} />
				))}
			</div>
		</div>
	)
}

export default Reviews
