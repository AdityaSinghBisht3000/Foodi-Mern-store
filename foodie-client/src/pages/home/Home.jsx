import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import Specialdishes from "./Specialdishes";
import Testimonials from "./Testimonials";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <Banner />
      <Categories />
      <Specialdishes />
      <Testimonials />
      <OurServices />
    </div>
  );
};

export default Home;
