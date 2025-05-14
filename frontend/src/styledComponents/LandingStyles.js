import styled from "styled-components";

export const LandingWrapper = styled.div`
width:100%;
height:100vh;


background:var(--secondary-100);

.landing-content{
  display:grid;
}

.left-row {
   display:flex;
   flex-direction:column;
   margin-top:2rem;
    
    h2{
        color:var(--white);
        font-size:2rem;

        span{
            color:var(--tertiary-100);
        }
    }

    p{
        color:var(--custom-100);
        letter-spacing:1px;
        font-size:0.9rem;
        font-family:sans-serif;
    }

}

 .landing-btn {
        margin-top:2rem;

        .login-btn {
           margin-left:3rem;
           background:var(--tertiary-100);
           color:var(--secondary-100);
           box-shadow:var(--shadow-4);
           
        }
    }

.right-row {
   display:flex;
   align-items:center;
   margin-top:-4rem;

   .landing-img {
    display:none;
   }
}

@media (min-width:46.875rem){
 
background:linear-gradient(
    to right,
    var(--secondary-100) 0%,
    var(--secondary-100) 70%,
    var(--primary-100) 70%,
    var(--primary-100) 100%
);

.landing-content {
grid-template-columns:65% 35%;
}

.right-row{
   .landing-img {
    display:block;
   } 
}
}
@media (min-width:31.25rem){
  
    .left-row {
       margin-top:4rem;
       h2{
         font-size:2.7rem;
       }
        p{
            font-size:1rem;
        }
    }
}

`