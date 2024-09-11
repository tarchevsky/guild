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
						Театральный проезд - эта роспись была выполнена для ресторана в
						историческом центре Москвы, в Театральном проезде. В качестве
						ориентира была выбрана эстетика «графских развалин» и подмосковных
						заброшенных усадеб. В конкретном случае была выбрана реальная
						входная группа с колоннами усадьбы Ярополец Гончаровых. <br />
						Размер росписи ~ 3х6 метра
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
