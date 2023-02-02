import {Show} from "../utils/types/Show";
import showsConst from "../utils/const/Shows";

type Props = {
    show: Show,
    refresh: Function
}
const Card = ({show, refresh} : Props) => {

    const setWatched = () => {
        const index = showsConst.findIndex(s => s.id === show.id);
        showsConst[index].is_watched = !showsConst[index].is_watched;
        refresh();
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
