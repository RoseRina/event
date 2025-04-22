import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isAdminPage = router.pathname.includes('/admin')

  useEffect(() => {
    // Preload fonts (opsional, jika ada error, akan dilewati)
    if (typeof document !== 'undefined' && 'fonts' in document) {
      try {
        const poppins = new FontFace(
          'Poppins',
          'url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)',
          { weight: '400' }
        )
        const poppinsBold = new FontFace(
          'Poppins',
          'url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2)',
          { weight: '700' }
        )

        Promise.all([poppins.load(), poppinsBold.load()])
          .then(fonts => {
            fonts.forEach(font => document.fonts.add(font))
          })
          .catch(err => console.error('Font loading failed:', err))
      } catch (error) {
        console.warn('Font API not supported:', error)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:" />
      </Head>
      <Component {...pageProps} />
      {!isAdminPage && (
        <Script src="/js/security.js" strategy="afterInteractive" />
      )}
    </>
  )
}

export default MyApp 