import {useRef, useState} from "react";
import {Show, ShowType} from "../utils/types/Show";
import shows from "../utils/const/Shows";

export type Filter = {
    cat: ShowType | 'all',
    watched: boolean | 'all',
    search: string
}
type Props = {update : (movies: Show[]) => void, propFilter: Filter};


const ShowsFilter = ({update, propFilter}: Props ) => {

    const [filter, setFilter] = useState<Filter>(propFilter);

    const input = useRef<HTMLInputElement>(null);

    const filterMovies = (new_filter: Filter) => {
        setFilter(new_filter);
        console.log(new_filter);
        const search = new_filter.search.toUpperCase();
        update(shows.filter(movie => (
                (new_filter.cat === 'all' || movie.type === new_filter.cat) &&
                (new_filter.watched === 'all' || movie.is_watched === new_filter.watched) &&
                (movie.title.toUpperCase().includes(search) || movie.director.toUpperCase().includes(search))
            ))
        )
    }

    const reset = () => {
        setFilter({cat: 'all', watched: 'all', search: ''});
        if(input.current) input.current.value = '';
        update(shows);
    }

    return (
        <div className='grid'>
            <p className='flex'>
                <button className={(filter.cat === 'all')? 'active': ''} onClick={() => filterMovies({...filter, cat: 'all'})}>ALL</button>
                <button className={(filter.cat === 'serie')? 'active': ''} onClick={() => filterMovies({...filter, cat: 'serie'})}>Shows</button>
                <button className={(filter.cat === 'movie')? 'active': ''} onClick={() => filterMovies({...filter, cat: 'movie'})}>Movies</button>
                <button className={(filter.cat === 'anime')? 'active': ''} onClick={() => filterMovies({...filter, cat: 'anime'})}>Anime</button>
            </p>
            <p className='flex'>
                <button className={(filter.watched === 'all')? 'active': ''} onClick={() => filterMovies({...filter, watched: 'all'})}>All</button>
                <button className={(filter.watched === true)? 'active': ''} onClick={() => filterMovies({...filter, watched: true})}>Watched</button>
                <button className={(!filter.watched)? 'active': ''} onClick={() => filterMovies({...filter, watched: false})}>Unwatched</button>
            </p>
            <p>
                <input ref={input} type="search" onChange={(e) => filterMovies({...filter, search: e.target.value.trim()})}/>
            </p>
            <p>
                <button onClick={() => reset()}>Reset</button>
            </p>
        </div>
    )
}

export default ShowsFilter
