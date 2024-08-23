import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import img1 from '../assets/images/mountains/mountain-1.jpg'
import img2 from '../assets/images/mountains/mountain-2.jpg'
import img3 from '../assets/images/mountains/mountain-3.jpg'
import img4 from '../assets/images/mountains/mountain-4.jpg'
import img5 from '../assets/images/mountains/mountain-5.jpg'
import { motion } from 'framer-motion'
const Grid = () => {
	const outerGrid = useRef(null)

	const { scrollYProgress } = useScroll({
		target: outerGrid,
		offset: ['start start', '75% end'],
	})

	const imgScale = useTransform(scrollYProgress, [0, 1], ['100%', '150%'])
	const mainImgTranslate = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

	const translateLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
	const translateRight = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
	const translateLeftUp = useTransform(scrollYProgress, [0, 1], ['0%', '-37%'])
	const translateMiddleUp = useTransform(scrollYProgress, [0, 1], ['0%', '-125%'])

	return (
		<div className='grid' ref={outerGrid}>
			<div className='grid__inner'>
				<motion.img
					style={{
						x: translateLeft,
						y: translateLeftUp,
						scale: imgScale,
					}}
					className='grid__img'
					src={img1}
				/>
				<motion.img style={{ y: translateMiddleUp, scale: imgScale }} className='grid__img' src={img2} />
				<motion.img style={{ x: translateRight, scale: imgScale }} className='grid__img' src={img3} />
				<motion.img style={{ x: translateLeft, scale: imgScale }} className='grid__img' src={img4} />
				<motion.img className='grid__img' src={img5} style={{ scale: imgScale, y: mainImgTranslate }} />
			</div>
		</div>
	)
}

export default Grid
