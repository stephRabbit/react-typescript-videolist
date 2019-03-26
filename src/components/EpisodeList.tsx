import React from 'react'
import { IEpisode } from '../interfaces'

export default function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavourite, favourites, store } = props
  const { state, dispatch } = store

  return episodes.map((episode: IEpisode) => (
    <section className='episode-box' key={episode.id}>
      <img
        src={episode.image.medium}
        alt={`Rick and Morty - ${episode.name}`}
      />
      <div>{episode.name}</div>
      <section className='episode-box__info'>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <div>
          <button
            type='button'
            onClick={() => toggleFavourite(state, dispatch, episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'UnFav'
              : 'Fav'}
          </button>
        </div>
      </section>
    </section>
  ))
}
