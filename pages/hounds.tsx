import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Гончие псы'
const background = 'linear-gradient(211deg, #896C63 1.54%, #000 69.7%)'

const Hounds: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Гончие псы' />
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

export default Hounds
