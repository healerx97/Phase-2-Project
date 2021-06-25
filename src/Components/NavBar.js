import { NavLink} from "react-router-dom"
import SearchBar from "./SearchBar"

function NavBar({handleSubmit, term, setTerm}) {
    return (
    <header>
        <h2 className="header_title" >Travel Haven</h2>

        <nav className="navBar">
            {/* Add NavLinks along with custom "activeStyle" rules */}        
            <NavLink to="/" className="nav_button">
            Home
            </NavLink>
            <NavLink className="nav_button" to="/recommended" exact activeStyle={{color: "blue"}}>
            Recommended Travels
            </NavLink>
            <NavLink className="nav_button" to="/result" exact activeStyle={{color: "blue"}}>
            Brochure
            </NavLink>
            <SearchBar handleSubmit={handleSubmit} term={term} setTerm={setTerm}/>
        </nav>
        
    </header>
    )
}

export default NavBar