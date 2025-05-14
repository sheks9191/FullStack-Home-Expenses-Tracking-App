import { currencyList} from "../utils/utils"
import { setCurrencyValue } from "../features/ui/uiSlice"
import { useDispatch, useSelector} from "react-redux"



const CurrencySettings = () => {
  const {currencyValue} = useSelector(store => store.ui)
  
  const dispatch = useDispatch()
  
  return (
    <div className="currency-settings">
      <h5>Currency Settings</h5>
      <select onChange={(e) => dispatch(setCurrencyValue(e.target.value))} value={currencyValue}>
        {currencyList.map(item => {
            const {symbol, currency} = item
            return <option value={`${symbol} ${currency}`} key={currency}>{currency}</option>
        })}
      </select>
    </div>
  )
}

export default CurrencySettings