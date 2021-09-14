import TitlePage from "./TitlePage"
import KeyLocations from "./KeyLocations"
import {useState, useRef} from "react"
import {jsPDF} from "jspdf"
import html2canvas from 'html2canvas';
import React from 'react'

import Downloader from "./Downloader"

function Result({keyLocationObj, mapAPI, locationName}) {
    const [details, setDetails] = useState(false)
    function showDetails () {
        setDetails(!details)
    }
    //download option


    
    return(
        <div id="downloadable">
            {!details ? <TitlePage keyLocationObj={keyLocationObj} mapAPI={mapAPI} locationName={locationName}/> : <KeyLocations keyLocationObj={keyLocationObj} mapAPI={mapAPI} locationName={locationName}/>}

            <button className="ui blue button" onClick={showDetails}>
                    {details ? "Go Back" : "Show Details"}
            </button>
            <Downloader downloadFileName="Custom" rootElementId="downloadable"/>
        </div>
        

    )
}

export default Result