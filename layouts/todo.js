import Page from './page'

export default ({children}) => (
  <Page>
    <div>
      {children}
    </div>

    <style jsx>{`
      div {

      }
    `}</style>
  </Page>
)
