import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Batutta'
const background = 'linear-gradient(211deg, #4A2316 1.54%, #000 69.7%)'

const Batutta: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Batutta' />
			<PageHeading title={title} background={background} />
			<FadeIn className='relative mt-[13svh] md:mt-[29.5svh]'>
				<Image
					src='/batutta-1.png'
					alt='Первая картинка из портфолио для Batutta'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						Натюрморт маслом для мясного ресторана Batutta на Новокузнецкой —
						хороший пример нашего подхода к художественным эстетикам в
						интерьере. Картина маслом — в этом случае несет чисто декоративную
						роль и выполнена отчасти карикатурно реалистично, при исполнении
						одним из референсов был стиль Пин-ап, используемый в американской
						рекламной продукции. «Натюрморт» 110х90
					</p>
				</div>
				<Image
					src='/batutta-2.png'
					alt='Вторая картинка из портфолио для Batutta'
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

export default Batutta
