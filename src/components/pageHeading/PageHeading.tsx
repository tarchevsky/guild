import FadeIn from '@/components/fadeIn/FadeIn'
import cn from 'clsx'

interface PageHeadingProps {
	title: string
	titleMob?: string
	background: string
	className?: string
}

const PageHeading = ({
	title,
	background,
	className,
	titleMob
}: PageHeadingProps) => {
	return (
		<FadeIn
			className={cn('cont absolute top-0 left-0 w-full h-[100svh]', className)}
			style={{ background: `${background}` }}
		>
			<main>
				<h1
					className={cn(
						`mt-[20vh] md:mt-[30svh] text-[54px] xl:text-[110px] font-normal uppercase text-right ${titleMob ? 'hidden mb:block' : null}`,
						className
					)}
				>
					{title}
				</h1>

				{titleMob ? (
					<h1
						className={cn(
							'block md:hidden mt-[20vh] md:mt-[30svh] text-[54px] xl:text-[110px] font-normal uppercase text-right',
							className
						)}
						dangerouslySetInnerHTML={{
							__html: titleMob
						}}
					/>
				) : null}
			</main>
		</FadeIn>
	)
}

export default PageHeading
