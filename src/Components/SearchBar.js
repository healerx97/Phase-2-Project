
function SearchBar({term, setTerm, handleSubmit}) {
    function handleChange(e) {
        setTerm(e.target.value)
    }
    return(
        <form className= "searchBarForm" onSubmit = {handleSubmit}>
            <input type= "text" name= "search" onChange={handleChange} placeholder="search travel location..." value = {term}/>
            <button type = "submit" name="searchButton">Search</button>
        </form>
    )
}

export default SearchBar