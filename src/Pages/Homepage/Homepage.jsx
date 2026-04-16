import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Friends from '../../Components/YourFriend/Friends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback= {<span className="loading loading-spinner loading-lg"></span>}>
                 <Friends></Friends>
            </Suspense>
           
        </div>
    );
};

export default Homepage;