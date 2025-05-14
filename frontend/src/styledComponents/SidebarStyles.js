import styled from "styled-components";


export const SidebarWrapper = styled.div ` 

height:calc(100vh - 5rem);
font-family: "Poppins", sans-serif;
font-weight: 400;
font-style: normal;
letter-spacing:1px;
width:20vw;


 
  .sidebar-component{
   overflow-y:scroll;
   width:100%;
   height:100%;
   max-width:15.6rem;
   
   }

.app-time{
  position: relative;
  width:8rem;
  height:3.5rem;
  padding:0 1rem 0 0;

  .date{
     position:absolute;
     top:1.44rem;
     font-size:0.8rem;
     color:orange;
  }
  .time{
    position:relative;
    font-size:0.9rem;
    color:yellowgreen;

  }
 
  .text { 
  position:absolute;
   right:1.56rem;
   
  }
   
}

.sidebar-content {
    
    margin-top:5rem;
    margin-bottom:2rem;
    display:flex;
    flex-direction:column;
    row-gap:1rem;
}

.link-items{
    position: relative;
    width:70%;
}

  .link-items-btn{
        background:transparent;
        border:0;
        position:absolute;
        top:-1.4rem;
        right:-1.3rem;
        color:var(--white);
        cursor: pointer;
    }


.page-icon {
    display:flex;
    align-items:center;
    cursor: pointer; 
    color:var(--grey-50);
   
   
}

.page-icon.active {
       color:var(--tertiary-100);  
    
}

.icon {
    font-size:1.5rem;
    margin-right:1rem;
    color:var(--tertiary-100);
    
    
}

.icon-text {
    text-transform:uppercase;
    font-size:0.8rem;
    font-weight:500;
}

.expense,.income {
    font-weight: 100;
    cursor: pointer;
    transition:font-weight 0.3s ease-in-out; 
    font-size:0.8rem;
    letter-spacing:2px;
   
}


.expense:hover,.income:hover {
    font-weight: 500;
    cursor: pointer;
    
}

.item {
    height:1.75rem;
    display:flex;
    place-items:center;
}

.number-input {
    width:4.4rem;
    height:1.75rem;
    outline:0;
    border:0;
    font-weight:600; 
     padding:0.25rem; 
    border-top-left-radius:0.2rem;
    border-bottom-left-radius:0.2rem;
}

.number-input:focus{
    border:2px solid var(--tertiary-100);
} 

.item-btn {
    background:transparent;
    border:none;
    background-color:var(--tertiary-100);
    cursor: pointer;
    padding:0.25rem;
    border-top-right-radius:0.2rem;
    border-bottom-right-radius:0.2rem;
    letter-spacing:1px;
    height:1.75rem;
      
}

.logout, .close-btn {
    display:none;
}




@media (max-width:61.875rem){
   display:${({$toggle}) => $toggle ? 'flex':'none'};
   position:fixed;
   background:rgba(0,0,0,0.5);
   transition:all 0.5s ease-in-out;
   top:0;
   left:0;
   width:100vw;
   z-index:10;
   min-height:100vh;
  


   .sidebar-component{
   padding:5rem 0 0 1rem;
   background:var(--secondary-100);
   width:40%;
   min-width:18.75rem;
   height:100%;
 
   
   }
   
   .sidebar-content{
    margin-top:3rem;
    margin-bottom:6.5rem;
    
   }

.close-btn {
    display:block;
    position:absolute;
    top:1.5rem;;
    right:2rem;
    background:transparent;
    border:0;
    color:var(--white);
    font-size:1.7rem;
    cursor: pointer;
}

.logout {
    display:block;
    display:flex;
    align-items:center;
    cursor: pointer;
    font-size:0.8rem;
}

.logout-icon {
    margin-right:1rem;
    font-size:1.5rem;
}
}

`