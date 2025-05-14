import styled from "styled-components";




export const NavbarWrapper = styled.div`



.nav-content{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:5rem;
    
}

.menu-container {

 display:grid;
 place-items:center;
 grid-template-columns:repeat(3 ,1fr);
 cursor: pointer;
}


.logo-content {
    display:flex;
    align-items:center;
}

.menu-btn,.reload-btn{
    background:transparent;
    cursor: pointer;
    color:var(--custom-100);
    font-size:1.4rem;
    border:0;
}

.menu-btn{
    display:none;
}

.logo-container {
    overflow:visible;
    height:5rem;
    margin-left:3rem;

}

.logo-img{
width:100%;
  object-fit:center;
}

.nav-center {
    display:flex;
    place-items:center;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    text-transform:uppercase;
    letter-spacing:1px;

    span {
        display:flex;
        align-items:center;
        margin-right:0.8rem;
        transition:var(--transition);
    }
}

.icon{
    font-size:1.7rem;
}

.text{
   color:var(--custom-100);
   
}
.name{
    color:var(--tertiary-100);
    font-weight: 500;
}

.user {
    display:flex;
    align-items:center;
    gap:0.5rem;
    background:var(--tertiary-100);
    padding:0 0.1875rem;
    border-radius:0.1875rem;
    color:var(--secondary-100);
    font-family: "Poppins", sans-serif;
    box-shadow:var(--shadow-4);
    cursor: pointer;
    position:relative;
    
    span {
        font-weight:400;
        font-size:0.9rem;
    }
}

.profile-link {
  position:absolute; 
  top:3rem;
  left:0;
  display:flex;
  width:100%;
  height:1.6rem;
  letter-spacing:1px;  
  background:var(--tertiary-100); 
  text-align:center; 
  top:2rem; 
  z-index: 100;
  box-shadow:var(--shadow-4);
  border-radius:0.1875rem;
  color:var(--secondary-100);
  font-size:0.85rem;
  align-items:center;
  justify-content:center;
}

.logout-btn {
    position:absolute;
    top:4rem;
    left:0;
    display:block;
    width:100%;
    height:1.6rem;
    letter-spacing:1px;
    cursor: pointer;
    background:var(--tertiary-100);
    border:0;
    border-radius:0.1875rem;
    color:var(--secondary-100);
    z-index: 100;
    box-shadow:var(--shadow-4);
}

.sm-screen{
    display:none;
}


@media (max-width:61.875rem){
    .menu-btn{
    display:${({$toggle}) => $toggle ? 'none':'flex'};
}

.reload-btn{
    display:none;
}

.logo-container{
    display:none;
}

.user {
     display:none;
}

.sm-screen{
    display:flex;
    text-transform:uppercase;
    background:var(--tertiary-100);
    color:var(--secondary-100);
    width:1.8rem;
    height:1.8rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    font-size:0.9rem;
    cursor: pointer;
    position:relative;
}

.sm-screen{
    .profile-link,.logout-btn{
        width:auto;
        left:auto;
        width:5rem;
        text-transform:capitalize;

    }

   
}

.nav-center{
    .name {
    display:none;
}

}
}



`