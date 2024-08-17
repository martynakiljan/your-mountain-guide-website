import img1 from '../assets/images/mountains/mountain-7.jpg'
import img2 from '../assets/images/mountains/mountain-9.jpg'
import img3 from '../assets/images/mountains/mountain-10.jpg'

const SmallGrid = () => {
	return (
		<div className='grid-small'>
			<img className='grid-small__img grid-small__img--left' src={img1} alt='Mountain 1' />
			<img className='grid-small__img grid-small__img--center' src={img2} alt='Mountain 2' />
			<img className='grid-small__img grid-small__img--right' src={img3} alt='Mountain 3' />
		</div>
	)
}

export default SmallGrid
