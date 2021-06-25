import Image from "./Image"
function TitlePage({keyLocationObj,mapAPI, term, locationName}) {
    const renderImage = keyLocationObj.map(loc=>{
        
        let image = loc.photos
        
        if (image) {
            let url = image[0]['photo_reference']
        return(
            <Image loc={loc} mapAPI={mapAPI} key = {loc.id} ID = {keyLocationObj.indexOf(loc)} url={url}/>
        )
        } else {return <h1>error</h1>}
    })
    return (
        <div>
            <h2 className="titlepg">{locationName}</h2>
            
            <div className="gallery">
                

                    {renderImage}
                    

            </div>
        </div>

    )
}



export default TitlePage