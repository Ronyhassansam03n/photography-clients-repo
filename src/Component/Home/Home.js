import React from 'react';
import Banner from '../Banner/Banner';
import ServiceThree from '../ServiceThree/ServiceThree';
import PartOne from '../Unique/PartOne';
import PartTwo from '../Unique/PartTwo';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ServiceThree></ServiceThree>
          <PartOne></PartOne>
          <PartTwo></PartTwo>
        </div>
    );
};

export default Home;