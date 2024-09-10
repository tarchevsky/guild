import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import FadeIn from '@/components/fadeIn/FadeIn'
import Image from 'next/image'

const title = 'Гончие псы'
const background = 'linear-gradient(211deg, #896C63 1.54%, #000 69.7%)'

const Hounds: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Гончие псы' />
			<PageHeading title={title} background={background} />
			<FadeIn className='relative mt-[15svh] md:mt-[29.5svh]'>
				<Image
					src='/hounds-1.png'
					alt='Первая картинка из портфолио для Гончие псы'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						«гончие псы (наложение)»
						<br />
						<br />
						шелкография/офорт, бумага
						<br />
						<br />
						300х100 см
						<br />
						<br />
						Творческий проект Василия Козловского по совмещению техник офорта и
						шелкографии. Изначально проект задумывался в качестве проекта
						кастома одежды, но перерос в самостоятельное произведение. В
						качестве основного приёма было выбрано «фотоувеличение» офорта
						(гравюры на металле) до размеров монументального произведения, чтобы
						выявить новые эстетические возможности и преимущества техники.
						Оригиналы гравюр для достижения эффекта были увеличены в 10 раз.
					</p>
				</div>
				<Image
					src='/hounds-2.png'
					alt='Вторая картинка из портфолио для Гончие псы'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/hounds-3.png'
					alt='Третья картинка из портфолио для Гончие псы'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>Оригиналы гравюр. 30х10см</p>
				</div>
				<Image
					src='/hounds-4.png'
					alt='Третья картинка из портфолио для Гончие псы'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>Процесс создания шелкографии (плёнки, фотовыводы).</p>
				</div>
				<Image
					src='/hounds-5.png'
					alt='Четвёрткая картинка из портфолио для Гончие псы'
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

export default Hounds
