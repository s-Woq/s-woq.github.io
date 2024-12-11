import { useState } from "react";
import "./styles.css" 
import  Navbar  from "../../Components/Navbar"
const Signin = ()=>{
    //This is so i can save the Data in these
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const [signInData,  setSignInData] = useState({
        email:"",
        password: ""
    })
    //Errors
    const [errors , setErrors] =useState({
        email:"",
        password : "", 
    })

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setSignInData({
            ...signInData,
            [name]:value,
        });
    };

    //Validation
    const ValidateSignIn = ()=>{
        const newErrors = {};
        if (!formData.email) newErrors.email =  "Email is requiered";
        if (!signInData.password) newErrors.password = "Password Requiered"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0 ;
    }

    const handleSumbit = async (e) =>{
        e.preventDefault() //Avoid ur page from reloading
    
    //Validate Before Submission 
    if (!ValidateSignIn()) return // Stop if signin validation fails

    //api call simulatino
    const isValidUser = await fakeSignInApi(formData.email , formData.password);
    if(isValidUser){
        alert("Succesfully signed in")
        // You can redirect to another page, like the dashboard
      // Example: history.push('/dashboard');   

    } else{
        setErrors({
            email:"",
            password:  "Invalid credentials , please try Again! "
        })

    }
    };




    const fakeSignInApi = (email, password) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // Mock check: valid email/password pair
            const validEmail = 'user@example.com';
            const validPassword = 'password123';
            resolve(email === validEmail && password === validPassword);
          }, 1000);
        });
      };
    
      return (
        <div className ="w-full h-full p-0 m-0 overflow-hidden ">
                  <Navbar />
                  {/* < Countdown /> */}
                  <div className="body-login flex">
                  <div className="login-box w-1/2 h-full border border-white justify-center align-middle text-left ">
                    <p className="ready text-gray-600">Ready To Start Arc Noir?</p>
                    {/* <p className="Hop text-white">Hop into your account, Show ur compromise with yourself!</p> */}
                    <h2 className="Login text-white">Login</h2>
                    <form onSubmit={handleSumbit}>
                      <div className="forms">
                          <div>
                             <label className="user text-white" htmlFor="username">Username</label><br />
                             <input
                             className="user-input" 
                             type="text"
                             id="username"
                             value={username}
                             onChange={(e)=>setUsername(e.target.value)}
                             required 
                              />   
                          </div>
                          <div>
                            <label className="password text-white" htmlFor="password">Password</label><br />
                            <input 
                            className="password-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                            />
                          
                          </div>

                          {errorMessage && <div className="error-message">{errorMessage}</div>}
                          <button className="button-submit" type="submit">Log in </button>
                        </div>
                    </form>
                    </div>
                    <div className="arcnoir">
                      <div className="background-image"></div>
                      <div className="overlay"></div>
                      <p>Focus on What’s Achievable</p>
                      <h2>Focused Activities for Quick Wins</h2>
                      <p>Outdoor Challenges
                      </p>
                      <h2>Build Momentum for Achievable Goals</h2>
                      <p>Solidify Habits <br />

                      Set and Hit Milestones.</p>
                    </div>
                    </div>
        </div>
      )
    
}
export default Signin;