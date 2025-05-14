import { Link } from "react-router-dom"
import { LandingWrapper } from "../styledComponents/LandingStyles"
import LandingImg from '../assets/travel.svg'
import Logo from "../components/Logo"




const Landing = () => {
  return (
    <LandingWrapper>
     
      <div className=" page-layout">
         <Logo/>
         <div className="landing-content">
        <div className="left-row">
           
           <h2>Home <span>Expenses</span> Tracker</h2>
           <p>HoEx is a seamless app to keep track of your daily and monthly expenses as against your income and budget. Sign in or Sign up now to have access to features that will enable you to keep records of all your transactions at home</p>
           <div className="landing-btn">
            <Link to='/register' className="register-btn btn-sm-l"><span>Sign Up</span></Link>
            <Link to='/login' className="login-btn btn-sm"><span>Login</span></Link>
           </div>
        </div>
        <div className="right-row">
            <img src={LandingImg} alt="landing-image" className="landing-img"/>
        </div>
      </div>
      </div>
      
      </LandingWrapper>
  )
}

export default Landing