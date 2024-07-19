import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Маркет'
const background =
	'linear-gradient(211deg, rgba(78, 84, 11, 0.63) 1.54%, #000 62.13%)'

const Market: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница маркет, здесь можно найти нашу фирменную продукцию и перейти на страницу товара'
			/>
			<PageHeading title={title} background={background} />
		</>
	)
}

export default Market
