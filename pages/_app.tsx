import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Component {...pageProps} />
      <Head>
        <title>Kontent.ai Next.js boilerplate</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  )
}

export default MyApp
