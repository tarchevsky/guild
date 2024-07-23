import { NextPage } from 'next'
import Meta from '@/components/meta/Meta'
import PageHeading from '@/components/pageHeading/PageHeading'
import MapContent from '@/components/mapContent/MapContent'
import projectsData from '@/components/mapContent/projectsData'

const title = 'Проекты'
const background =
	'linear-gradient(211deg, rgba(128, 95, 66, 0.70) 1.59%, #000 71.81%)'

const Projects: NextPage = () => {
	return (
		<>
			<Meta title={title} metaDesc='Страница с нашими проектами, портфолио.' />
			<PageHeading title={title} background={background} className='h-[50vh]' />
			<div className='relative z-10 mt-[29.5svh] text-2xl xl:text-3xl 2xl:text-4xl'>
				<MapContent projectsData={projectsData} />
			</div>
		</>
	)
}

export default Projects
