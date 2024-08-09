import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import FadeIn from '@/components/fadeIn/FadeIn'
import Image from 'next/image'

const title = 'Burberry'
const background = 'linear-gradient(211deg, #724817 1.54%, #000 69.7%)'

const Burberry: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница проекта Burberry шелкография' />
			<PageHeading
				title='Burberry шелкография'
				background={background}
				className='text-[30px] lg:text-[60px] xl:text-[90px] 3xl:text-[110px]'
			/>
			<FadeIn className='relative mt-[13svh] md:mt-[29.5svh]'>
				<Image
					src='/burberry-1.png'
					alt='Первая картинка из портфолио для Burberry шелкография'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-10'>
					<p>
						Шелкография под названием «Burberry 3740627 heritage; black
						silkscreen print «Renton in hangout» — является творческим проектом
						Василия Козловского 2022 года. Шелкография, печать на шёлке.
					</p>
				</div>
				<Image
					src='/burberry-2.png'
					alt='Вторая картинка из портфолио для Burberry шелкография'
					width={1900}
					height={900}
					className={'object-cover mb-4'}
				/>
				<Image
					src='/burberry-3.png'
					alt='Третья картинка из портфолио для Burberry шелкография'
					width={1900}
					height={900}
					className={'object-cover mb-10'}
				/>
				<div className='cont mb-4'>
					<p>
						Процесс печати шелкографии по сути своей очень фотогеничен и
						включает много занимательных этапов. На фото сверху представлен
						платок с рядом стоящей матрицей для печати “гончих”. А на фото снизу
						представлены эстампы, полученные в ходе спечатывания краски, на них
						виден рельеф ткани платка.
					</p>
				</div>
				<Image
					src='/burberry-4.png'
					alt='Четвёрткая картинка из портфолио для Burberry шелкография'
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

export default Burberry
