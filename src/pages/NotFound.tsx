import {Link} from "react-router-dom";

const NotFound = () => {

    return (
        <main>
            <h1>Are you lost ?</h1>
            <p>It seems the page you're looking for doesn't exist.</p>
            <p><Link to='/'>Go back Home</Link></p>
        </main>
    )
}
export default NotFound;
