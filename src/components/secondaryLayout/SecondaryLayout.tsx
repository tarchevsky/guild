import FadeIn from '@/components/fadeIn/FadeIn'
import { LayoutProps } from '@/types'
import '@fontsource-variable/roboto-slab'
import '@fontsource/yeseva-one'
import FooterEmpty from '@/components/footerEmpty/FooterEmpty'
import HeaderMini from '@/components/headerMini/HeaderMini'

const SecondaryLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<div className='cont'>
				<HeaderMini />
			</div>

			{children}

			<FadeIn>
				<FooterEmpty />
			</FadeIn>
		</>
	)
}

export default SecondaryLayout
