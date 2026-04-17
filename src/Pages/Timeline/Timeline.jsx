import React, { useContext } from 'react';
import { SeeContext } from '../../Connection/ConnectionProvide';
import Call from "../../assets/call.png"
import Text from "../../assets/text.png"
import Video from "../../assets/video.png"


const Timeline = () => {
    const {action} = useContext(SeeContext);
    const toady = new Date()

    const imageMap = {
        call : Call,
        text : Text,
        video : Video,
    }
    console.log(action)
    return (
        <div className='bg-[#F8FAFC] p-20'>

            <div className=''>
            {action.length === 0 ? <h2 className='font-bold text-5xl text-center'>No data Found</h2> :
                action.map((item, index)=>(
                    <div key={index} className='flex items-center gap-4 mt-4 bg-white p-5'>
                        <img src={imageMap[item.type]}/>
                           <div>
                <p>{item.type} with <span className='text-xl font-bold'>{item.expectedCard.name}</span></p>
                <p>{toady.toDateString()}</p>
            </div>
            </div>
            )) }
            </div>
         
        </div>
    );
};

export default Timeline;