import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ClipLoader from 'react-spinners/ClipLoader'

const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const onSubmit = () => {
		setIsSubmitting(true)
		setTimeout(() => {
			setIsSubmitting(false)
			setIsSubmitted(true)

			setTimeout(() => {
				setIsSubmitted(false)
				reset()
			}, 3000)
		}, 1500)
	}

	return (
		<div className='contact-container'>
			<div className='contact-form'>
				<h2 className='title'>Contact Us</h2>
				{isSubmitted ? (
					<p className='thank-you-message'>Thank you. We will contact you soon!</p>
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<input id='name' type='text' {...register('name', { required: 'Name is required' })} />
							{errors.name && <p className='error-message'>{errors.name.message}</p>}
						</div>

						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input id='email' type='email' {...register('email', { required: 'Email is required' })} />
							{errors.email && <p className='error-message'>{errors.email.message}</p>}
						</div>
						<div className='form-group'>
							<label htmlFor='message'>Message</label>
							<textarea id='message' {...register('message', { required: 'Message is required' })}></textarea>
							{errors.message && <p className='error-message'>{errors.message.message}</p>}
						</div>
						{isSubmitting ? (
							<ClipLoader color='#242527' size={24} />
						) : (
							<button type='submit' disabled={isSubmitting}>
								Send
							</button>
						)}
					</form>
				)}
			</div>
			<div className='contact-info'>
				<h2 className='title'>Con</h2>
				<h2 className='title'>tact</h2>
				<p>
					<strong>Phone:</strong> +41 234 344 456
				</p>
				<p>
					<strong>Address:</strong> Bahnhofstrasse 54 Zürich
				</p>
				<div className='social social-contact'>
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
	)
}

export default Contact
