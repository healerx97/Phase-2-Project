import '../App.css';

function App() {



  // google directions
  const origin = "Empire State Building"
  const destination = "Hollywood"
  // fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${mapAPI}
  // `)
  // .then(res=>res.json())
  // .then(console.log)
  // .catch(console.log)


  //google places
  fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
