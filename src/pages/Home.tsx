import Shows from "../utils/const/Shows";
import {useState} from "react";
import {Show} from "../utils/types/Show";

const Home = () => {
    const [shows, setShows] = useState<Show[]>(Shows);

    return (
        <main>
            <h1>DawanFlix</h1>

            <div className='grid'>

                { shows.map(s => (
                    <div key={s.id}  className={`card  ${(s.is_watched)? 'watched' : ''}`}>
                        <div className='img-container'>
                            <img src={s.poster} alt=''/>
                        </div>
                        <h3>{s.title}</h3>
                        <div className='expendable'>
                            <p>{s.year}</p>
                            <p>By {s.director}</p>
                            <p>{s.duration}min</p>
                            {s.seasons && <p>{s.seasons}</p>}
                        </div>
                    </div>
                ))}

            </div>
        </main>
    )
}
export default Home;
