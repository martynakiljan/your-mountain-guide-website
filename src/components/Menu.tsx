import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slant as Hamburger } from 'hamburger-react'
import { useState, useEffect, MouseEvent } from 'react'
import { faHandPeace } from '@fortawesome/free-solid-svg-icons'

const Menu: React.FC = () => {
	const [isOpen, setOpen] = useState<boolean>(false)

	const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault()
		setOpen(false)

		const section = document.getElementById(sectionId)
		if (section) {
			const headerOffset = 50
			const sectionTop = section.getBoundingClientRect().top + window.scrollY
			window.scrollTo({
				top: sectionTop - headerOffset,
				behavior: 'smooth',
			})
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			setOpen(false)
		}

		if (isOpen) {
			window.addEventListener('scroll', handleScroll)
		}

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isOpen])

	return (
		<div className='menu reduced-width'>
			<div className='menu-mobile'>
				<Hamburger toggled={isOpen} toggle={setOpen} />
				<div className={`menu-mobile__content ${isOpen ? 'open' : ''}`}>
					<ul className='menu-mobile__list'>
						<li className='menu__item'>
							<a className='menu__link' href='#home' onClick={e => handleLinkClick(e, 'home')}>
								home
							</a>
						</li>
						<li className='menu__item'>
							<a className='menu__link' href='#about' onClick={e => handleLinkClick(e, 'about')}>
								about me
							</a>
						</li>
						<li className='menu__item'>
							<a className='menu__link' href='#services' onClick={e => handleLinkClick(e, 'services')}>
								services
							</a>
						</li>
						<li className='menu__item'>
							<a className='menu__link' href='#works' onClick={e => handleLinkClick(e, 'works')}>
								works
							</a>
						</li>
						<li className='menu__item'>
							<a
								className='menu__link menu__link--contact'
								href='#contact'
								onClick={e => handleLinkClick(e, 'contact')}>
								<span className='menu__link--contact--text'> get in touch</span>
								<FontAwesomeIcon icon={faHandPeace} />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='menu-desktop'>
				<div className='menu-desktop__inner'>
					<a className='menu-desktop-logo'>
						T.K
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								fill='#c0bbbb'
								version='1.1'
								id='Layer_1'
								height='50px'
								width='100px'
								x='0px'
								y='0px'
								viewBox='0 0 122.88 71.5'
								xmlSpace='preserve'>
								<g>
									<path
										d='M44.44,71.5H5.35H0L2.92,67L44.36,3.02c0.23-0.41,0.57-0.77,0.99-1.03c1.37-0.85,3.16-0.43,4.01,0.93l16.04,25.64v0 
                                        l3.37,5.38l-1.75,2.7l-4.09-6.54c-2.45-0.73-5.86,8.9-8.45,8.53c-3.57-0.51-7.61-12.43-10.16-9.32l-8.71,10.62l-9.13-3.95 
                                        L5.35,68.58h40.97L44.44,71.5L44.44,71.5z M119.06,71.28H59.77l-3.89,0L58,68.01l15.57-24.04l0.73-1.13h0l13.78-21.28 
                                        c0.17-0.3,0.41-0.56,0.72-0.75c0.99-0.62,2.3-0.31,2.91,0.68l11.65,18.61l0,0l17.42,27.83c0.05,0.07,0.1,0.14,0.14,0.22l1.96,3.13 
                                        L119.06,71.28L119.06,71.28z M59.77,69.16h59.29l-17.49-27.95c-1.78-0.53-4.25,6.46-6.14,6.19c-2.59-0.37-5.53-9.02-7.38-6.77 
                                        l-6.32,7.71l-6.63-2.87L59.77,69.16L59.77,69.16z M75.39,0c4.6,0,8.34,3.73,8.34,8.34s-3.73,8.34-8.34,8.34 
                                        c-4.6,0-8.34-3.73-8.34-8.34S70.78,0,75.39,0L75.39,0z'
									/>
								</g>
							</svg>
						</span>
					</a>
					<ul className='menu-desktop__list'>
						<li className='menu__item'>
							<a className='menu__link' href='#home' onClick={e => handleLinkClick(e, 'home')}>
								home
							</a>
						</li>
						<li className='menu__item'>
							<a className='menu__link' href='#about' onClick={e => handleLinkClick(e, 'about')}>
								about me
							</a>
						</li>
						<li className='menu__item'>
							<a className='menu__link' href='#expeditions' onClick={e => handleLinkClick(e, 'expeditions')}>
								expeditions
							</a>
						</li>
					</ul>
					<ul className='menu-desktop__list menu-desktop__list--second'>
						<li className='menu__item'>
							<a
								className='menu__link menu__link--contact'
								href='#contact'
								onClick={e => handleLinkClick(e, 'contact')}>
								<span className='menu__link--contact--text'> get in touch</span>
								<FontAwesomeIcon icon={faHandPeace} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu
