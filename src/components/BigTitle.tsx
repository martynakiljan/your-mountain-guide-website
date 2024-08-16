import img from '../assets/images/mountains/mountain-6.jpg'

const BigTitle = () => {
	return (
		<div className='big-title'>
			<div className='big-title__inner section__inner'>
				<h2 className='big-title__title'>Come with me</h2>
				<h2 className='big-title__title'>on a mountain journey.</h2>
			</div>
			<img src={img} alt='mountains' className='big-title__img'/>
		</div>
	)
}

export default BigTitle
