export type Show = {
    id: number,
    title: string,
    year: number,
    director: string,
    poster: string,
    is_watched: boolean,
    duration: number,
    type: ShowType,
    seasons?: number
}

export type ShowType = 'serie' | 'movie' | 'anime';
