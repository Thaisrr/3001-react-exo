import showsConst from "../utils/const/Shows";
import {useState} from "react";
import {Show} from "../utils/types/Show";
import ShowsFilter from "../layout/ShowsFilter";
import Card from "../layout/Card";

const Home = () => {
    const [mustUpdate, setMustUpdate] = useState(0);
    const [shows, setShows] = useState<Show[]>();
    const refresh = () => {
        console.log(showsConst)
        setMustUpdate(mustUpdate + 1);
    }

    return (
        <main>
            <h1>DawanFlix</h1>

            <ShowsFilter mustUpdate={mustUpdate} setShows={setShows} />
            <div className='grid'>
                { shows?.map(show => (
                  <Card show={show} refresh={refresh} key={show.id}  />
                ))}
            </div>
        </main>
    )
}
export default Home;
