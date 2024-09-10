import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import Figure from '@/components/figure/Figure'

const title = 'Маркет'
const background =
	'linear-gradient(211deg, rgba(12, 119, 106, 0.70) 1.54%, #000 69.7%)'

const Market: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница маркет, здесь можно найти нашу фирменную продукцию и перейти на страницу товара'
			/>
			<PageHeading title={title} background={background} />
			<div className='flex flex-col items-center xl:grid xl:grid-cols-2 gap-10 relative mt-[15svh] md:mt-[29.5svh]'>
				<div>
					<Figure
						link='/mirror-one'
						src='/market-mirror-1.png'
						caption='Зеркало I'
					/>
				</div>
				<div>
					<Figure
						link='/mirror-two'
						src='/market-mirror-2.png'
						caption='Зеркало I'
					/>
				</div>

				<div style={{ gridColumn: 'span 2', justifySelf: 'center' }}>
					<Figure
						link='/merch'
						src='/market-merch-1.png'
						caption='Мерч (cropped gildan L)'
					/>
				</div>
			</div>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			layout: '' // Укажите нужный layout здесь
		}
	}
}

export default Market
