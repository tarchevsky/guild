import styles from './ModernBtn.module.scss'
import cn from 'clsx'

interface ModernBtnProps {
	text: string
	className?: string
	background: string
}

const ModernBtn = ({ text, className, background }: ModernBtnProps) => {
	return (
		<button
			className={cn(styles.btn, 'btn text-right self-end', className)}
			style={{ background }}
		>
			{text}
		</button>
	)
}

export default ModernBtn
