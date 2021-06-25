import { Image } from 'semantic-ui-react'

function KeyLocations({keyLocationObj, mapAPI, term}) {
    const renderKeyLoc = keyLocationObj.map(loc=> {
        return (
            <div className="keyloc_card">
                <img className="keyloc_img" src= {loc.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxheight=400&maxwidth=400&photoreference=${loc.photos[0]['photo_reference']}&key=${mapAPI}`: 'https://static.thenounproject.com/png/504708-200.png'} alt={loc.name}/>
                    <div className="key_desc">
                        <h2 className="img_title">{loc.name}</h2>
                        <h5 className="loc_desc">Rating: {loc.rating}</h5>
                        <h5 className="loc_desc">Number of Ratings: {loc['user_ratings_total']}</h5>
                    </div>

            </div>
        )
    })
    return (
        <div className="">
            <h2>Things To do in {term} </h2>
            
            <div className="card_container">
                <div className="keyloc_layout">
                {renderKeyLoc}
                </div>
            </div>

            
        </div>


        
    )
}

export default KeyLocations



{/* <div className="ui raised link card">
<div className="content">
    <div className="header">Cute Dog</div>
    <div className="meta">
        <span className="category">Animals</span>
    </div>
    <div className="description">
        <p></p>
    </div>
</div>
<div className="extra content">
    <div className="left floated author">
     <img className="ui avatar image" src="/images/avatar/small/matt.jpg" /> Matt 
    </div>
</div>
</div> */}