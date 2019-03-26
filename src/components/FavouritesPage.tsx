import React from 'react'
import { IEpisodeProps } from '../interfaces'
import { Store } from '../Store'
import { toggleFavourite } from '../actions'

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

export default function FavouritesPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favourites,
    favourites: state.favourites,
    store: { state, dispatch },
    toggleFavourite
  }

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className='episode-layout'>
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
