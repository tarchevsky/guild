import { NextPage } from 'next'
import Hero from '@/components/hero/Hero'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Image from 'next/image'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta title='Главная' metaDesc='Описание страницы' />
			<Hero
				src='/main-img.png'
				alt='Альт картинки'
				title='Искусство <br>в интерьер'
			/>
			<FadeIn className='cont flex flex-col md:flex-row justify-between items-end gap-20 mb-14 mt-[85svh] md:mt-[78svh] pt-8'>
				<h2 className='text-3xl font-extrabold'>
					Студия художественного дизайна <br></br>guild.moscow
				</h2>
				<p>“Ester bar” Большая Никитская 22/2</p>
			</FadeIn>
			<FadeIn className='cont pb-8'>
				<p>
					Студия художественного дизайна guild.moscow – сочетание искусства и
					дизайна. Наши специалисты изучат ваш объект, и подберут художественное
					дополнение. У нас вы можете заказать разработку уникального
					художественного оформления. В разделе “Галерея” Вы можете выбрать из
					готовых художественных решений.
				</p>

				<p>
					Также мы предоставляем консультации по тематике нашей фирмы, мы можем
					скорректировать уже готовый дизайн-проект, предоставить стилистические
					рекомендации и сделать тематические подборки.
				</p>
			</FadeIn>
			<FadeIn>
				<Image
					src='/ester-1.png'
					alt='Ester bar'
					width={1900}
					height={900}
					className='h-[100svh] object-cover'
				/>
			</FadeIn>
			<FadeIn className='cont py-8'>
				<p>
					Каждый проект в нашей студии выполняется с учетом специфики проекта,
					мы предоставляем услуги как частным клиентам, так и студиям,
					занимающимся архитектурным проектированием. Архитектурные фирмы
					обращаются к нам, потому что мы можем привнести уникальность в
					изначальный проект, увеличить чек общей сметы, а соответственно и
					выручку. Частных клиентов мы можем заинтересовать комплексным
					исполнением проекта от начала до конца, взяв на себя весь технический
					процесс. <br />
					Отработанная система поставщиков и подрядчиков позволяет осуществлять
					проекты в кратчайшие сроки, а используемые в производстве материалы –
					ипортозаместить декоративные элементы. Скорость изготовления, цена на
					услуги и качество готовых проектов – выгодно отличают нашу фирму и
					делают её услуги уникальными.
				</p>
			</FadeIn>
			<FadeIn>
				<Image
					src='/ester-2.png'
					alt='Ester bar 2'
					width={1900}
					height={900}
					className='h-[100svh] object-cover'
				/>
			</FadeIn>
			<FadeIn className='cont pt-8'>
				<p>
					Мы владеем полным набором художественных техник, которые включают:
					живопись, графику, скульптуру, самые современные цифровые технологии и
					проектирование. Мы можем осуществить практически любую задумку
					заказчика. Примеры применения опыта и технологий нашей фирмы Вы можете
					увидеть в портфолио.
				</p>
				<h4 className='uppercase text-[54px] md:text-[110px]'>Проекты</h4>
			</FadeIn>
			<div className='relative w-full py-8'>
				<Image
					src='/pattern.png'
					alt='Pattern'
					width={1900}
					height={900}
					className='absolute w-full h-full left-0 top-0 object-cover -z-10'
				/>
				<FadeIn className='cont flex flex-col justify-between items-center'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 w-full'>
						<Image
							src='/project-1.png'
							alt='Project 1'
							width={600}
							height={450}
							className='w-full h-full'
						/>
						<Image
							src='/project-2.png'
							alt='Project 2'
							width={600}
							height={450}
							className='w-full h-full'
						/>
						<Image
							src='/project-3.png'
							alt='Project 3'
							width={600}
							height={450}
							className='w-full h-full'
						/>
						<Image
							src='/project-4.png'
							alt='Project 4'
							width={600}
							height={450}
							className='w-full h-full'
						/>
					</div>
					<button className='btn btn-outline btn-xs sm:btn-sm md:btn-lg text-center'>
						Смотреть все проекты
					</button>
				</FadeIn>
			</div>
		</>
	)
}

export default HomePage
