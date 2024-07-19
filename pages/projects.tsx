import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const Projects: NextPage = () => {
	return (
		<>
			<Meta
				title='Проекты'
				metaDesc='Страница с нашими проектами, портфолио.'
			/>
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold mt-20`}>Проекты</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default Projects
