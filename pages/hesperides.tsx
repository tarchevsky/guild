import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Сад гесперид'
const background = 'linear-gradient(211deg, #6A4C53 1.54%, #000 69.7%)'

const Hesperides: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Сад гесперид' />
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

export default Hesperides
