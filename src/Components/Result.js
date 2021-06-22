import TitlePage from "./TitlePage"
import KeyLocations from "./KeyLocations"

function Result({keyLocationObj}) {
    return(
        <div>
            {/* <TitlePage/>
            <KeyLocations keyLocationObj={keyLocationObj}/> */}
                        <h2 className="title">Search results...</h2>
            {/* <h2>Results for {searchTerm}</h2> */}
            <div class="gallery">
                <div className="card" id="item_1">
                    <img src="https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg" className="item_1" />        
                     <div className="places">Kitty one </div> 
                     <button className="fave">☆</button>
                </div>
                <div className="card" id="item_2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnwp90iR7Ak6n7CFps_EIfmWKQAvi4pRzQxYEwplD9R_HrY1xlm0WLaZvybnAxShnYLc&usqp=CAU" className="item_2" />
                     <div className="places">Kitty one </div> 
                     <button className="favored">★</button>
                </div>
                <div className="card" id="item_3">
                    <img className="item_3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVUFUNtFgOGLLuSvB8dcy0BNCyVxwDgEV_QRQXnFac1Hz21sqIazZtvIaQnN5RnPabd8&usqp=CAU" />
                     <div className="places">Kitty one </div> 
                </div>
                <div className="card" id="item_4">
                    <img className="item_4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6HH1fOxCftnm6qIo37N6HsqgTtRGpDUMbRicC4FcNYCl59q31I264GDWveNCs3OxF-I&usqp=CAU" />
                    <div className="places">Kitty one </div> 
                </div>
                <div className="card" id="item_5">
                    <img className="item_5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OKJgFBQFw_mQtNxULjElVyBNNxXT1Hi5N7PTAG8GEZgm2Ft00SbI3VBq0mvkHug1PSk&usqp=CAU" />
                    <div className="places">Kitty three </div> 
                </div>
                <div className="card" id="item_6">
                    <img className="item_6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqvQb9A3bNACh_JNDdbKMJjKbP_ER9CVhxZVCgBgmGV5qEOtT40IP3u3xa6awInoMNVo&usqp=CAU" />
                    <div className="places">Kitty one </div> 
                </div>
                <div className="card" id="item_7">
                    <img className="item_7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnwp90iR7Ak6n7CFps_EIfmWKQAvi4pRzQxYEwplD9R_HrY1xlm0WLaZvybnAxShnYLc&usqp=CAU" />
                    <div className="places">Kitty one </div> 
                </div>
                <div className="card" id="item_8">
                    <img className="item_8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZWqEtuditcxs0HGlk-RPfBb__ytcy63A2xKrWbPN_q7CMdpV_-ZhqmT4W_tf4vrEKRQ&usqp=CAU" />  
                    <div className="places">Kitty one</div>
                </div>
                <div className="card" id="item_9">
                    <img className="item_9" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6HH1fOxCftnm6qIo37N6HsqgTtRGpDUMbRicC4FcNYCl59q31I264GDWveNCs3OxF-I&usqp=CAU" />
                    <div className="places">Kitty one</div>
                </div>

            </div>
        </div>
        

    )
}

export default Result