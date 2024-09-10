import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'
import ContactForm from '@/components/contactForm/ContactForm'
import Figure from '@/components/figure/Figure'

const title = 'Зеркало II'
const background =
	'linear-gradient(211deg, rgba(12, 119, 106, 0.70) 1.54%, #000 69.7%)'

const MirrorTwo: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница товара Зеркало II' />
			<PageHeading title={title} background={background} />
			<div className='relative mt-[15svh] xl:mt-[25svh] flex flex-col items-center'>
				<div className='max-w-6xl'>
					<Figure
						src='/mirror-1.png'
						caption='Зеркало II'
						captionStyles='cont md:p-0 text-start'
						imageStyles='md:h-[1083px] md:w-[1083px]'
					/>
					<div className='cont md:p-0'>
						70х50 см
						<br />
						Интерьерное зеркало для спальни или гостиной. Техника исполнения —
						шелкография.
						<br />В качестве основы для принта было использовано фото: Robert
						Doisneau // Dance - Régine Chopinot à la Villette 1990
						<br />
						10.000 р
					</div>
				</div>
			</div>
			<ModernBtn
				tag='button'
				text='заказать'
				ariaLabel='Кнопка вызывающая форму обратной связи с попапе'
				background={background}
				modalContent={<ContactForm title={title} />}
				className='mt-10'
			/>
		</>
	)
}

export default MirrorTwo
