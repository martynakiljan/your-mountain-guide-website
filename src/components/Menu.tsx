import { Slant as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'

const Menu = () => {
	const [isOpen, setOpen] = useState(false)

	const handleLinkClick = (e, sectionId) => {
		e.preventDefault()
		setOpen(false)
		console.log('handleLinkClick called')
		console.log('sectionId:', sectionId)

		const section = document.getElementById(sectionId)
		if (section) {
			const headerOffset = 50
			const sectionTop = section.getBoundingClientRect().top + window.scrollY
			console.log('sectionTop:', sectionTop)
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
		<div className='menu menu__section'>
			<div className='menu-mobile'>
				<Hamburger className='menu-burger' toggled={isOpen} toggle={setOpen} />
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
								contact
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='menu-desktop'>
				<div className='menu-desktop__inner'>
					<a className='menu-desktop-logo'>T.K</a>
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
								get in touch
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu
