import React from 'react'
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

export default function Caroussel() {
  return (
    <Marquee className="overflow-hidden" >

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={bein} className="w-40  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={espn} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Cartoon_Network_logo_%281992-2010%29.svg" className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={sky} className="w-56 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-32">
              <img src={bbc} className="w-40 " alt="" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={netflix} className="w-40 " alt="" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={fox} className="w-40 " alt="" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={tbs} className="w-40 " alt="" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={netflix} className="w-40 " alt="" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={nbc} className="w-40 " alt="" />
            </div>
            
            <div className=" flex pr-10 flex-col justify-center items-center h-[150px] mx-5 w-40">
              <img src={hgtv} className="w-40 " alt="" />
            </div>
          </Marquee>
  )
}
