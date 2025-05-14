import styled from "styled-components";




export const LayoutWrapper = styled.div`

background:var(--secondary-100);
min-height:100vh ;
color:var(--grey-100);
padding:0 3rem;

.app-layout{
    
  display:grid;
  grid-template-columns:auto 1fr;
  gap:2rem;
  min-height:calc(100vh - 5rem);

}

.outlet-content {
  /* display:none; */
  /* width:80vw; */

  
}

@media (max-width:61.875rem){
   .app-layout{
    grid-template-columns:1fr;
   }
}


`