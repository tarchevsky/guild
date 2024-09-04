import FadeIn from '@/components/fadeIn/FadeIn'
import styles from './ModernHeading.module.scss'
import cn from 'clsx'

interface ModernHeadingProps {
	title: string
	subTitle: string
}

const ModernHeading = ({ title, subTitle }: ModernHeadingProps) => {
	return (
		<FadeIn className='cont relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-20 mb-14 mt-[120svh] md:mt-[92svh] pt-8 md:mt-[82svh]'>
			<h2
				className={cn(styles.h2, 'text-2xl md:text-4xl')}
				dangerouslySetInnerHTML={{
					__html: title
				}}
			/>
			<p>{subTitle}</p>
		</FadeIn>
	)
}

export default ModernHeading
