import TitlePage from "./TitlePage"
import KeyLocations from "./KeyLocations"
import {useState, useRef} from "react"
import {jsPDF} from "jspdf"
import html2canvas from 'html2canvas';

function Result({keyLocationObj, mapAPI, term, locationName}) {
    const [details, setDetails] = useState(false)
    function showDetails () {
        setDetails(!details)
    }
    //download option
    const inputRef = useRef(null);
    const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("download.pdf");
    })
    }
    
    return(
        <div ref={inputRef}>
            {!details ? <TitlePage term={term} keyLocationObj={keyLocationObj} mapAPI={mapAPI} locationName={locationName}/> : <KeyLocations keyLocationObj={keyLocationObj} mapAPI={mapAPI}/>}

            <button className="ui blue button" onClick={showDetails}>
                    {details ? "Go Back" : "Show Details"}
            </button>
            <button onClick={printDocument}>Download</button>
        </div>
        

    )
}

export default Result