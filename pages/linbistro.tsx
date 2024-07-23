import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Linbistro'
const background = 'linear-gradient(211deg, #7B7B7B 1.54%, #000 69.7%);'

const Linbistro: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Linbistro' />
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

export default Linbistro
