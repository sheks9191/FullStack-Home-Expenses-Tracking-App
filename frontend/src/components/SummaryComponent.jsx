import { nanoid } from "nanoid"
import ItemSummary from "./ItemSummary"


const SummaryComponent = ({summaryItems, title}) => {

  

  return (
    <div className="summary-component">
        <h4 className="summary-title">{title}</h4>
        <section className="summary-body">
            {summaryItems.map((item) =><ItemSummary key={nanoid()} item={item} title={title}/>
            )}
        </section>
    </div>
  )
}

export default SummaryComponent
