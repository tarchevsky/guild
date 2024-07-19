import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import ModernBtn from '@/components/modernBtn/ModernBtn'

const title = 'Зеркало I'
const background =
	'linear-gradient(211deg, rgba(12, 119, 106, 0.70) 1.54%, #000 69.7%)'

const MirrorOne: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница товара Зеркало I' />
			<ModernBtn text='заказать' background={background} />
			<PageHeading title={title} background={background} />
		</>
	)
}

export default MirrorOne
