import {Show} from "../utils/types/Show";
import allShows from "../utils/const/Shows";

type Props = {
    show: Show,
    updateMovies: Function
}
const Card = ({show, updateMovies} : Props) => {

    const setWatched = () => {
        const index = allShows.findIndex(s => s.id === show.id);
        console.log(`Previous : ${index} --- ${allShows[index].is_watched}`);
        allShows[index].is_watched = !allShows[index].is_watched;
        console.log(`After : ${index} --- ${allShows[index].is_watched}`);
        // updateMovies([...allShows]);
        updateMovies();
    }

    return (
        <div   className={`card  ${(show.is_watched)? 'watched' : ''}`}>
            <div className='img-container'>
                <img src={show.poster} alt=''/>
            </div>
            <div className='title-flex'>
                <h3>{show.title}</h3>
                <button onClick={setWatched}>{show.is_watched? 'Vu' : 'Pas vu'}</button>
            </div>

            <div className='expendable'>
                <p>{show.year}</p>
                <p>By {show.director}</p>
                <p>{show.duration}min</p>
                {show.seasons && <p>{show.seasons}</p>}
            </div>
        </div>
    )
}
export default Card;
