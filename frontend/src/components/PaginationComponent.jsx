import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { PaginationWrapper } from "../styledComponents/PaginationStyle";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationComponent = () => {
   const {currentPage,noOfPages} = useLoaderData();
  //  const pages = new Array(noOfPages).fill(0);
  
  
  const navigate = useNavigate(); 
  const {search, pathname} = useLocation(); 
  

  const handleCurrentPage = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page',pageNum)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  const pageButton = ({pageNum,activeClass}) => {
    return <button key={pageNum} className={activeClass ? 'btn-center active':'btn-center'} onClick={()=> handleCurrentPage(pageNum)}>{pageNum}</button>
  }
  
  const displayPageButtons = () => {
    const buttonArray = [];

    buttonArray.push(
      pageButton({pageNum:1, activeClass:currentPage === 1})
    );

   if(currentPage > 3){
    buttonArray.push(
      <span key='dots-1'>...</span>
    )
   } 

    if(currentPage !== 1 && currentPage !== 2){
      buttonArray.push(
        pageButton({
          pageNum:currentPage - 1,
          activeClass:false,
        })
      )
    }

  if(currentPage !== 1 && currentPage !== noOfPages){
     buttonArray.push(
      pageButton({pageNum:currentPage, activeClass:true})
    );
  }

  if(currentPage !== noOfPages && currentPage!== noOfPages -1){
    buttonArray.push(
      pageButton({
        pageNum:currentPage + 1,
        activeClass:false,
      })
    )
  }

   if(currentPage < noOfPages -2){
    buttonArray.push(
      <span key='dots-2'>...</span>
    )
   } 
      buttonArray.push(
      pageButton({pageNum:noOfPages, activeClass:currentPage === noOfPages})
    );

    return buttonArray
  }
 

  
  return (

    <PaginationWrapper>

     <button className="btn prev-btn" onClick= {() => {
      let prev = currentPage - 1;
      if(prev < 1){
        prev = noOfPages
      }
      handleCurrentPage(prev)
     }} >
       <LuMoveLeft className="icon-left"/>
        Prev
     </button>

     {displayPageButtons()}

      <button className="btn next-btn" onClick= {() => {
      let next = currentPage + 1;
      if(next > noOfPages){
        next = 1
      }
      handleCurrentPage(next)
     }}>
       Next
       <LuMoveRight className="icon-right"/>
       
     </button>

    </PaginationWrapper>
  )
}

export default PaginationComponent