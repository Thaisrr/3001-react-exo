import {NavLink} from "react-router-dom";

import '../styles/Nav.css'

const Nav = () => {
    const routes = [
        {path: '/', text: 'Home'},
        {path: '/login', text: 'Login'}
    ]

    return (
        <nav className='Nav'>
            <ul>
                {routes.map(r => (
                    <li key={r.path}>
                        <NavLink to={r.path}>{r.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;
