import { useEffect, useState } from "react"

function Home({mapAPI}) {
    // const [topLoc, setTopLoc] = useState([])
    // const topLocations = "most visited locations in the Europe" 
    // const keyword = "things to do"
    // const type = "tourist_attraction"

  
    //     fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${topLocations}&type=${type}&keyword=${keyword}&key=${mapAPI}`)
    //     .then(res=>res.json())
    //     .then(data => {
    //         console.log(data)
    //         const locData = data.results.slice(0,5)
    //         setTopLoc(locData)
    //     })
           
  

    // const homeDisplay = topLoc.map(loc => {
    //     return (
    //         <div className="top_locations">
    //             <img src= {loc.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${loc.photos[0]['photo_reference']}&key=${mapAPI}`: 'data:image/jpeg;base64,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&key='} alt='img'/>
    //             <h1>{loc.name}</h1>
    //             <h5>Rating: {loc.rating}</h5>
                
                
               
    //         </div>
    //     )
            

    // })

   

    return (
        <div>
            <h2>Home</h2>
            {/* {homeDisplay} */}
            
        </div>
    )
}

export default Home