import allShows from "../utils/const/Shows";
import {useState} from "react";
import {Show} from "../utils/types/Show";
import ShowsFilter, {Filter} from "../layout/ShowsFilter";
import Card from "../layout/Card";

const Home = () => {
    const [shows, setShows] = useState<Show[]>(allShows);
    const [filter, setFilter] = useState<Filter>({search: '', cat: "all", watched: "all"});
    const refresh = () => {
        setFilter({search: '', cat: "all", watched: "all"});
        setShows([...allShows]);
    }

    return (
        <main>
            <h1>DawanFlix</h1>

            <ShowsFilter update={setShows} propFilter={filter}/>
            <div className='grid'>

                { shows.map(show => (
                  <Card show={show} updateMovies={refresh} key={show.id} />
                ))}

            </div>
        </main>
    )
}
export default Home;
