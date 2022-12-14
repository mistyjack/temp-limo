import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="light" lang="en">
        <Head>
          {/* PWA primary color */}
          <meta key="theme-color" name="theme-color" content="#FCAF63" />
          <meta name="robots" content="noindex" />
          <link key="favicon" rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-GJ4DYBFLFF"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-GJ4DYBFLFF');
          `,
            }}
          />
        </Head>
        <body className="text-txt-pry dark:text-txt-pry-dm bg-bg-color dark:bg-bg-color-dm">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
