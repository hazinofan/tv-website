import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import bbc from '../assets/BBC-Logo.png'
import bein from '../assets/bein.png'
import espn from '../assets/espn.png'
import netflix from '../assets/netflix.png'
import fox from '../assets/foxnews.png'
import tbs from '../assets/tbs.png'
import sky from '../assets/sky.png'
import hgtv from '../assets/hgtv.png'
import nbc from '../assets/NBC_logo_2022.svg'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import cn from '../assets/cn.png'

export default function Caroussel() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <Marquee className="overflow-hidden" data-aos="fade-down" data-aos-delay="800">

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={bein} className="w-40" alt="Bein Sports Logo" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={espn} className="w-40" alt="ESPN Logo" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={cn} className="w-40 " alt="Cartoon Network Logo" width={100}/>
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={sky} className="w-56 " alt="Sky Logo" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={bbc} className="w-40 " alt="BBC Logo" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={netflix} className="w-40 " alt="Netflix Logo" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={fox} className="w-40 " alt="Fox News Logo" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={tbs} className="w-40 " alt="TBS Logo" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={nbc} className="w-40 " alt="NBC Logo" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={hgtv} className="w-40 " alt="HGTV Logo" />
            </div>
          </Marquee>
  )
}
