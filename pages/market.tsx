import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const Market: NextPage = () => {
	return (
		<>
			<Meta
				title='Маркет'
				metaDesc='Страница маркет, здесь можно найти нашу фирменную продукцию и перейти на страницу товара'
			/>
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold mt-20`}>Маркет</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default Market
