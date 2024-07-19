import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const ConsultationsPage: NextPage = () => {
	return (
		<>
			<Meta
				title='Консультации'
				metaDesc='Страница про консультации. Здесь мы описываем алгоритм обращения к нам и получения консультаций'
			/>
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold mt-20`}>Консультации</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default ConsultationsPage
