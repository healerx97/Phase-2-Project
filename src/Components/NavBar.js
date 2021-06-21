import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return (
    <header>
        <Link to="/" className="button">
            Home
        </Link>
        <nav>
            {/* Add NavLinks along with custom "activeStyle" rules */}
            <NavLink className="button" to="/recommended" exact activeStyle={{color: "blue"}}>
            Recommended Travels
            </NavLink>
            <NavLink className="button" to="/result" exact activeStyle={{color: "blue"}}>
            Brochure
            </NavLink>
        </nav>
    </header>
    )
}

export default NavBar