import React from 'react';
import Banner from './Banner';
import AllStories from './AllStories';
import LifeStyleTranding from './LifeStyleTranding';
import PopularTag from './PopularTag';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
            <AllStories></AllStories>
            <LifeStyleTranding></LifeStyleTranding>
            <PopularTag></PopularTag>
            </div>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;