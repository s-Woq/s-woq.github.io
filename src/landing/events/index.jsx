import "./index.css"
import conc from "../../../img/concert.jpg"
import conc2 from "../../../img/conc2.jpg"
import bar from "../../../img/bar.jpg"
import bar2 from "../../../img/bar2.jpg"
import sn from "../../../img/snn.jpg"
function Events(){
    return(
        <div className="main">
            <p className="title text-white ">Giortí</p>
            <div className="main-flex">
                <div className="circle circle-1">
                     <img src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="concert" className="img-c"/>
                     
                </div>
                <div className="square"> <img src="https://images.pexels.com/photos/1766686/pexels-photo-1766686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-c"/></div>
                <div className="mainev"><img src={sn} alt="" className="img-c" /><p >Upcoming events</p></div>
                <div className="square"><img src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-c"/></div>
                <div className="circle circle-2"><img src="https://images.pexels.com/photos/1264937/pexels-photo-1264937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-c"/></div>
            </div>

        </div>
    )
}


export default Events;