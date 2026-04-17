import React, { use, useContext, } from 'react';
import { useParams } from 'react-router';
import Call from "../../assets/call.png"
import Text from "../../assets/text.png"
import Video from "../../assets/video.png"
import { SeeContext } from '../../Connection/ConnectionProvide';
import { FaBellSlash } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
  import { ToastContainer, toast } from 'react-toastify';




const dataPromise= fetch("/public/Data/Data.json").then((res)=>res.json() )

const statusColor = {
  overdue : "bg-red-300 text-red-700",
  "on-track" : "bg-blue-300 text-blue-700",
  "due-soon" : "bg-orange-300 text-orange-700",
}


const Details = () => {
    const {id} = useParams();
    const data = use(dataPromise)
    const expectedCard = data.find(dati=>dati.id == id)
     const {action, setAction} = useContext(SeeContext)

const handle = (type)=>{
    setAction([...action, {
        expectedCard, type}])

         toast.success("Connected to your friend!");

    console.log(setAction)
}
    console.log(expectedCard)
    return (
        <div className='lg:flex justify-center bg-[#F8FAFC] min-h-screen p-20 gap-10'>
        <div className=''>
            <div className="card bg-white w-full shadow-sm flex flex-col items-center space-y-3 text-center py-5 ">
  <figure>
    <img className='rounded-full'
      src={expectedCard.picture}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className='font-bold text-2xl'>{expectedCard.name}</h2>
    
   <div className={` ${statusColor[expectedCard.status]} w-max p-2 rounded-xl mx-auto`}>
    <p className='text-[#244D3F]'>{expectedCard.status}</p>
    </div>
    <div className="flex gap-2">
      {
        expectedCard.tags.map((tag, index)=>{
           return <span key={index} className={`text-center w-max p-2 rounded-xl mx-auto bg-green-100 text-green-700 `}>
                {tag}
            </span>
            
        })
      }
    </div>
        <p>{expectedCard.bio}</p>
</div>
 </div>
 <div className='flex flex-col gap-2 mt-2 bg-[#F8FAFC]'>
    <button className='btn w-full bg-white font-bold'><FaBellSlash />Snooze 2 Week</button>
    <button className='btn w-full bg-white font-bold'><FaArchive />Archive</button>
    <button className='btn w-full bg-white font-bold'><MdDelete />
Delete</button>
  </div>
  </div>
            <div className='space-y-12 '>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-5' >
                    <div className=" bg-white w-96  shadow-sm flex flex-col items-center space-y-3 text-center py-5 "><p className='text-3xl font-bold'>{expectedCard.days_since_contact}</p> <p className='font-bold'>Days since Contact</p></div>
                    <div className=" bg-white w-96  shadow-sm flex flex-col items-center space-y-3 text-center py-5 "><p className='text-3xl font-bold'>{expectedCard.goal}</p> <p className='font-bold'>Goal(Days)</p></div>
                    <div className=" bg-white w-96  shadow-sm flex flex-col items-center space-y-3 text-center py-5 "><p className='text-3xl font-bold'>{expectedCard.next_due_date}</p> <p className='font-bold'>Next Date</p></div>
                </div>
                <div className='bg-white mt-5 p-8'>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <div><p className='text-3xl font-bold'>Relationship Goal</p></div>
                        <div><button className='btn'>Edit</button></div>
                    </div>
                    <p>Contact Every {expectedCard.goal} days</p>
                </div>
                <div className='bg-white mt-5 p-8'>
                    <p className='text-3xl font-bold'>Quick Check-In</p> <br></br>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                    <button onClick={()=>handle("call")} className='btn flex flex-col justify-center items-center w-96 h-full p-4'><img className='w-6' src={Call} alt="" />Call</button>
                    <button onClick={()=>handle("text")} className='btn flex flex-col justify-center items-center w-96 h-full p-4'><img className='w-6' src={Text} alt="" />Text</button>
                    <button onClick={()=>handle("video")} className='btn flex flex-col justify-center items-center w-96 h-full p-4'><img className='w-6' src={Video} alt="" />Video</button>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;