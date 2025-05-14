import { SidebarWrapper } from "../styledComponents/SidebarStyles"
import { pageIcons } from "../utils/utils"
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";;
import PageIcon from "./PageIcon"
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setToggleMenu } from "../features/ui/uiSlice";
import DateComponent from "./DateComponent";




const Sidebar = () => {
  const {toggleMenu} = useSelector(store => store.ui)
  const dispatch = useDispatch()

   
 const  handleToggleSidebarWrapper = (e) => {
 
    if(e.target.id === 'sidebar'){
      dispatch(setToggleMenu())
    }
 
  }
  
 
  
  return (
    <SidebarWrapper $toggle={toggleMenu} onClick={handleToggleSidebarWrapper} id='sidebar'>
      <button type="button" className="close-btn" onClick={()=>dispatch(setToggleMenu())}><IoMdClose/></button>
      <div className="sidebar-component" >
       
       <DateComponent/>
       
      <div className="sidebar-content">

        {/* <div className="budget">
           <span className="icon"><GiTakeMyMoney/></span>
           <span className="icon-text">Budget</span>
        </div> */}
        
        {pageIcons.map(pageIcon => <PageIcon key={pageIcon.id} pageIcon={pageIcon} />
        )}

        <span className="logout" onClick={() => dispatch(logoutUser())}> <RiLogoutBoxLine className="logout-icon"/>LOGOUT</span>
      </div >
     
      </div>
    
    </SidebarWrapper>
  )
}

export default Sidebar