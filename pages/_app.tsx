import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { config } from '@fortawesome/fontawesome-svg-core'

import 'styles/global.scss'

config.autoAddCss = false

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
	<>
		<Component {...pageProps} />
		<ToastContainer />
	</>
)

export default App
