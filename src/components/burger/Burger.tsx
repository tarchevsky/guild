import styles from './Burger.module.scss'
import { useState } from 'react'
import cn from 'clsx'
import FadeIn from '@/components/fadeIn/FadeIn'

const Burger = ({ toggleMenu, className }: any) => {
	const [isActive, setIsActive] = useState(false)
	const toggleIsActive = () => {
		setIsActive(!isActive)

		toggleMenu()
	}

	return (
		<button
			className={cn(
				styles.burger,
				'block absolute w-[30px] h-[20px] -bottom-4 inset-x-1/2 -translate-x-1/2 cursor-pointer z-20',
				className
			)}
			aria-label='Open the menu'
			onClick={toggleIsActive}
		>
			<FadeIn
				className={`${styles.inner} ${isActive ? styles.active : ''} relative z-20 top-0 start-0 h-full`}
			>
				<div></div>
				<div></div>
				<div></div>
			</FadeIn>
		</button>
	)
}

export default Burger
