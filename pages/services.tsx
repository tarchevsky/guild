import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'

const title = 'Наши услуги'
const background =
	'linear-gradient(211deg, rgba(78, 84, 11, 0.63) 1.54%, #000 62.13%)'

const Services: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Здесь вы можете ознакомиться с нашими услугами'
			/>
			<ModernBtn text='связаться с нами' background={background} />
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

export default Services
