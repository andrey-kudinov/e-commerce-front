import { Page } from 'components/Page'

const App = ({ Component, componentProps }: { Component: any; componentProps: any }) => {
  return (
    <Page>
      <Component {...componentProps} />
    </Page>
  )
}

export default App
