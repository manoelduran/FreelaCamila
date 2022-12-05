import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link
            rel="stylesheet"
            media="screen"
            href="https://fontlibrary.org//face/metropolis"
            type="text/css"
          />
           <link rel="shortcut icon" href='logo.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}