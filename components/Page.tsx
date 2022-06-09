import { ReactNode } from 'react'

import { Header } from './Header'

export const Page = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <h1>Page</h1>
    {children}
  </>
)
