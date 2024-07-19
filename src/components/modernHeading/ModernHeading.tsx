import FadeIn from '@/components/fadeIn/FadeIn'
import styles from './ModernHeading.module.scss'
import cn from 'clsx'

interface ModernHeadingProps {
	title: string
	subTitle: string
}

const ModernHeading = ({ title, subTitle }: ModernHeadingProps) => {
	return (
		<FadeIn className='cont flex flex-col md:flex-row justify-between items-end gap-20 mb-14 mt-[85svh] md:mt-[82svh] pt-8'>
			<h2
				className={cn(styles.h2)}
				dangerouslySetInnerHTML={{
					__html: title
				}}
			/>
			<p>{subTitle}</p>
		</FadeIn>
	)
}

export default ModernHeading
