import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

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
		</>
	)
}

export default Services
