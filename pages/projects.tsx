import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'

const title = 'Проекты'
const background =
	'linear-gradient(211deg, rgba(128, 95, 66, 0.70) 1.59%, #000 71.81%)'

const Projects: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница с нашими проектами, портфолио.' />
			<PageHeading title={title} background={background} />
		</>
	)
}

export default Projects
