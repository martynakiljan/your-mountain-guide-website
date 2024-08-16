import img1 from '../assets/images/mountains/mountain-1.jpg'
import img2 from '../assets/images/mountains/mountain-2.jpg'
import img3 from '../assets/images/mountains/mountain-3.jpg'
import img4 from '../assets/images/mountains/mountain-4.jpg'
import img5 from '../assets/images/mountains/mountain-5.jpg'

const Grid = () => {
	return (
		<div className='grid'>
			<div className='grid__inner'>
				<img className='grid__img' src={img1} />
				<img className='grid__img' src={img2} />
				<img className='grid__img' src={img3} />
				<img className='grid__img' src={img4} />
				<img className='grid__img' src={img5} />
			</div>
		</div>
	)
}

export default Grid
