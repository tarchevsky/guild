import { Html, Head, Main, NextScript } from 'next/document'
import Metrika from '@/components/metrika/Metrika'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Metrika yId='97927647' />
			</body>
		</Html>
	)
}
