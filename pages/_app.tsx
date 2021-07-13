import '../styles/index.css'

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/layout'
import React from 'react'
import theme from '../styles'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
