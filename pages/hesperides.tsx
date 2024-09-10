import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Сад гесперид'
const background = 'linear-gradient(211deg, #6A4C53 1.54%, #000 69.7%)'

const Hesperides: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Сад гесперид' />
			<PageHeading title={title} background={background} />
			<FadeIn className='relative mt-[15svh] md:mt-[29.5svh]'>
				<Image
					src='/hesperides-1.png'
					alt='Первая картинка из портфолио для Hesperides'
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
					</p>
				</div>
				<Image
					src='/hesperides-2.png'
					alt='Вторая картинка из портфолио для Hesperides'
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

export default Hesperides
