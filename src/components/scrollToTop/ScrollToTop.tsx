import { useState, useEffect, FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const ScrollToTop: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handleScroll = (): void => {
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect((): (() => void) => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					transition={{ type: 'spring', stiffness: 150, damping: 20 }}
					className='fixed z-10 bottom-5 right-5'
				>
					<motion.button
						onClick={scrollToTop}
						className='bg-base-100'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						aria-label='Кнопка наверх страницы'
						style={{
							border: 'none',
							borderRadius: '50%',
							padding: '10px',
							cursor: 'pointer',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
						}}
					>
						<Image
							src={'/guild-icon-bg.png'}
							alt={''}
							width={40}
							height={40}
							className={'rounded-full'}
						/>
					</motion.button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ScrollToTop
