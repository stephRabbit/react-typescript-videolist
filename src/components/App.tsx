import React from 'react'
import Header from './Header'
import { Store } from '../Store'

export default function App({ children }: any): JSX.Element {
  const {
    state: { favourites }
  } = React.useContext(Store)

  return (
    <React.Fragment>
      <Header favourites={favourites} />
      {children}
    </React.Fragment>
  )
}
