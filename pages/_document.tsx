import { Html, Head, Main, NextScript } from 'next/document'
import link from 'next/link'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='icon' href='/favicon.png' sizes='any' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
