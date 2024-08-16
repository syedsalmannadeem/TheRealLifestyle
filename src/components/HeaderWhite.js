import React from 'react';
import Logo from '../assets/images/logo-wh.png'
import navCompany from '../assets/images/nav-company.png'
import navLearn from '../assets/images/nav-learn.png'
import navEcosystem from '../assets/images/nav-ecosystem.png'
import navInvestment1 from '../assets/images/nav-investment-1.png'
import navInvestment2 from '../assets/images/nav-investment-2.png'
import navInvestment3 from '../assets/images/nav-investment-3.png'

const HeaderWhite = () => {
  return (
    <div className='col-span-12 md:block hidden'>
        <div className='grid grid-cols-12 items-center'>
            <div className='col-span-1'>
                <a href="/">
                    <img alt="" className='inline' src={Logo}/>
                </a>
            </div>
            <div className='col-span-6'>
                <div className="relative group inline mr-4">
                    <a className="px-1" href="e-commerce">
                        <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 md:text-[16px]">
                            Investments
                        </span>
                        <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#ffffff] group-hover:text-[#ffffff]">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <div className="absolute z-40 hidden min-w-[580px] pt-3 transition duration-150 ease-out group-hover:block hover:ease-in left-0 overflow-hidden">
                        <div className="rounded-[15px] relative z-50  bg-[#fff] border-b-[2px]">
                            <div className="grid grid-cols-12 py-3 px-2">
                                <div className="col-span-12">
                                    <div className="relative group md:p-3">
                                        <div className='grid grid-cols-12 items-center gap-x-4'>
                                            <div className='md:col-span-4'>
                                                <img alt="" src={navInvestment1}/>
                                            </div>
                                            <div className='md:col-span-4'>
                                                <img alt="" src={navInvestment2}/>
                                            </div>
                                            <div className='md:col-span-4'>
                                                <img alt="" src={navInvestment3}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="relative group inline mr-4">
                    <a className="px-1" href="e-commerce">
                        <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 md:text-[16px]">
                            Token Ecosystem
                        </span>
                        <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#ffffff] group-hover:text-[#ffffff]">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <div className="absolute z-40 hidden min-w-[480px] pt-3 transition duration-150 ease-out group-hover:block hover:ease-in left-0 overflow-hidden">
                        <div className="rounded-[15px] relative z-50  bg-[#fff] border-b-[2px]">
                            <div className="grid grid-cols-12 py-3 px-2">
                                <div className="col-span-12">
                                    <div className="relative group md:px-5">
                                        <div className='grid grid-cols-12 items-center'>
                                            <div className='md:col-span-6'>
                                                <ul className='flex flex-col gap-y-4 my-3'>
                                                    <li>
                                                        <a href="/roadmap">Roadmap</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ecosystem">TRL Ecosystem</a>
                                                    </li>
                                                    <li>
                                                        <a href="/whitepaper">Whitepaper</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='md:col-span-6'>
                                                <img alt="" src={navEcosystem}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="relative group inline mr-4">
                    <a className="px-1" href="e-commerce">
                        <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 md:text-[16px]">
                            Learn
                        </span>
                        <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#ffffff] group-hover:text-[#ffffff]">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <div className="absolute z-40 hidden min-w-[480px] pt-3 transition duration-150 ease-out group-hover:block hover:ease-in left-0 overflow-hidden">
                        <div className="rounded-[15px] relative z-50  bg-[#fff] border-b-[2px]">
                            <div className="grid grid-cols-12 py-3 px-2">
                                <div className="col-span-12">
                                    <div className="relative group md:px-5">
                                        <div className='grid grid-cols-12 items-center'>
                                            <div className='md:col-span-6'>
                                                <ul className='flex flex-col gap-y-4 my-3'>
                                                    <li>
                                                        <a href="/blog">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="/how-to-buy">How to buy</a>
                                                    </li>
                                                    <li>
                                                        <a href="/faq">FAQ</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='md:col-span-6'>
                                                <img alt="" src={navLearn}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="relative group inline mr-4">
                    <a className="px-1" href="e-commerce">
                        <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 md:text-[16px]">
                            Company
                        </span>
                        <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#ffffff] group-hover:text-[#ffffff]">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <div className="absolute z-40 hidden min-w-[480px] pt-3 transition duration-150 ease-out group-hover:block hover:ease-in left-0 overflow-hidden">
                        <div className="rounded-[15px] relative z-50  bg-[#fff] border-b-[2px]">
                            <div className="grid grid-cols-12 py-3 px-2">
                                <div className="col-span-12">
                                    <div className="relative group md:px-5">
                                        <div className='grid grid-cols-12 items-center'>
                                            <div className='md:col-span-6'>
                                                <ul className='flex flex-col gap-y-4 my-3'>
                                                    <li>
                                                        <a href="/about">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="/media">Media Release</a>
                                                    </li>
                                                    <li>
                                                        <a href="/partners">Partners</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='md:col-span-6'>
                                                <img alt="" src={navCompany}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                

            </div>
            <div className='col-span-5 text-right'>
                <button className="text-[#ffffff] bg-transparent border-[2px] border-[#fff] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px] mr-3">Log In</button>
                <button className="text-[#FF4A3F] bg-[#fff] border-[2px] border-[#fff] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px]">Sign Up</button>
            </div>
        </div>
    </div>
  );
};

export default HeaderWhite;