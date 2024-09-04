import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'
import FadeIn from '@/components/fadeIn/FadeIn'

const title = 'Наши услуги'
const background =
	'linear-gradient(211deg, rgba(78, 84, 11, 0.63) 1.54%, #000 62.13%)'

const Services: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Здесь вы можете ознакомиться с нашими услугами'
			/>
			<PageHeading title={title} background={background} />
			<FadeIn className='relative z-10 cont mt-[25svh] sm:mt-[13svh] md:mt-[29.5svh] text-2xl xl:text-3xl 2xl:text-4xl'>
				<ul className='flex flex-col gap-y-5 list-disc pl-7 pb-10'>
					<li>
						Дизайн-проект.
						<p className='-ml-7 my-8'>
							Разработка проекта оформления помещения с нуля. Сотрудничество с
							архитекторами позволяет применять уникальные технические решения,
							а наши художники и декораторы создадут уникальные произведения для
							вашего интерьера.
						</p>
					</li>
					<li>
						Авторский надзор.
						<p className='-ml-7 my-8'>
							Эксперты студии произведут контроль работ, компетенции сотрудников
							позволяют корректно и эффективно проследить как за работой на
							объекте, так и произвести инспекцию на выезде у контрагентов.
							Также при необходимости произвести кризис-менеджмент.
						</p>
					</li>
					<li>
						Доработка проекта.
						<p className='-ml-7 my-8'>
							Мы занимаемся также доработкой проекта и устранением ошибок
							предыдущих исполнителей. Точечная и скрупулёзная работа наших
							дизайнеров и художников – поможет обыграть и устранить любые
							недостатки, дополнить и доработать задумку заказчика.
						</p>
					</li>
					<li>
						Готовые художественные решения.
						<p className='-ml-7 my-8'>
							У нашей студии можно заказать художественное обрамление для уже
							готового интерьера. Для заказа доступны работы широкого спектра
							техник: живопись, скульптура, графика, авторские изделия.
						</p>
					</li>
					<li>
						Озеленение и флористика (совместно с «Космея»).
						<p className='-ml-7 my-8'>
							Сотрудники студии давно сотрудничают со студией декора и
							флористики «Космея». Мы можем озеленить Ваше помещение, будь то
							офис, ресторан, холл в Торговом Центре или частная квартира. Также
							для заказа доступна поставка свежих цветов, оформление мероприятий
							и праздников.{' '}
						</p>
					</li>
					<li>
						Прочие услуги.
						<p className='-ml-7 my-8'>
							Хотя основной профиль нашей студии – работа с интерьерами и
							пространствами, на этом он не ограничивается. Студия сотрудничает
							с лучшими профессионалами художественной сферы, что позволяет по
							запросу предоставлять много сторонних услуг, связанных с
							искусством, дизайном и авторскими решениями. Среди них:
						</p>
					</li>
					<ul className='flex flex-col gap-y-5 list-disc pl-7 pb-10'>
						<li>
							Авторская типографская вёрстка, создание уникальных книг,
							каталогов, брошюр, типографской продукции (печатной инфраструктуры
							проекта)
						</li>
						<li>
							Создании капсульных линеек одежды, мерча. Помощь в производстве.
							Создание и разработка униформы сотрудников.
						</li>
						<li>
							Авторская веб-верстка. Создание уникальных лендингов, сайтов,
							цифровой продукции. Помощь в создании цифровой инфраструктуры
							проекта.
						</li>
					</ul>
				</ul>
			</FadeIn>
			<ModernBtn
				tag='link'
				text='связаться с нами'
				href='/contacts'
				ariaLabel='Кнопка перехода на страницу Контакты'
				background={background}
			/>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			layout: 'secondary' // Укажите нужный layout здесь
		}
	}
}

export default Services
