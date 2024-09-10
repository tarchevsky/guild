import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Ester bar'
const background = 'black'

const EsterBar: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Ester bar' />
			<PageHeading title={title} background={background} />
			<FadeIn className='relative mt-[15svh] md:mt-[29.5svh]'>
				<Image
					src='/ester-bar-1.png'
					alt='Первая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p className='mb-4'>
						Художественное оформление бара Ester на большой Никитской включает в
						себя дизайнерскую роспись, серию декоративных панно и трафаретна
						стене. Бар своим меню и эстетикой отсылает к Тель-Аивскому
						стрит-фуду и барам, поэтому во всех элементах хотелось передать
						атмосферу вечерней улицы южного города. Для достижения этого
						эффекта, в оформлении было использовано много стрит-арт приёмов и
						эстетики.
					</p>
					<p>
						Декоративные панно «Белый город». Серия декоративных панно,
						посвященных Тель-Авивской уличной культуре. Исполнены панно в
						двухслойном формате. Основа (черно-белое изображение) представляет
						собой цифровую печать. Изображение для печати — скан плёнки из
						исторического фото-архива мэрии города, 1948 года. Лицевая часть
						(стекло) представляет собой аэрографию с различными эффектами,
						трафаретами и шрифтами.
					</p>
				</div>
				<Image
					src='/ester-bar-2.png'
					alt='Вторая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/ester-bar-3.png'
					alt='Третья картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						Трафарет на фигурной стене — самый простой, но при этом самый
						эффектный элемент декора. Представляет собой надпись на иврите,
						посвященную барной культуре города.
					</p>
				</div>
				<Image
					src='/ester-bar-4.png'
					alt='Четвёрткая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/ester-bar-5.png'
					alt='Третья картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						Роспись «Делон». <br />
						Монохромная роспись с репродукцией архивной фотографии Ален Делона,
						выполненная на кирпиче, размером чуть выше человеческого роста.
					</p>
				</div>
				<Image
					src='/ester-bar-6.png'
					alt='Четвёрткая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/ester-bar-7.png'
					alt='Четвёрткая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/ester-bar-8.png'
					alt='Третья картинка из портфолио для Linbistro'
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

export default EsterBar
