import TitlePage from "./TitlePage"
import KeyLocations from "./KeyLocations"

function Result({keyLocationObj}) {
    return(
        <div>
            <TitlePage/>
            <KeyLocations keyLocationObj={keyLocationObj}/>
        </div>
    )
}

export default Result