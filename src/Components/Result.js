import TitlePage from "./TitlePage"
import KeyLocations from "./KeyLocations"

function Result({keyLocationObj, mapAPI}) {
    return(
        <div>
            <TitlePage keyLocationObj={keyLocationObj} mapAPI={mapAPI}/>
            <KeyLocations keyLocationObj={keyLocationObj} mapAPI={mapAPI}/>
        </div>
        

    )
}

export default Result