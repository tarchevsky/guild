import Link from 'next/link'
import cn from 'clsx'
import styles from './HeaderMini.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'
import '@fontsource/allison'
import '@fontsource-variable/noto-serif'
import FadeIn from '@/components/fadeIn/FadeIn'

const HeaderMini = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
	}

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuActive])

	return (
		<header
			className={cn(
				styles.header,
				'relative flex flex-col justify-center md:justify-between items-center pt-[35px] md:pt-[55px] pb-[45px] z-40'
			)}
		>
			<FadeIn className='block'>
				<Link href='/' className={cn(styles.logo)}>
					гильдия.москва
				</Link>
			</FadeIn>
			<FadeIn className='w-full'>
				<nav
					className={cn(
						styles.nav,
						{ [styles.active]: isMenuActive },
						'fixed z-10 w-full h-full end-0 bottom-0 -translate-y-full opacity-0 transition-all duration-300 ease-out'
					)}
				>
					<ul
						tabIndex={0}
						className='absolute menu flex-nowrap gap-0 md:gap-5 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '
					>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/services'
							>
								наши услуги
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/consultations'
							>
								Консультации
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/market'
							>
								Маркет
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/projects'
							>
								Проекты
							</Link>
						</li>
						<li
							className={cn(
								styles.item,
								'block text-center opacity-0 md:opacity-100'
							)}
						>
							<Link
								className='px-[10px] btn btn-ghost font-normal'
								href='/contacts'
							>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
			</FadeIn>

			<Burger toggleMenu={toggleMenu} className='bottom-0' />
		</header>
	)
}

export default HeaderMini
