import { Url } from 'next/dist/shared/lib/router/router'
import { ReactNode } from 'react'

// Metrika.tsx

export interface MetrikaProps {
	yId: string
}

// Meta.tsx

export interface MetaProps {
	title?: string
	metaDesc?: string
}

// Button.tsx

export interface ButtonProps {
	tag: 'button' | 'link'
	type?: 'button' | 'submit'
	text: string
	ariaLabel: string
	href?: Url | string
	className?: string
	modalContent?: string | ReactNode
}

// ModernBtn.tsx

export interface ModernBtnProps extends ButtonProps {
	background: string
}

// MainLayout.tsx, SecondaryLayout.tsx, RegularLayout.tsx + FadeIn.tsx

export interface LayoutProps {
	children: ReactNode
	className?: string
	delay?: number
	style?: {
		background: string
	}
}

// Hero.tsx

export interface HeroProps {
	title: string
	src: string
	buttonText?: string
	alt: string
	subtitle?: string
}

// Accordion.tsx

export interface AccordionProps {
	tab1: string
	content1: string
	tab2: string
	content2: string
	tab3: string
	content3: string
}

// index.tsx

export interface PageProps {
	posts: PostProps[]
	page: any
	node: any
	pageId: string
}

// [postSlug].tsx

export interface Params {
	postSlug: string
}

export type Site = {
	title: string
}

export interface PostEdge {
	node: {
		id: string
		title: string
		slug: string
		content: string
	}
}

export interface PostPageProps {
	post: PostProps
	site: Site
	path: string
	content: string
}

// index.tsx + [postSlug].tsx

export type PostProps = {
	slug: string
	title: string
	excerpt: string
	path: string
	content: string
	seo: {
		title: string
		metaDesc: string
	}
}

// Burger.tsx

export interface BurgerProps {
	toggleMenu: () => void
}

// ThemeToggle.tsx

export interface ThemeToggleProps {
	className?: string
}

// Images & Masonry

export interface ImageItem {
	id: string
	src: string
	alt: string
}

export interface MasonryProps {
	images: ImageItem[]
}

// imgText.tsx

export interface ImgTextProps {
	link: string
	src: string
	alt: string
	className?: string
	description: string
	projectName: string
}

// mapContent.tsx

export interface MapContentProps {
	projectsData: ImgTextProps[]
}
