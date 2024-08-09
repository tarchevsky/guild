import Link from 'next/link'
import '@fontsource/allison'
import cn from 'clsx'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 gap-y-1'>
			<Link
				href='/'
				className={cn(styles.logo, 'md:mb-20 text-3xl md:text-[48px]')}
			>
				гильдия.москва
			</Link>
			<div className='md:text-xl'>Художественный дизайн</div>
			<Link href='tel:+79031700586' className='text-3xl py-4'>
				+7 903 170 05 86
			</Link>
			<Link href='mailto:guild.moscow@yandex.ru' className='md:text-xl'>
				guild.moscow@yandex.ru
			</Link>
			<div className='md:text-xl'>Москва, Проспект Мира 68</div>
			<aside>
				<p>Copyright © 2024 - разработка tezis.digital</p>
			</aside>
		</footer>
	)
}

export default Footer
