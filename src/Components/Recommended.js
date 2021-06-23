function Recommended({mapAPI, setKeyLocation}) {

    function handleClick(e) {
        if (e.target.textContent !=="") {
            let placeSearch = e.target.textContent
            fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${mapAPI}`)
            .then(res=>res.json())
            .then(data=> {
              //input lat, long coordinates
              console.log(data.results[0])
              let lat = `${data.results[0].geometry.location.lat}`
              let long = `${data.results[0].geometry.location.lng}`
              const type = "tourist_attraction"
              const keyword = "things to do"
              fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=${type}&keyword=${keyword}&key=${mapAPI}`)
              .then(res=>res.json())
              .then(data=> {
                console.log(data)
                const newObj = data.results.slice(0,10)
                setKeyLocation(newObj)
        
              })
            })
            } else {alert("no search inputed")}
          
        
    }
//  onClick={handleClick}

    return(
        <div className="recommendations">
            <h2>Recommended</h2>
            <div onClick={handleClick}>miami</div>
        </div>
    )
}

export default Recommended