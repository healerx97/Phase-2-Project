import TitlePage from "./TitlePage"
import KeyLocations from "./KeyLocations"
import {useState} from "react"

function Result({keyLocationObj, mapAPI}) {
    const [details, setDetails] = useState(false)
    function showDetails () {
        setDetails(!details)
    }
 
    
    return(
        <div>
            {!details ? <TitlePage keyLocationObj={keyLocationObj} mapAPI={mapAPI}/> : <KeyLocations keyLocationObj={keyLocationObj} mapAPI={mapAPI}/>}

            <button className="toggle_btn" onClick={showDetails}>
                    {details ? "Go Back" : "Show Details"}
            </button>
        </div>
        

    )
}

export default Result