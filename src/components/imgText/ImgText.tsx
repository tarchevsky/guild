import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ImgTextProps } from '@/types'
import FadeIn from '@/components/fadeIn/FadeIn'

const ImgText = ({
	link,
	src,
	alt,
	className,
	description,
	projectName
}: ImgTextProps) => {
	return (
		<FadeIn>
			<Link
				href={link}
				className='block relative w-full h-[60svh] sm:h-[40svh] xl:h-[90svh] group'
			>
				<Image
					src={src}
					alt={alt}
					width={1960}
					height={650}
					className={cn(
						className,
						'absolute h-full w-full t-0 l-0 object-cover transition ease-in brightness-50 xl:brightness-100 xl:group-hover:brightness-50'
					)}
				/>
				<p
					className={cn(
						'cont absolute top-4 xl:top-10 xl:opacity-0 text-sm md:text-xl xl:text-2xl transition delay-100 ease-in xl:group-hover:opacity-100'
					)}
				>
					{description}
				</p>
				<h3 className='absolute bottom-4 xl:bottom-16 right-4 xl:right-16 text-[54px] xl:text-[110px] font-normal text-right'>
					{projectName}
				</h3>
			</Link>
		</FadeIn>
	)
}

export default ImgText
