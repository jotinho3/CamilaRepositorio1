import WelcomeKit from "./pages/WelcomeKit";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from 'react-router-dom'
import  DefaultLayout from './layout/DefaultLayout'


function Router() {

    const location = useLocation()


    return (
        <Routes location={location} key={location.pathname} >



            <Route path="/" element={<DefaultLayout />} >


            <Route path="/" element={<Home/>} />
            <Route path="/welcomekit" element={<WelcomeKit/>} />


           </Route>

           

        </Routes>
      
    )
  }
  
  export default Router

