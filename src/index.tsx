import React from 'react'
import ReactDOM from 'react-dom'
import { Router, RouteComponentProps } from '@reach/router'
import './index.css'
import App from './components/App'
import Hompage from './components/HomePage'
import FavouritesPage from './components/FavouritesPage'
import { StoreProvider } from './Store'

/**
 * @param props - pageComponent - specific type
 * & anything else RouteComponentProps provides
 */
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<Hompage />} path='/' />
        <RouterPage pageComponent={<FavouritesPage />} path='/favourites' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)
