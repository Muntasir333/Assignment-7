import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { SeeContext } from '../../Connection/ConnectionProvide';




const Stat = () => {
    const {action} = useContext(SeeContext)
    const callCount = action.filter(a=> a.type === "call").length;
    const textCount = action.filter(a=> a.type === "text").length;
    const videoCount = action.filter(a=> a.type === "video").length;


const data = [
  { name: 'Text', value: textCount, fill: '#0088FE' },
  { name: 'Call', value: callCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#FFBB28' },
  
];

    
    return (
        <div className=' my-10 p-20 container mx-auto border border-slate-300 bg-[#F8FAFC]'>
            <div className=''>
        <h2 className='text-center font-bold text-5xl my-10'>Friendship Analytics</h2></div>
        <div>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin: 'auto', aspectRatio: 1,}} responsive>
                
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend ></Legend>
      <Tooltip></Tooltip>
    </PieChart>
    </div>
            
        </div>
    );
};

export default Stat;