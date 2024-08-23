import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Header = () => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})

	const sizing = useTransform(scrollYProgress, [0, 1], ['100%', '125%'])
	const translate = useTransform(scrollYProgress, [0, 1], ['0px', '-175px'])

	return (
		<div className='header'>
			<div className='header__inner section__inner' ref={ref}>
				<div className='header__titles'>
					<h1 className='header__title'>Explore</h1>
					<h2 className='header__subtitle'>the Peaks with Passionate Guidance </h2>
				</div>
				<motion.div
					style={{
						backgroundSize: sizing,
						backgroundPositionX: translate,
					}}
					className='header__img'></motion.div>
			</div>
		</div>
	)
}

export default Header
