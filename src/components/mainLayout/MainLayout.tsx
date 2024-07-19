import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FadeIn from '@/components/fadeIn/FadeIn'
import { LayoutProps } from '@/types'
import '@fontsource-variable/roboto-slab'
import '@fontsource/yeseva-one'

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<div className='cont'>
				<Header />
			</div>

			{children}

			<FadeIn>
				<Footer />
			</FadeIn>
		</>
	)
}

export default MainLayout
