import '@/assets/styles/globals.css'
import '@/assets/styles/swiper.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/mainLayout/MainLayout'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/pageTransition/PageTransition'
import SecondaryLayout from '@/components/secondaryLayout/SecondaryLayout'
import RegularLayout from '@/components/regularLayout/RegularLayout'
import Metrika from '@/components/metrika/Metrika'
import ScrollToTop from '@/components/scrollToTop/ScrollToTop'

const yId = process.env.NEXT_PUBLIC_YID // id яндекс метрики

export default function App({ Component, pageProps, router }: AppProps) {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null // Или можно вернуть загрузочный экран, пока клиент не инициализирован
	}

	const Layout =
		pageProps.layout === 'main'
			? MainLayout
			: pageProps.layout === 'secondary'
				? SecondaryLayout
				: RegularLayout

	return (
		<>
			<AnimatePresence>
				<PageTransition key={router.route}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PageTransition>
			</AnimatePresence>
			<ScrollToTop />
			{yId ? <Metrika yId={yId} /> : null}
		</>
	)
}
