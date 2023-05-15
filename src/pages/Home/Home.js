import React from 'react';
import Banner from './Banner';
import Subsection1 from './Subsection1';
import Treatments from './Treatments/Treatments';
import Discount from './Discount';
import Reviews from './Reviews';



const Home = () => {
    return (
        <div>
            <Banner />
            <Subsection1 />
            <Treatments />
            <Discount />
            <Reviews />

        </div>
    );
};

export default Home;