import useDateUpdate from "./useDateUpdate";


const DateComponent = () => {
  const {timeNum,timeText,formatDate} = useDateUpdate()
  return (
      <div className="app-time">
          <div className="time">
            <span className="num">{timeNum}</span>
            <span className="text">{timeText}</span>
          </div>
          <span className="date">{formatDate}</span>
      </div>
  )
}

export default DateComponent