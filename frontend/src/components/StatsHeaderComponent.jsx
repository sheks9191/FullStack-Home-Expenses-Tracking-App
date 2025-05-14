import { currencyUpdate } from "../utils/utils"
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const StatsHeaderComponent = ({title,count, total}) => {
   
    
  return (
    <section>
        <h5>{title}</h5>
        {title !== 'Balances'&& <span>{currencyUpdate(total)}</span>}
        {title === 'Balances'&& <span className={total <= 0 ? 'negative':'positive'}>{currencyUpdate(total)} {total <=0 ?<FaArrowDownLong/> : <FaArrowUpLong/>}</span>}
        {title !== 'Balances'&&<span className="count">{count}</span>}
    </section>
  )
}

export default StatsHeaderComponent