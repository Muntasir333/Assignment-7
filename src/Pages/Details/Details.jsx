import React, { use, useContext, } from 'react';
import { useParams } from 'react-router';
import Call from "../../assets/call.png"
import Text from "../../assets/text.png"
import Video from "../../assets/video.png"
import { SeeContext } from '../../Connection/ConnectionProvide';

const dataPromise= fetch("/public/Data/Data.json").then((res)=>res.json() )


const Details = () => {
    const {id} = useParams();
    const data = use(dataPromise)
    const expectedCard = data.find(dati=>dati.id == id)
     const {action, setAction} = useContext(SeeContext)

const handle = (type)=>{
    setAction([...action, {
        expectedCard, type}])

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
    
    <div className='bg-green-400  w-max p-2 rounded-xl mx-auto'>
    <p className='text-[#244D3F]'>{expectedCard.status}</p>
    </div>
    <div className="flex gap-2">
      {
        expectedCard.tags.map((tag, index)=>{
           return <span key={index} className={`text-center w-max p-2 rounded-xl mx-auto `}>
                {tag}
            </span>
            
        })
      }
    </div>
        <p>{expectedCard.bio}</p>
</div>
 </div>
 <div className='flex flex-col gap-2 mt-2 bg-[#F8FAFC]'>
    <button className='btn w-full bg-white'>Snooze 2 Week</button>
    <button className='btn w-full bg-white'>Archive</button>
    <button className='btn w-full bg-white'>Delete</button>
  </div>
  </div>
            <div className='space-y-12 '>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-5' >
                    <div className=" bg-white w-96  shadow-sm flex flex-col items-center space-y-3 text-center py-5 "><p>{expectedCard.days_since_contact}</p> <p>Days since Contact</p></div>
                    <div className=" bg-white w-96  shadow-sm flex flex-col items-center space-y-3 text-center py-5 "><p>{expectedCard.goal}</p> <p>Goal(Days)</p></div>
                    <div className=" bg-white w-96  shadow-sm flex flex-col items-center space-y-3 text-center py-5 "><p>{expectedCard.next_due_date}</p> <p>Next Date</p></div>
                </div>
                <div className='bg-white mt-5 p-8'>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <div><p>Relationship Goal</p></div>
                        <div><button className='btn'>Edit</button></div>
                    </div>
                    <p>Contact Every {expectedCard.goal} days</p>
                </div>
                <div className='bg-white mt-5 p-8'>
                    <p>Quick Check-In</p> <br></br>
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