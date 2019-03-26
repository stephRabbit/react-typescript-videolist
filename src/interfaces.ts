/**
 * Interfaces
 */
export interface IAction {
  type: string
  payload: Array<IEpisode> | any
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {
    medium: string
    original: string
  }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>
  favourites: Array<IEpisode>
  store: { state: IState, dispatch: Dispatch }
  toggleFavourite: (state: IState, dispath: Dispatch, episode: IEpisode) => IAction
}

export interface IHeaderProps {
  favourites: Array<IEpisode>
}

export interface IState {
  episodes: Array<IEpisode>
  favourites: Array<IEpisode>
}

/**
 * Types
 */
export type Dispatch = React.Dispatch<IAction>