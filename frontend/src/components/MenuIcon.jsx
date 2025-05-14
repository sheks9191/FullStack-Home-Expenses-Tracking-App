

const MenuIcon = () => {

    const menuArray = new Array(9).fill(0)
    
  return (
    <div className="menu-container">
       {menuArray.map((_,index) => {
        return <div key={index} className="menu"></div>
       })}
    </div>
  )
}

export default MenuIcon