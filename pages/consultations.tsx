import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'

const title = 'Консультации'
const background =
	'linear-gradient(211deg, rgba(80, 39, 0, 0.70) 1.59%, #000 71.81%)'

const ConsultationsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про консультации. Здесь мы описываем алгоритм обращения к нам и получения консультаций'
			/>
			<ModernBtn text='заказать <br />консультацию' background={background} />
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
