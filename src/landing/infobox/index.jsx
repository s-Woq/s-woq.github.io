import "./index.css"
import van from "../../../img/van.jpg"
import map from "../../../img/map.jpg"
import church from "../../../img/church.jpg"
function InfoBox(){
    return(
        <div className="maininfo">
            <div className="left"><img className="immain" src={van} alt="" /> </div>
            <div className="right">
               <img className="immain" src={church} alt="" /> 
            </div>
            <div className="bottom"><img className="immain" src={map} alt="" /> </div>
        </div>
    )

}

export default InfoBox ;