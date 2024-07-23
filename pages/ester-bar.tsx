import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Ester bar'
const background = 'black'

const EsterBar: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Ester bar' />
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

export default EsterBar
