import styled from "styled-components";


export const SettingsWrapper = styled.div` 


.currency-settings {

    select{
      padding:0.4rem 1.5rem 0.4rem 0.4rem;
      border-radius:0.3rem;
    }

    
}


.profile-component {
 margin-top:0.3rem;
}

.profile-form {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(18.75rem,1fr));
    gap:1rem;
    
}

.profile-btn {
    background:var(--tertiary-100);
    display:flex;
    align-self:center;
    place-items:center;
    justify-content:center;
    margin-top:1rem;
    cursor: pointer;
    border-radius:0.3rem;
    
}

`