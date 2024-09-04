import { HeroProps } from '@/types'
import Image from 'next/image'
import FadeIn from '@/components/fadeIn/FadeIn'
import Link from 'next/link'

const Hero = ({
	title,
	titleMob,
	buttonText,
	alt,
	subtitle,
	src
}: HeroProps) => {
	return (
		<main className='hero absolute left-0 top-0 w-full h-[150svh] md:h-[100svh] z-10 mb-0'>
			<FadeIn className='hero-content relative h-full w-full max-w-full p-0'>
				<Image
					src={src}
					alt={alt}
					width={1200}
					height={600}
					className='absolute top-0 left-0 w-full h-full object-cover object-center'
				/>
				<h1
					className='hidden md:block absolute top-1/2 -translate-y-1/2 md:right-20 cont md:p-0 font-normal md:leading-[120px] uppercase text-[54px] xl:text-[110px]'
					dangerouslySetInnerHTML={{
						__html: title
					}}
				/>
				<h1
					className='block md:hidden absolute top-[25vh] right-4 p-0 font-normal leading-tight uppercase text-[60px]'
					dangerouslySetInnerHTML={{
						__html: titleMob
					}}
				/>
				{subtitle ? <p>{subtitle}</p> : null}
				{buttonText ? (
					<button className='relative btn btn-primary btn-lg mt-3'>
						{buttonText}
					</button>
				) : null}
				<Link
					href='mailto:guild.moscow@yandex.ru'
					className='hidden md:block absolute bottom-6 left-2 cont text-sm md:hidden'
				>
					guild.moscow@yandex.ru
				</Link>
				<Link
					href='tel:+79031700586'
					className='hidden md:block absolute bottom-6 right-2 cont text-sm md:hidden'
				>
					7 (903) 170 05 86
				</Link>
			</FadeIn>
		</main>
	)
}

export default Hero
