import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Linbistro'
const background = ''

const Linbistro: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Linbistro' />
			<PageHeading title={title} background={background} />
			<FadeIn className='mt-[13svh] md:mt-[29.5svh]'>
				<Image
					src='/linbistro-1.png'
					alt='Первая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						Оформление ресторана Linbistro было выполнено совместно с лучшими
						скульпторами художественных мастерских Москвы. Оформление включает в
						себя серию декоративных панно “Свитера”, а также декорированный
						античный портик.
					</p>
				</div>
				<Image
					src='/linbistro-2.png'
					alt='Вторая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/linbistro-3.png'
					alt='Третья картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p className='mb-4'>
						Задача была в том, чтобы наполнить уютом пространство, посредством
						внедрения скульптурных элементов. Панно со свитерами были выполнены
						с использованием настоящих свитеров, отлитых в гипсе, имитируя тем
						самым эффект “помпейской пустоты”, застывшего, окаменевшего времени.
					</p>
					<p>
						Портик над зеркалом служит другой цели. Стоит уточнить, что ресторан
						находится в историческом центре Москвы, большие окна сильно
						связывают интерьер и экстерьер. В таком случае элемент декора уже
						отсылает скорее к экстерьеру, чем к интерьеру.
					</p>
				</div>
				<Image
					src='/linbistro-4.png'
					alt='Четвёрткая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
			</FadeIn>
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

export default Linbistro
