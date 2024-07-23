import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Burberry'
const background = 'linear-gradient(211deg, #724817 1.54%, #000 69.7%)'

const Burberry: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Burberry' />
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

export default Burberry
