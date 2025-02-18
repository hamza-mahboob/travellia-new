import React from "react";
import vector1 from "../../assets/images/hero-vector.png";
import Search from "../search/Search";
import heroClients from "../../assets/images/hero-clients.png";

const Hero = () => {
  return (<><Search/></>
    // <div className="container mx-auto px-4">
    //   <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
    //     <div>
    //       <img
    //         src={vector1}
    //         alt="hero-vector"
    //         className="mt-[80px] lg:mt-[167px] w-full max-w-md lg:max-w-full"
    //       />
    //     </div>
    //     <div className="text-white font-bold text-[32px] lg:text-[58px] lg:w-[631px] mt-6 lg:mt-0 mb-10">
    //       No matter where you’re going to, we’ll take you there
    //     </div>
    //     <div className="mt-[20px] lg:mt-[40px] w-full">
    //       <Search />
    //     </div>

    //     <div>
    //       <div className="flex flex-col lg:flex-row items-center my-40 gap-[15px] ">
    //         <img className="h-[36px] w-[181px]" src={heroClients} alt="" />
    //         <p className="text-white text-[12px]">
    //           2,500 people booked Tommorowland Event in last 24 hours
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    
  );
};

export default Hero;
