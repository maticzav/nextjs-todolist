// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

Router.onRouteChangeStart = () => Progress.start()
Router.onRouteChangeComplete = () => Progress.done()
Router.onRouteChangeError = () => Progress.done()

export default ({children}) => (
  <main>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
      <meta name="description" content="Simple app to show how to build TODO with login and sessions."/>
    </Head>

    {children}

    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
  </main>
)
