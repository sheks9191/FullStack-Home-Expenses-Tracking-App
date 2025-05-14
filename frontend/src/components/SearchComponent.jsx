
import { Form, useSubmit } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
const SearchComponent = () => {
   const submit = useSubmit()
   const debounce = (onChange) => {
    let timeout
    return (e) => {
      const form = e.currentTarget.form
      clearTimeout(timeout)  
      timeout = setTimeout(() => {
         onChange(form)
      }, 1000)   
    }
   }   
  return (
   
        <Form className="form-search">
          <div className="search-container">
             <input type="search" name="search" placeholder='search' onChange={debounce((form) => {
              submit(form)
             })} />
            <button type="submit" className="search-btn"><FaSearch/></button>
          </div>
           
        </Form>
   
  )
}

export default SearchComponent