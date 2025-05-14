import { Form } from "react-router-dom"
import FormSelect from "./FormSelect"


const SortingComponent = () => {
  return (
    <>
        <Form className="sorting-btn">
        <FormSelect optionsArray={['newest','oldest']} name='sort' placeholder='select' />
        <button type="submit" className="sort-btn">Sort</button>
        </Form>
    </>
  )
}

export default SortingComponent