import {useRoutes , BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './Components/Navbar';
import Compare from "./Pages/Compare";
import Search from "./Pages/Search";
import Login from './Pages/Login';
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";



const AppRoutes = ()=>{
  let routes= useRoutes([
    {path:"/", element:<Home />},
    {path:"/compare", element:<Compare />},
    {path:"/search", element:<Search/>},
    {path:"login", element :<Login />},
    {path:"/signup", element:<Signup/> },
    {path:"/*" , element:<NotFound/>}
  ])
  return routes
}


function App() {
  
return(
  <div>
    <BrowserRouter>
    <AppRoutes />
    
    </BrowserRouter>
  </div>
  
)
}

export default App
