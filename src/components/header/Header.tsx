import Link from 'next/link'
import cn from 'clsx'
import styles from './Header.module.scss'
import Burger from '@/components/burger/Burger'
import { useEffect, useState } from 'react'
import '@fontsource/allison'
import '@fontsource-variable/noto-serif'
import FadeIn from '@/components/fadeIn/FadeIn'

const Header = () => {
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
				'relative flex flex-col justify-center md:justify-between items-center py-[24px] sm:py-[66px] md:pt-[32px] md:pb-[18px] z-40'
			)}
		>
			<FadeIn className='block md:hidden'>
				<Link href='/' className={cn(styles.logo)}>
					гильдия.москва
				</Link>
			</FadeIn>
			<FadeIn className='hidden md:grid md:grid-cols-3 md:justify-between md:w-full'>
				<Link href='mailto:guild.moscow@yandex.ru'>guild.moscow@yandex.ru</Link>
				<Link href='/' className={cn(styles.logo, 'pt-[35px] pb-[25px]')}>
					гильдия.москва
				</Link>
				<Link href='tel:+79031700586' className='justify-self-end'>
					+7 903 170 05 86
				</Link>
			</FadeIn>
			<FadeIn className='w-full'>
				<nav
					className={cn(
						styles.nav,
						{ [styles.active]: isMenuActive },
						'fixed md:static z-10 w-full h-full md:w-full md:h-auto end-0 bottom-0 -translate-y-full md:translate-y-0 opacity-0 md:opacity-100 transition-all duration-300 ease-out'
					)}
				>
					<ul
						tabIndex={0}
						className='absolute md:static menu flex-nowrap gap-0 md:gap-5 md:menu-horizontal md:justify-between md:w-full start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:translate-x-0'
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

			<Burger toggleMenu={toggleMenu} className='md:hidden' />
		</header>
	)
}

export default Header
