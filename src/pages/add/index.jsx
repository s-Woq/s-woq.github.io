import "./index.css"
import barrow from "../../../img/arrow.svg"
function Add() {
    return (
        
        <div className="form-div">
            <a href="./"><div className="backarrow"><img src={barrow} alt="" /></div></a>
            <div className="form-cnt">
                <div className="txt-frm">
                    <p>Make a <span className="mx-3"> Life</span>  changing event</p>
                </div>
                <div className="form">
                    <form className="form-bx" action="/submit" method="POST"> {/* Example action and method */}
                        <input className="inp" type="email" placeholder="email" />
                        <input className="inp" type="tel" placeholder="phone" />
                        <input className="inp" type="text" placeholder="type of performance" />
                        <input className="inp" type="text" placeholder="availability" />
                        
                        <button className="submit-btn" type="submit">Submit</button> {/* Explicit submit button */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add;
