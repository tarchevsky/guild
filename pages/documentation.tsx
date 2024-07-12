import { NextPage } from 'next'
import FadeIn from '@/components/fadeIn/FadeIn'
import Meta from '@/components/meta/Meta'

const Documentation: NextPage = () => {
	return (
		<>
			<Meta
				title='Документация'
				metaDesc='Страница документации и о том что и для чего'
			/>
			<FadeIn className='cont'>
				<main>
					<h1 className={`text-4xl font-bold mt-20`}>Документация</h1>
				</main>
			</FadeIn>
		</>
	)
}

export default Documentation
