import React from 'react';
import Banner from './Banner';
import Subsection1 from './Subsection1';
import Treatments from './Treatments/Treatments';
import Discount from './Discount';
import Reviews from './Reviews';
import Contact from './Contact';



const Home = () => {
    return (
        <div>
            <Banner />
            <Subsection1 />
            <Treatments />
            <Discount />
            <Reviews />
            <Contact />

        </div>
    );
};

export default Home;