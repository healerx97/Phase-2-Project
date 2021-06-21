import '../App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom"

//import components
import Home from './Home'
import Recommended from './Recommended';
import Result from './Result';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function App() {


  // google directions
  const origin = "Empire State Building"
  const destination = "Hollywood"
  // fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${mapAPI}
  // `)
  // .then(res=>res.json())
  // .then(console.log)
  // .catch(console.log)


  //google places initial search
  // const placeSearch = "paris"
  // fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${mapAPI}`)
  // .then(res=>res.json())
  // .then(console.log)

  //google places nearby search(key locations)
  let lat = 48.856614
  let long = 2.3522219
  const type = "tourist_attraction"
  const keyword = "things to do"
  fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=${type}&keyword=${keyword}&key=${mapAPI}`)
  .then(res=>res.json())
  .then(console.log)

  //place photos
  // <img src = {https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoref}&key={mapAPI}/>
{/* <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=ATtYBwKj7gvGjEkMgTYrfACc66l1DbX8A3e07c3uHPLQqSURda4GJKFt78TEgOZH1O-_DZ5z1oxD58N8IGBkKb16Mc0kArsDHQ3DNpI7QfXyc1NFBOfDxuiGlhiKD_KO17z6PMlfxem4ceyVmIsdUJkQwgIAeLBVZJ1ogpve5uHLGFGz7SiI&key=${mapAPI}`} alt=""/> */}

  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <Switch>
        <Route path="/recommended">
          <Recommended/>
        </Route>
        <Route path="/result">
          <Result/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
