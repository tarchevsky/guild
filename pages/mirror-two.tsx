import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'
import ContactForm from '@/components/contactForm/ContactForm'

const title = 'Зеркало II'
const background =
	'linear-gradient(211deg, rgba(12, 119, 106, 0.70) 1.54%, #000 69.7%)'

const MirrorTwo: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница товара Зеркало II' />
			<ModernBtn
				tag='button'
				text='заказать'
				ariaLabel='Кнопка вызывающая форму обратной связи с попапе'
				background={background}
				modalContent={<ContactForm title={title} />}
			/>
			<PageHeading title={title} background={background} />
		</>
	)
}

export default MirrorTwo
