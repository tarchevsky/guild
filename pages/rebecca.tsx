import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Rebecca'
const background = 'linear-gradient(211deg, #896C63 1.54%, #000 69.7%)'

const Rebecca: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Rebecca' />
			<PageHeading title={title} background={background} />
			<FadeIn className='relative mt-[13svh] md:mt-[29.5svh]'>
				<Image
					src='/rebecca-1.png'
					alt='Первая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						Скульптурное оформление ресторана Rebecca на Ефремова включает в
						себя декоративное панно с изображением артишока. Владельцами в
						качестве символа заведения был выбран артишок, именно его в качестве
						скульптуры-обманки мы и разместили в самом просматриваемой точке
						ресторана. Задача была сложной как с художественной точки зрения
						(стилистически попасть в общую эстетику), так и с инженерной
						(правильно рассчитать вес изделия и смонтировать под потолком 6м).
						Можем назвать этот с виду не такой большой проект одним из самых
						сложных в нашей практике. «Артишок» ~ 170 см
					</p>
				</div>
				<Image
					src='/rebecca-2.png'
					alt='Четвёрткая картинка из портфолио для Linbistro'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/rebecca-3.png'
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

export default Rebecca
