import '../App.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom"

//import components
import Home from './Home'
import Recommended from './Recommended';
import Result from './Result';
import NavBar from './NavBar'

function App() {
  const mapAPI = "AIzaSyCP56wJn1e5NsoDfbmizaAvg90pqLj3tkU"
  // google directions
  // const origin = "Empire State Building"
  // const destination = "Hollywood"
  // fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${mapAPI}`)
  // .then(res=>res.json())
  // .then(console.log)
  // .catch(console.log)
  const [term, setTerm] = useState("")
  const [keyLocationObj, setKeyLocation] = useState([])
  //google places initial search
  function handleSubmit(e) {
    e.preventDefault()
    if (term !== "") {
    let placeSearch = term
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


 
//   function addFav (id) {
//     let favArray = keyLocationObj.filter(location => location.id === id)
//     setKeyLocation(favArray)
  
// }


  // save lat, long

  //google places nearby search(key locations)
  // let lat = 48.856614
  // let long = 2.3522219
  // const type = "tourist_attraction"
  // const keyword = "things to do"
  // fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=${type}&keyword=${keyword}&key=${mapAPI}`)
  // .then(res=>res.json())
  // .then(console.log)
    // save picture, name, open, 

  //place photos
  // <img src = {https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoref}&key={mapAPI}/>
{/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=ATtYBwKj7gvGjEkMgTYrfACc66l1DbX8A3e07c3uHPLQqSURda4GJKFt78TEgOZH1O-_DZ5z1oxD58N8IGBkKb16Mc0kArsDHQ3DNpI7QfXyc1NFBOfDxuiGlhiKD_KO17z6PMlfxem4ceyVmIsdUJkQwgIAeLBVZJ1ogpve5uHLGFGz7SiI&key=${mapAPI}`} alt=""/> */}

  return (
    <div className="App">
      <NavBar handleSubmit={handleSubmit} term={term} setTerm={setTerm}/>
    
      <Switch>
        <Route path="/recommended" component={() =><Recommended mapAPI={mapAPI}  setKeyLocation={setKeyLocation} />} />
        <Route path="/result" component={()=> <Result keyLocationObj={keyLocationObj} mapAPI={mapAPI}/>} />
        <Route path="/">
          <Home mapAPI={mapAPI} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
