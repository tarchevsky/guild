import styles from './ModernBtn.module.scss'
import cn from 'clsx'
import FadeIn from '@/components/fadeIn/FadeIn'
import { ModalHandle } from '@/components/modal/modal.types'
import { useRef, ReactNode } from 'react'
import Modal from '@/components/modal/Modal'
import { ModernBtnProps } from '@/types'
import Link from 'next/link'

const ModernBtn = ({
	tag,
	text,
	href,
	ariaLabel,
	type,
	className,
	background,
	modalContent
}: ModernBtnProps) => {
	const modalRef = useRef<ModalHandle>(null)

	const handleButtonClick = () => {
		if (modalRef.current && modalContent) {
			modalRef.current.showModal()
		}
	}

	return (
		<FadeIn className='cont flex flex-col'>
			{(tag === 'button' && (
				<button
					type={type}
					aria-label={ariaLabel}
					className={cn(
						styles.btn,
						'btn self-start md:self-end w-[200px] h-[90px] md:w-[400px] md:h-[170px] 2xl:w-[580px] 2xl:h-[250px] text-sm md:text-xl 2xl:text-[40px]',
						className
					)}
					style={{ background }}
					dangerouslySetInnerHTML={{
						__html: text
					}}
					onClick={handleButtonClick}
				/>
			)) ||
				(tag === 'link' &&
					href && ( // Проверяем, что href определен
						<Link
							href={href}
							role='button'
							aria-label={ariaLabel}
							className={cn(
								styles.btn,
								'btn self-start md:self-end w-[200px] h-[90px] md:w-[400px] md:h-[170px] 2xl:w-[580px] 2xl:h-[250px] text-sm md:text-xl 2xl:text-[40px]',
								className
							)}
							style={{ background }}
							dangerouslySetInnerHTML={{
								__html: text
							}}
							onClick={handleButtonClick}
						/>
					))}
			{modalContent && (
				<Modal ref={modalRef}>
					{typeof modalContent === 'string' ? (
						<p>{modalContent}</p>
					) : (
						modalContent
					)}
				</Modal>
			)}
		</FadeIn>
	)
}

export default ModernBtn
