function Image({ url,mapAPI,ID }) {
    return (
        <div className = "card" id = {`item_${ID}`}>
            <img src = {`https://maps.googleapis.com/maps/api/place/photo?maxwidth=10000&photoreference=${url}&key=${mapAPI}`}/>
            <button className="fave">☆</button>
        </div>
    )
}

export default Image