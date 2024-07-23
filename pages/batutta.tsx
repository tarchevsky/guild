import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Batutta'
const background = 'linear-gradient(211deg, #4A2316 1.54%, #000 69.7%)'

const Batutta: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Batutta' />
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

export default Batutta
