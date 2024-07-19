import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const Services: NextPage = () => {
	return (
		<>
			<Meta
				title='Наши услуги'
				metaDesc='Здесь вы можете ознакомиться с нашими услугами'
			/>
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold mt-20`}>Наши услуги</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default Services
