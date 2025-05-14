import { NavbarWrapper } from "../styledComponents/NavbarStyles"
import Logo from "./Logo"
import { MdAccountCircle } from "react-icons/md";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { IoIosSunny,IoMdPartlySunny  } from "react-icons/io";
import { MdNightlight} from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { IoReloadSharp } from "react-icons/io5";
import { GiNightSky } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setToggleLogout, setToggleMenu } from "../features/ui/uiSlice";
import { NavLink, useNavigate } from "react-router-dom";
import useDateUpdate from "./useDateUpdate";




const Navbar = () => {
   const {timeText,hour} = useDateUpdate();

   const navigate = useNavigate()
   
    const{toggleLogout,user,toggleMenu} = useSelector(store => store.ui)
    const initName = user.name.substring(0,2)
    const dispatch = useDispatch()
    

    const handleLogout = () => {
      dispatch(logoutUser())
      navigate('/landing')
    }
   
   
    
  return (
    <NavbarWrapper $toggle={toggleMenu}>



        <div className="nav-content">

            <div className="logo-content">
              <NavLink className='reload-btn'><IoReloadSharp/></NavLink>
              <button type="button" className="menu-btn" onClick={() => dispatch(setToggleMenu())}><IoMenuSharp/></button>
              <Logo/>
            </div>
            
            <div className="nav-center">
              <span className="icon">{timeText === 'PM' ? ((parseInt(hour) === 12 || (parseInt(hour) <= 5))?<IoIosSunny/>:<GiNightSky/>): ((parseInt(hour) === 12 || (parseInt(hour) <= 6))?<MdNightlight/>:<IoMdPartlySunny/>)}</span>
              <span className="text">{timeText === 'PM' ? ((parseInt(hour) === 12 || (parseInt(hour) <= 5))? 'Good Afternoon':'Good Evening'  ): ('Good Morning')}</span>
              <span className="name">{user.name}</span>
            </div>

            <div className="user" onClick={() => dispatch(setToggleLogout())}>
              <MdAccountCircle/><span>Account</span>{toggleLogout? <FaAngleUp/> :<FaAngleDown/>}
              {toggleLogout&&<NavLink className='profile-link' to="/settings">Profile</NavLink>}
              {toggleLogout&&<button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>}
            </div>

        <div className="sm-screen" onClick={() => dispatch(setToggleLogout())}>
            <span className="sm">{initName}</span>
             {toggleLogout&&<NavLink className='profile-link' to="/settings">Profile</NavLink>}
             {toggleLogout&&<button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>}
        </div>
       
        </div>
    </NavbarWrapper>
  )
}

export default Navbar