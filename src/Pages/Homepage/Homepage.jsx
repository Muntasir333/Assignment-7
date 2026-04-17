import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Friends from '../../Components/YourFriend/Friends';
 

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={
                <div className='flex justify-center items-center'>
                    <span className="loading loading-spinner loading-lg "></span>
                    </div>}>
                 <Friends></Friends>
            </Suspense>

           
        </div>
    );
};

export default Homepage;