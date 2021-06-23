import { NavLink} from "react-router-dom"
import SearchBar from "./SearchBar"

function NavBar({handleSubmit, term, setTerm}) {
    return (
    <header>

        <nav className="navBar">
            {/* Add NavLinks along with custom "activeStyle" rules */}        
            <NavLink to="/" className="button">
            Home
            </NavLink>
            <NavLink className="button" to="/recommended" exact activeStyle={{color: "blue"}}>
            Recommended Travels
            </NavLink>
            <NavLink className="button" to="/result" exact activeStyle={{color: "blue"}}>
            Brochure
            </NavLink>
        </nav>

        <SearchBar handleSubmit={handleSubmit} term={term} setTerm={setTerm}/>
    </header>
    )
}

export default NavBar