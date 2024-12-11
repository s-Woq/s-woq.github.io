import TempCard from "../../Components/TempCard"
import Navbar from "../../Components/Navbar";
import LocationFetcher from "../../Components/LocationMap";
import Widget from "../../Components/Widget";
import StartArc from "../../Components/StartArc"
import Sidebar from "../../Components/SideBar";
import Layout from "../../Layout/"

function Home (){
    return(
        <div>
            <Navbar />
            <Layout>
            <Sidebar />
            <StartArc />
            </Layout>
            

            
        </div>
    )
}
export default Home;