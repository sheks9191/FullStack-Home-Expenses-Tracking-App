import styled from "styled-components";


export const LoadingWrapper = styled.div` 
color:red;
/* background-color:yellow; */
display:grid;
place-items:center;
 
.loader {
  width: 1.25rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--primary-50);
  box-shadow: 0 0 0 0 var(--primary-50);
  animation: l2 1.5s infinite linear;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 #0004;
  animation: inherit;
  animation-delay: -0.5s;
}
.loader:after {
  animation-delay: -1s;
}
@keyframes l2 {
    100% {box-shadow: 0 0 0 2.5rem #0000} 
} 
 /* height:100vh;
   width:100vw;
   display:flex;
   align-items:center;
   justify-content:center;
   transform: translateY(-15%);

.loading-circle { 
   display:flex;
   align-items:center;
   justify-content:center;
   gap:1rem;
}

.circle {
   width:12px;
   height:12px;
   border-radius:50%;
   background:var(--primary-500);
   animation:bouncing 0.5s ease-in infinite;
   background:var(--light-green);

   :nth-of-type(2){
      animation-delay:0.1s;
   }

   :nth-of-type(3){
      animation-delay:0.2s;
   }

}

@keyframes bouncing {
   0%,
   100% {
     transform:translateY(0);
   }

   50% {
      transform:translateY(-10px);
   }
} */

`