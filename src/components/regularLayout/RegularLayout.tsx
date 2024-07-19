import FadeIn from '@/components/fadeIn/FadeIn'
import { LayoutProps } from '@/types'
import '@fontsource-variable/roboto-slab'
import '@fontsource/yeseva-one'
import HeaderMini from '@/components/headerMini/HeaderMini'
import Footer from '@/components/footer/Footer'

const RegularLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<div className='cont'>
				<HeaderMini />
			</div>

			{children}

			<FadeIn>
				<Footer />
			</FadeIn>
		</>
	)
}

export default RegularLayout
