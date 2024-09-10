import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Театральный проезд'
const background = 'linear-gradient(211deg, #451550 1.54%, #000 69.7%)'

const TheaterPassage: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Театральный проезд' />
			<PageHeading title={title} background={background} />
			<FadeIn className='relative mt-[15svh] md:mt-[29.5svh]'>
				<Image
					src='/t-passage-1.png'
					alt='Первая картинка из портфолио для Театрального проезда'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						Интерьерная роспись «Сад Гесперид» выполнена в реалистичной манере,
						в монохроме. Единственный цветовой акцент проекта — темпера цвета
						Капут-Мортуум. Роспись исполнена на дверцах шкафа, стилистика
						сочетает фото-реализм и модерн. Мотивом были выбраны ветки яблонь,
						своей гармонией напоминающие древнегреческий миф о садах Гесперид.
						!! поправить текст (заменить)
					</p>
				</div>
				<Image
					src='/t-passage-2.png'
					alt='Вторая картинка из портфолио для Театрального проезда'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/t-passage-3.png'
					alt='Третья картинка из портфолио для Театрального проезда'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<Image
					src='/t-passage-4.png'
					alt='Четвёрткая картинка из портфолио для Театрального проезда'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
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

export default TheaterPassage
