import React from 'react'
import { IEpisodeProps } from '../interfaces'
import { Store } from '../Store'
import { fetchDataAction, toggleFavourite } from '../actions'

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

export default function HomePage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  const props: IEpisodeProps = {
    episodes: state.episodes,
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
