import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import ContactForm from '@/components/contactForm/ContactForm'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'
import Link from 'next/link'

const title = 'Контакты'
const background =
	'linear-gradient(211deg, rgba(85, 1, 1, 0.70) 1.54%, #000 69.7%)'

const Contacts: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Описание страницы контактов' />
			<PageHeading title={title} background={background} />
			<FadeIn className='relative z-10 cont mt-[32svh] text-2xl xl:text-3xl 2xl:text-4xl'>
				<p className='mb-10'>
					Тг: <Link href='t.me/guild.moscow'>t.me/guild.moscow</Link>
				</p>
				<p className='mb-10'>
					Вк: <Link href='vk.com/guild.moscow33'>vk.com/guild.moscow33</Link>
				</p>
				<p className='mb-10'>
					Инст: <Link href='@vasiliy.kozlovskiy'>@vasiliy.kozlovskiy</Link>
				</p>
				<p className='mb-10'>
					Тел.: <Link href='tel:+79031700586'>+79031700586</Link>
				</p>
				<p className='mb-10'>
					Почта:{' '}
					<Link href='mailto:guild.moscow@yandex.ru'>
						guild.moscow@yandex.ru
					</Link>
				</p>
			</FadeIn>
			<ModernBtn
				text='Связаться с нами'
				background={background}
				className='mt-[10svh] md:mt-0 xl:-mt-[19svh] z-10'
			/>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			layout: 'secondary' // Укажите нужный layout здесь
		}
	}
}

export default Contacts
