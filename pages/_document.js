import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-2207263959761061`}
            crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}