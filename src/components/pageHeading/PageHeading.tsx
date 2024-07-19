import FadeIn from '@/components/fadeIn/FadeIn'

interface PageHeadingProps {
	title: string
	background: string
}

const PageHeading = ({ title, background }: PageHeadingProps) => {
	return (
		<FadeIn
			className='cont absolute top-0 left-0 w-full h-[100svh]'
			style={{ background: `${background}` }}
		>
			<main>
				<h1 className='text-[110px] font-normal uppercase text-right mt-[30svh]'>
					{title}
				</h1>
			</main>
		</FadeIn>
	)
}

export default PageHeading
