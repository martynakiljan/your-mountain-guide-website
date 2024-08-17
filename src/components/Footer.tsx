import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__top'>
				<div className='footer__logo'></div>
			</div>
			<div className='footer__bottom'>
				<div className='footer__col'>
					<p className='footer__title'>Contact</p>
					<p className='footer__tel'>+41 234 344 456</p>
					<a className='footer__email' href='mailto:prosper@invest.com'>
						prosper@invest.com
					</a>
				</div>
				<div className='footer__col'>
					<p className='footer__title'>Location</p>
					<p className='footer__street'>Bahnhofstrasse 54</p>
					<p className='footer__city'>Zürich</p>
				</div>
				<div className='footer__col'>
					<p className='footer__title'>Social Media</p>
					<div className='social'>
						<a className='social__icon' href='https://www.instagram.com/'>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a className='social__icon' href='https://www.facebook.com/'>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a className='social__icon' href='https://www.linkedin.com/'>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
			</div>
			<div className='footer__bottom--copy'>
				<p className='footer__copy'>COPYRIGHT ©2024 prosperInvest</p>
			</div>
		</div>
	)
}

export default Footer
