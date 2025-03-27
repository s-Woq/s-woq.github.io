import './App.css';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Add from './pages/add';
import Discover from './pages/discover';
import Buy from './pages/buy';
import NotFound from './pages/notfound';  // Ensure correct import
import Home from './Layout/Home';  // Ensure Home is correctly imported
import Axios from "axios";
import { useEffect , useState} from 'react';
import Uevents from "./pages/uevents"
import Locations from "./pages/locations"

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/add', element: <Add /> },
    { path: '/locations', element: <Locations /> },
    {path:'/discover' , element : <Discover/>},
    { path:'/events',element: <Uevents/>},
    { path: '/buy', element: <Buy /> },
    { path: '/*', element: <NotFound /> },  // Catch-all route
  ]);
  return routes;
};

function App() {
      const [data,setData] = useState("");

      const getData = async()=>{
        const response = await Axios.get("http://localhost:5000/getData")
        setData(response.data)
      }
      useEffect(()=>{
        getData()
      },[])

  return (
    <div>
      <BrowserRouter>
        <AppRoutes />  {/* This is where routes are rendered */}
      </BrowserRouter>
    </div>
  );
}

export default App;
