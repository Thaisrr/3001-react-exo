import {useEffect, useRef, useState} from "react";
import {Show, ShowType} from "../utils/types/Show";
import showsConst from "../utils/const/Shows";

export type Filter = {
    cat: ShowType | 'all',
    watched: boolean | 'all',
    search: string
}
type Props = {setShows : (movies: Show[]) => void, mustUpdate: number};


const ShowsFilter = ({setShows, mustUpdate}: Props ) => {

    const [filter, setFilter] = useState<Filter>({cat: 'all', watched: 'all', search: ''});

    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const search = filter.search.toUpperCase();
        setShows(showsConst.filter(movie => (
                (filter.cat === 'all' || movie.type === filter.cat) &&
                (filter.watched === 'all' || movie.is_watched === filter.watched) &&
                (movie.title.toUpperCase().includes(search) || movie.director.toUpperCase().includes(search))
            ))
        )
    }, [filter, setShows, mustUpdate])

    const reset = () => {
        setFilter({cat: 'all', watched: 'all', search: ''});
        if(input.current) input.current.value = '';
    }

    return (
        <div className='grid'>
            <p className='flex'>
                <button className={(filter.cat === 'all')? 'active': ''} onClick={() => setFilter({...filter, cat: 'all'})}>ALL</button>
                <button className={(filter.cat === 'serie')? 'active': ''} onClick={() => setFilter({...filter, cat: 'serie'})}>Shows</button>
                <button className={(filter.cat === 'movie')? 'active': ''} onClick={() => setFilter({...filter, cat: 'movie'})}>Movies</button>
                <button className={(filter.cat === 'anime')? 'active': ''} onClick={() => setFilter({...filter, cat: 'anime'})}>Anime</button>
            </p>
            <p className='flex'>
                <button className={(filter.watched === 'all')? 'active': ''} onClick={() => setFilter({...filter, watched: 'all'})}>All</button>
                <button className={(filter.watched === true)? 'active': ''} onClick={() => setFilter({...filter, watched: true})}>Watched</button>
                <button className={(!filter.watched)? 'active': ''} onClick={() => setFilter({...filter, watched: false})}>Unwatched</button>
            </p>
            <p>
                <input ref={input} type="search" onChange={(e) => setFilter({...filter, search: e.target.value.trim()})}/>
            </p>
            <p>
                <button onClick={() => reset()}>Reset</button>
            </p>
        </div>
    )
}

export default ShowsFilter
