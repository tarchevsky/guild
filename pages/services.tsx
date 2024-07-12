import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const ServicesPage: NextPage = () => {
	return (
		<>
			<Meta title='Наши услуги' metaDesc='Дескрипшен страницы' />
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold`}>Наши услуги</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default ServicesPage
