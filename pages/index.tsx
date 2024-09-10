import { NextPage } from 'next'
import Hero from '@/components/hero/Hero'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'
import Image from 'next/image'
import ModernHeading from '@/components/modernHeading/ModernHeading'
import Button from '@/components/button/Button'
import ModernBtn from '@/components/modernBtn/ModernBtn'

const title = 'Главная'
const metaDesc = 'Описание страницы'

const HomePage: NextPage = () => {
	return (
		<>
			<Meta
				title={`${title} страница сайта guild.moscow`}
				metaDesc={metaDesc}
			/>
			<Hero
				src='/main-img.png'
				srcMob='/main-img-mob.png'
				alt='Главная картинка на сайте guild.moscow'
				altMob='Главная картинка на сайте guild.moscow - мобильная версия'
				title='Искусство <br>в интерьер'
				titleMob='Иску<br>сство <br>в <br>инте<br>рьер'
			/>
			<ModernBtn
				tag='link'
				href='/projects'
				ariaLabel={'Переход на страницу проектов'}
				background={'none'}
				border={'2px solid #fff'}
				text='Проекты'
				className='flex md:hidden absolute z-10 -bottom-10 right-6 w-[110px] h-[30px] text-white'
			/>
			<ModernBtn
				tag='link'
				href='/market'
				ariaLabel={'Переход на страницу маркета'}
				background={'none'}
				border={'2px solid #fff'}
				text='Проекты'
				className='flex md:hidden absolute z-10 -bottom-44 left-6 w-[110px] h-[30px] text-white'
			/>
			<ModernHeading
				title='Студия художественного дизайна <br /><span style="text-transform: uppercase;">гильдия.москва</span>'
				subTitle='“Ester bar” Большая Никитская 22/2'
			/>

			<FadeIn className='cont pb-8'>
				<p>
					Студия художественного дизайна guild.moscow – сочетание искусства и
					дизайна. Наши специалисты изучат ваш объект, и подберут художественное
					дополнение. У нас вы можете заказать разработку уникального
					художественного оформления. В разделе “Галерея” Вы можете выбрать из
					готовых художественных решений.
					<br />
					<br />
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
					<Button
						tag='link'
						href='/projects'
						ariaLabel='Кнопка на страницу Проекты'
						text='Смотреть все проекты'
						className='btn-outline btn-xs sm:btn-sm md:btn-lg text-center'
					/>
				</FadeIn>
			</div>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			layout: 'main' // Укажите нужный layout здесь
		}
	}
}

export default HomePage
