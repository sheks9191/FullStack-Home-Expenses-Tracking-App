import styled from "styled-components";



export const GraphWrapper = styled.div `


.stats-header {
     display:grid;
    grid-template-columns:repeat(auto-fit,minmax(12.5rem,1fr));
    gap:1rem;
    color:var(--secondary-100);
    
    

    section{
        background:var(--white);
        padding:1rem 3rem;
        position:relative;
        text-align:center;
        box-shadow:var(--shadow-4);
       
        span {
            position:absolute;
            bottom:0.625rem;
            transform:translateX(-50%);
            font-size:0.8rem;
        }

    }

    section:nth-of-type(1){
       border-left:0.25rem solid green;
       

      span{
       color:green;
       font-weight:600;
       letter-spacing:1px;
      }
    }

     section:nth-of-type(2){
       border-left:0.25rem solid orange;
        span{
       color:orange;
       font-weight:600;
       letter-spacing:1px;
      }
    }

     section:nth-of-type(3){
       border-left:0.25rem solid gray;
        span{
       color: gray;
       font-weight:600;
       letter-spacing:1px;
      }
    }

    .count {
        top:0;
        left:0;
        display:grid;
        align-self:flex-start;
        background:var(--secondary-100);
        min-width:1.25rem;
        color:var(--tertiary-100) !important;
        transform:translateX(0px);
        padding:0 0.3rem;
        
    }
}

  .negative{
        color:red !important;
    }

     .positive{
        color:green !important;
    }

.stats-title{
    display:flex;
    align-items:center;
    height:3.125rem;
    margin-top:2rem;
    gap:1rem;
   

    h4{
        margin-bottom:0 !important;
        transition:var(--transition);
        width:6.8rem;
    }
}

.span-text{
        letter-spacing:1px;
        color:greenyellow; 
        transition:var(--transition);  
        position:relative; 
        width:6.25rem;
}

.span-color {
     color:orange;
}

.arrow-btn {
    background:transparent;
    border:0;
    color:var(--tertiary-100);
    cursor: pointer;
    font-size:1.2rem;
    position:absolute;
    top:2px;
    right:-0.43rem;
    
    
}
.toggle-btn {
    display:grid;
    place-items:center;
    background:transparent;
    border:0;
    color:orange;
    font-size:1.5rem;
    cursor: pointer;
    transition:var(--transition);
}

.btn-color{
    color:greenyellow;
}



.line-chart,.bar-chart{
    margin-top:5rem;
    
}

.close-chart {
    display:none;
    opacity: 0;
    transition:var(--transition);
}
.open-chart {
    display:flex;
    opacity: 1;
    transition:var(--transition);
}

`