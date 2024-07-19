import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import ContactForm from '@/components/contactForm/ContactForm'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Контакты'
const background =
	'linear-gradient(211deg, rgba(85, 1, 1, 0.70) 1.54%, #000 69.7%)'

const ContactsPage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Описание страницы контактов' />
			<PageHeading title={title} background={background} />
			<FadeIn className='cont mb-40'>
				<ContactForm />
			</FadeIn>
		</>
	)
}

export default ContactsPage
