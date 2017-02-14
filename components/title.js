import Head from 'next/head'

const suffix = 'TODO'

export default ({prefix}) => (
  <Head>
    <title>{prefix ? `${prefix} - ${suffix}` : suffix}</title>
  </Head>
)
