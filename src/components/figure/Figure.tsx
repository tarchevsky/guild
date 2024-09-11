import Link from 'next/link'
import Image from 'next/image'
import { FigureProps } from '@/types'

const Figure = ({
	link,
	src,
	caption,
	linkStyles,
	figureStyles,
	imageStyles,
	captionStyles
}: FigureProps) => {
	return (
		<>
			{link ? (
				<Link
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className={`${linkStyles}`}
				>
					<figure {...(figureStyles && { className: figureStyles })}>
						<Image
							src={src}
							alt={caption}
							width={800}
							height={1200}
							className={`object-contain hover:brightness-90 transition-all ease-in-out ${imageStyles}`}
						/>
						<figcaption
							className={`text-center text-xl md:text-4xl ${captionStyles}`}
						>
							{caption}
						</figcaption>
					</figure>
				</Link>
			) : (
				<figure {...(figureStyles && { className: figureStyles })}>
					<Image
						src={src}
						alt={caption}
						width={800}
						height={1200}
						className={`object-contain hover:brightness-90 transition-all ease-in-out ${imageStyles}`}
					/>
					<figcaption
						className={`text-center text-xl md:text-4xl ${captionStyles}`}
					>
						{caption}
					</figcaption>
				</figure>
			)}
		</>
	)
}

export default Figure
