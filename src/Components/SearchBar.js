
function SearchBar({term, setTerm, handleSubmit}) {
    function handleChange(e) {
        setTerm(e.target.value)
    }
    return(
        <div className="search-bar">
            <div className="ui search">
                <form className= "ui icon input" onSubmit = {handleSubmit}>
                    <input className="prompt" type= "text" name= "search" onChange={handleChange} placeholder="search travel location..." value = {term}/>
                    <button className = "ui button" style = {{border : 'none', 'border-radius': '40%'}}onClick = {handleSubmit}>
                        <i style = {{height: "10%"}} className="search icon"/>
                    </button>
                </form>  
            </div>
        </div>


    )
}



export default SearchBar