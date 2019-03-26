import React from 'react'
import { Link } from '@reach/router'
import { IHeaderProps } from '../interfaces'

export default function Header({ favourites }: IHeaderProps): JSX.Element {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='header-left'>
          <h1 className='header-title'>Rick and Morty</h1>
        </div>
        <div className='header-right'>
          <p className='header-desc'>
            <Link to='/'>Home</Link>
            <Link to='/favourites'>
              {' '}
              Pick your favourite episode!{' '}
              <strong>({favourites.length})</strong>
            </Link>
          </p>
        </div>
      </header>
    </React.Fragment>
  )
}
