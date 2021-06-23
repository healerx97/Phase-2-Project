import Image from "./Image"
function TitlePage({keyLocationObj,mapAPI}) {
    const renderImage = keyLocationObj.map(loc=>{
        
        let image = loc.photos
        if (image) {
        return(
            <Image loc={loc} url={image[0]['photo_reference']} mapAPI={mapAPI} key = {loc.id} ID = {keyLocationObj.indexOf(loc)}/>
        )
        } else {return <h1>error</h1>}
    })
    return (
        <div className="gallery">

                {renderImage}
                

        </div>
    )
}



export default TitlePage