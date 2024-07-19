import styles from './ModernBtn.module.scss'
import cn from 'clsx'
import FadeIn from '@/components/fadeIn/FadeIn'

interface ModernBtnProps {
	text: string
	className?: string
	background: string
}

const ModernBtn = ({ text, className, background }: ModernBtnProps) => {
	return (
		<FadeIn className='cont flex flex-col'>
			<button
				className={cn(
					styles.btn,
					'btn self-end w-[400px] h-[170px] md:w-[580px] md:h-[250px] text-xl md:text-[40px]',
					className
				)}
				style={{ background }}
				dangerouslySetInnerHTML={{
					__html: text
				}}
			/>
		</FadeIn>
	)
}

export default ModernBtn
