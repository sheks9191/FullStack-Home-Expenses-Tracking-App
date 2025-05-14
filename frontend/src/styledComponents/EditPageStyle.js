import styled from "styled-components";
import editImage from '../assets/edit.svg'


export const EditWrapper = styled.div` 

position:relative;
background-image:url(${editImage});
 background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
.edit-content {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.5);
    display:grid;
    place-items:center;
}

.edit-form {
  background:var(--primary-50);
  text-align:center;
  z-index:7;
  color:var(--secondary-100);
   padding:1rem 2rem;
   border-radius:0.3rem;
   box-shadow:var(--shadow-4);
}

.input-container{
    display:flex;
    flex-direction:column; 

    input{
        margin-bottom:1rem;
        padding:0.2rem 0.2rem;
        font-weight:500;
        letter-spacing:1px;
    }
}

button{
    background:transparent;
    border:0;
    letter-spacing:1px;
    cursor: pointer;
    background:var(--secondary-100);
    color:var(--tertiary-100);
    padding:0.3rem 0.5rem;
}



`