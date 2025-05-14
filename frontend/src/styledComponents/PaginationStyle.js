import styled from "styled-components";


export const PaginationWrapper = styled.div ` 
  display:flex;
  align-items:center;
  justify-content:flex-end;
  column-gap:0.5rem;
  margin-top:-1rem;
  /* padding-top:1rem; */

  .btn {
    display:flex;
    place-items:center;
    background:var(--tertiary-100);
    color:var(--secondary-100);
    font-weight:600;
    font-size:0.7rem;
    
  }

  .icon-left {
    margin-right:0.2rem;
  }

  .icon-right {
    margin-left:0.2rem;
  }

  .btn-center {
    border:0;
    cursor: pointer;
  }
  .active {
    background:var(--tertiary-100);
    font-weight:600;

  }

`