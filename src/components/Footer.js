import React from 'react';
import iconX from '../assets/images/icon-x.png'
import iconLi from '../assets/images/icon-li.png'
import iconTg from '../assets/images/icon-tg.png'
import iconMd from '../assets/images/icon-md.png'
import iconYt from '../assets/images/icon-yt.png'
import iconIg from '../assets/images/icon-ig.png'
import iconMap from '../assets/images/icon-map.png'

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F2] py-4 md:py-8">
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-12 items-center'>
                <div className='md:col-span-6 col-span-12'>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <div>
                            <img alt="" src={iconMap} />
                        </div>
                        <div className='max-w-[400px]'>
                            C-12-08 Sunway Nexis Jalan PJU 5/1 Kota Damansara,
                            47810 PJ Selangor, Malaysia
                        </div>
                    </div>
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <ul className='flex flex-row md:gap-x-3 gap-x-2 md:justify-end w-full'>
                        <li>
                            <img alt="" src={iconX}/>
                        </li>
                        <li>
                            <img alt="" src={iconLi}/>
                        </li>
                        <li>
                            <img alt="" src={iconTg}/>
                        </li>
                        <li>
                            <img alt="" src={iconMd}/>
                        </li>
                        <li>
                            <img alt="" src={iconYt}/>
                        </li>
                        <li>
                            <img alt="" src={iconIg}/>
                        </li>
                    </ul>
                </div>
                <div className='col-span-12'>
                    <hr className='my-3'/>
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <span className='text-[#565656] text-[14px] outfit-regular'>Copyright © 2024 The Real Lifestyle. All Rights Reserved.</span>
                </div>
                <div className='md:col-span-6 col-span-12'>
                    <ul className='flex flex-row md:gap-x-3 gap-x-2 md:justify-end w-full'>
                        <li>
                            <span className='text-[16px] text-[#17271F] outfit-medium'>Privacy Policy</span>
                        </li>
                        <li>
                            <span className='text-[16px] text-[#17271F] outfit-medium'>Terms & Conditions</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;