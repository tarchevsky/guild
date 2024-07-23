import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Театральный проезд'
const background = 'linear-gradient(211deg, #451550 1.54%, #000 69.7%)'

const TheaterPassage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Театральный проезд' />
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

export default TheaterPassage
