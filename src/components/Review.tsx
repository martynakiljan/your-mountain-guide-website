import React from 'react'

interface ReviewProps {
	src: string
	name: string
	review: string
	date: string
}

const Review: React.FC<ReviewProps> = ({ src, name, review, date }) => {
	return (
		<div className='review'>
			<div className='review__columns'>
				<div className='review__col review__col--img'>
					<div className='review__col review__col--image' style={{ backgroundImage: `url(${src})` }}></div>
				</div>
				<div className='review__col review__col--text'>
					<h4 className='review__name'>{name}</h4>
					<p className='review__review'>{review}</p>
					<span className='review__date'>{date}</span>
				</div>
			</div>
		</div>
	)
}

export default Review
