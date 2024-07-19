import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Консультации'
const background =
	'linear-gradient(211deg, rgba(78, 84, 11, 0.63) 1.54%, #000 62.13%)'

const ConsultationsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про консультации. Здесь мы описываем алгоритм обращения к нам и получения консультаций'
			/>
			<PageHeading title={title} background={background} />
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

export default ConsultationsPage
