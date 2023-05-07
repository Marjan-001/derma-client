import React from 'react';
import Banner from './Banner';
import Subsection1 from './Subsection1';
import Treatments from './Treatments/Treatments';

const Home = () => {
    return (
        <div>
            <Banner />
            <Subsection1 />
            <Treatments />
        </div>
    );
};

export default Home;