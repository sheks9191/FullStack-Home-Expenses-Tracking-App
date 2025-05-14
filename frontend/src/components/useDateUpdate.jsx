import moment from "moment"
import { useEffect } from "react"
import { useState } from "react"

const useDateUpdate = () => {
const [currentDate, setCurrentDate] = useState({
    date:new Date().toLocaleDateString(),
    time:new Date().toLocaleTimeString(),
   })

   const {date,time} = currentDate
   const formatTime = time.split(' ')
   const timeNum = formatTime[0];
   const timeText = formatTime[1];
   let hour = timeNum.split(':')[0]
  
  
  


   
   const formatDate = moment(date,"MM-DD-YYYY").format('MMM Do, YY')

   useEffect(() => {
    
       let currTime = setInterval(() => setCurrentDate({
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString(),
       }),1000)

       return () => clearInterval(currTime)
   },[])

  return {timeNum,timeText,formatDate,hour}
}

export default useDateUpdate