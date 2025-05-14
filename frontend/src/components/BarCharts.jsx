
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer  } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', '#D9DDDC','#FCF4A3',' #FFFDD0','#F81894','#C7EA46'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const BarCharts = ({data}) => {
 data = data.map(item => {
  item.totalAmount =Math.round(item.totalAmount)
  return item
 })
  

   if(data.length === 0){
    
    return ( 
    <div className="empty-list ">
         <h5>Data Is Empty</h5>
    </div>
     )
  }

  return (
    
    <ResponsiveContainer width="100%" height={300}>
       <BarChart
      width={500}
      height={300}
      data={data}
      className='bar-chart'
    >
      {data.length && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis dataKey="date" />
      <YAxis />
      <Bar dataKey="totalAmount" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
   
  )
}

export default BarCharts