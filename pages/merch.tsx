import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'
import ContactForm from '@/components/contactForm/ContactForm'
import Figure from '@/components/figure/Figure'

const title = 'Мерч'
const background =
	'linear-gradient(211deg, rgba(12, 119, 106, 0.70) 1.54%, #000 69.7%)'

const Merch: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница товара Мерч' />
			<PageHeading title={title} background={background} />
			<div className='relative mt-[15svh] xl:mt-[25svh] flex flex-col items-center'>
				<div className='max-w-6xl'>
					<Figure
						src='/merch-1.png'
						caption='Мерч'
						captionStyles='cont md:p-0 text-start'
						imageStyles='md:h-[1083px] md:w-[1083px]'
					/>
					<div className='cont md:p-0'>
						Gildan hammer L / cropped
						<br />
						Шелкография
						<br />
						Мерчендайзинг нашей студии, авторская печать.
						<br />
						3300 р
					</div>
				</div>
			</div>
			<ModernBtn
				tag='button'
				text='заказать'
				ariaLabel='Кнопка вызова форма обратной связи в модальном окне'
				background={background}
				modalContent={<ContactForm title={title} />}
				className={'mt-16'}
			/>
		</>
	)
}

export default Merch
