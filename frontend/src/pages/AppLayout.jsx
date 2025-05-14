import { Outlet, useNavigation } from "react-router-dom"
import { Loading, Navbar, Sidebar } from "../components"
import { LayoutWrapper } from "../styledComponents/AppLayoutStyles"

const AppLayout = () => {

  const navigation = useNavigation();
  const pageLoading = navigation.state === 'loading'
  return (
    <LayoutWrapper>
      <Navbar/>
      <section className="app-layout">
       <Sidebar/>
         {pageLoading ? <Loading/>: <Outlet/> }
       
      </section>
      
    </LayoutWrapper>
  )
}

export default AppLayout