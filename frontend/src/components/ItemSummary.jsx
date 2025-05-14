import { currencyUpdate } from "../utils/utils"


const ItemSummary = ({item,title}) => {
  const {name, totalAmount, count} = item
  const amount = currencyUpdate(totalAmount)
  return (
    <div className="item-summary">
        <div className="item-name">{name}</div>
        <div className="item-total">{amount}</div>
        <p className="item-count"><span className={title}>{count}</span></p>
    </div>
  )
}

export default ItemSummary