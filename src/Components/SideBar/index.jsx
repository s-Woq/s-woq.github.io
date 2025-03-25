import "./styles.css"
function Sidebar(){
    return(
        <div className="sidebar  relative left-12">
          <p className="text text-stats">CURRENT <br/> STATS</p>  
          <p className="text text-locked">LOCKED 🔒</p>
        </div>
    )
}
export default Sidebar;