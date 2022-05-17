import '../styles/globals.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope, fab)
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
