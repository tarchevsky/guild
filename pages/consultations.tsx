import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'
import FadeIn from '@/components/fadeIn/FadeIn'
import ContactForm from '@/components/contactForm/ContactForm'

const title = 'Консультации'
const background =
	'linear-gradient(211deg, rgba(80, 39, 0, 0.70) 1.59%, #000 71.81%)'

const ConsultationsPage: NextPage = () => {
	return (
		<>
			<Meta
				title={title}
				metaDesc='Страница про консультации. Здесь мы описываем алгоритм обращения к нам и получения консультаций'
			/>
			<PageHeading title={title} background={background} />
			<FadeIn className='relative z-10 cont mt-[32svh] text-2xl xl:text-3xl 2xl:text-4xl xl:max-w-5xl'>
				<p className='mb-10'>
					Мы предоставляем услуги консультаций. Наши сотрудники готовы ответить
					на любые Ваши вопросы, связанные с искусством и дизайном
				</p>
				<ul className='flex flex-col gap-y-5 list-disc pl-7 pb-10'>
					<li>Анализ и корректировка проекта с художественной точки зрения.</li>
					<li>Консультация по подбору и оценке объектов искусства</li>
					<li>Обеспечение контакта клиента с галлереями и арт-диллерами.</li>
					<li>Помощь в разработке концепции проекта.</li>
					<li>Консультация по подбору мебели и элементов декора интерьера.</li>
				</ul>
				<p className='mb-10'>
					Первый ознакомительный час консультации за наш счёт. Расценки
					высылаются по запросу.
				</p>
			</FadeIn>
			<ModernBtn
				tag='button'
				text='заказать <br />консультацию'
				ariaLabel='Кнопка вызова модального окна с формой обратной связи'
				background={background}
				className='my-[5svh] xl:-mt-[15svh] z-10'
				modalContent={<ContactForm />}
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

export default ConsultationsPage
