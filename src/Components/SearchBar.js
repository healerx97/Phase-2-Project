
function SearchBar({term, setTerm, handleSubmit}) {
    function handleChange(e) {
        setTerm(e.target.value)
    }
    return(
        <div className="search-bar">
            <div className="ui search">
                <form className= "ui icon input" onSubmit = {handleSubmit}>
                    <input className="prompt" type= "text" name= "search" onChange={handleChange} placeholder="search travel location..." value = {term}/>
                    <i className="search icon"></i>
                </form>  
            </div>
        </div>


    )
}



export default SearchBar