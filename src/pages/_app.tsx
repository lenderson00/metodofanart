import '../styles/globals.css'
import type { AppProps } from 'next/app'

import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
 
const tagManagerArgs = {
    gtmId: 'GTM-PPKCQR6'
}


 

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document !== undefined) {
      TagManager.initialize(tagManagerArgs)
    }
  })
  
  return <Component {...pageProps} />
}

export default MyApp
