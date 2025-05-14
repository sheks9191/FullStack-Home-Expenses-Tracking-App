import { Form } from "react-router-dom"

const AddInputComponent = ({handleTextID, item,inputTextId,id,itemName,itemAmount,handleInput,isLoading}) => {
  return (
     <Form method="POST" action={`../add-${item}`}>
    <div className={item} onClick={handleTextID}>
        <span>{itemName}</span>
    </div>
   {inputTextId === id &&  <div className="item">

          <input type="text" className="number-input" name={itemName} value={itemAmount} onChange={handleInput}/>

          <button type="submit" className="item-btn" disabled={isLoading}>Add</button>
      </div>}
    </Form>
  )
}

export default AddInputComponent