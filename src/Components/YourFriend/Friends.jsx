import React, { use } from 'react';
import { Link } from 'react-router';

const dataPromise= fetch("/public/Data/Data.json").then((res)=>res.json() )
const tagColors = {
    "family friend": "bg-green-100 text-green-700",
   "close friend": "bg-green-100 text-green-700",
    online: "bg-green-100 text-green-700",
    gym: "bg-green-100 text-green-700",
    university: "bg-green-100 text-green-700",
    "project mate": "bg-green-100 text-green-700",
    school: "bg-green-100 text-green-700",
    "best friend": "bg-green-100 text-green-700",
    work: "bg-green-100 text-green-700",
    college: "bg-green-100 text-green-700",
    gaming: "bg-green-100 text-green-700",
    travel: "bg-green-100 text-green-700",
    photography: "bg-green-100 text-green-700",
    neighbor: "bg-green-100 text-green-700",
}

const statusColor = {
  overdue : "bg-red-300 text-red-700",
  "on-track" : "bg-blue-300 text-blue-700",
  "due-soon" : "bg-orange-300 text-orange-700",
}


const Friends = () => {
    const data = use(dataPromise)
    console.log(data)
    return (
        <div className=' bg-[#F8FAFC] py-10'>
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-[#244D3F] text-center'>Your Friend</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-20 mt-8 gap-8'>

            {
                data.map((dati, ind)=>{
                    return <Link to={`/details/${dati.id}`} key={ind} className="card bg-white w-full shadow-sm flex flex-col items-center space-y-3 text-center py-5">
  <figure>
    <img className='rounded-full'
      src={dati.picture}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className='font-bold text-2xl'>{dati.name}</h2>
    <p>{dati.days_since_contact}d ago</p>
    <div className={` ${statusColor[dati.status]} w-max p-2 rounded-xl mx-auto`}>
    <p className='text-[#244D3F]'>{dati.status}</p>
    </div>
    <div className="flex gap-2">
      {
        dati.tags.map((tag, index)=>{
           return <span key={index} className={`text-center w-max p-2 rounded-xl mx-auto ${tagColors[tag]}`}>
                {tag}
            </span>
        })
      }
    </div>
  </div>
</Link>
                })
            }


              </div>
        </div>
        </div>
      
    );
};

export default Friends;