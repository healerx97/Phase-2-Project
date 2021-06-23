import { useState } from "react"

function Image({ url,mapAPI,ID }) {
    const [favorite, setFavorite] = useState(false)

    function handleClick () {
        setFavorite(!favorite)
    }

    return (
        <div className = "card" id = {`item_${ID}`}>
            <img src = {`https://maps.googleapis.com/maps/api/place/photo?maxwidth=10000&photoreference=${url}&key=${mapAPI}`}/>
            <button className={!favorite ? "fave" : "favored" } onClick={handleClick}> {!favorite ? "☆" : "★" }</button>
        </div>
    )
}

export default Image