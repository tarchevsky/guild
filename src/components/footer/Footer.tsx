import Link from 'next/link'
import '@fontsource/allison'
import cn from 'clsx'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className='footer footer-center p-10 gap-y-1'>
			<div className={cn(styles.logo)}>guild.moscow</div>
			<div>Дополняем и совершенствуем интерьеры.</div>
			<Link href='tel:+79031700586' className='text-3xl py-4'>
				7 (903) 170 05 86
			</Link>
			<Link href='mailto:guild.moscow@yandex.ru'>guild.moscow@yandex.ru</Link>
			<div>Москва, Проспект Мира 68</div>
			<aside>
				<p>Copyright © 2024 - разработкаТарчевский И.А.</p>
			</aside>
		</footer>
	)
}

export default Footer
