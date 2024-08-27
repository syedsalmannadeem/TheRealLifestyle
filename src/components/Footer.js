import React from 'react';
import iconX from '../assets/images/icon-x.png'
import telegramIcon from '../assets/images/telegram-icon.png'
import iconLi from '../assets/images/icon-li.png'
import iconTg from '../assets/images/icon-tg.png'
import iconMd from '../assets/images/icon-md.png'
import iconYt from '../assets/images/icon-yt.png'
import iconIg from '../assets/images/icon-ig.png'
import iconMap from '../assets/images/icon-map.png'

const Footer = () => {
  return (
    
    <footer className="bg-[#F6F6F2] py-6 md:py-8 lg:px-0 px-3">
        <img className='md:right-[20px] right-[10px] fixed md:bottom-[20px] bottom-[10px] z-[99999]' src={telegramIcon}/>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-12 items-center'>
                <div className='md:col-span-6 col-span-12 md:order-1 order-1'>
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
                <div className='md:col-span-6 col-span-12 md:order-2 order-2'>
                    <ul className='flex flex-row md:gap-x-3 gap-x-2 md:justify-end w-full md:mt-0 mt-4'>
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
                <div className='col-span-12 md:order-3 order-3'>
                    <hr className='md:my-3 my-5'/>
                </div>
                <div className='md:col-span-6 col-span-12 md:order-4 order-5'>
                    <span className='text-[#565656] text-[14px] outfit-regular block'>Copyright © 2024 The Real Lifestyle. All Rights Reserved.</span>
                </div>
                <div className='md:col-span-6 col-span-12 md:order-5 order-4'>
                    <ul className='flex flex-row md:gap-x-3 gap-x-2 md:justify-end w-full md:mb-0 mb-2'>
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