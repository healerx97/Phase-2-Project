import { useState } from "react"

function Image({ mapAPI,ID,loc, url }) {
    const [favorite, setFavorite] = useState(false)

    function handleClick () {
        
        if (!favorite) {
            fetch('http://localhost:3000/favLocationList', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loc)
            })
            .then(()=> setFavorite(!favorite))
        } else {
            setFavorite(!favorite)
        }
    }

    return (
        <div className = "card" id = {`item_${ID}`}>
            <img src = {`https://maps.googleapis.com/maps/api/place/photo?maxwidth=10000&photoreference=${url}&key=${mapAPI}`}/>
            <button className={!favorite ? "fave" : "favored" } onClick={handleClick}> {!favorite ? "☆" : "★" }</button>
            <h3 className="places">{loc.name}</h3>
        </div>
    )
}

export default Image