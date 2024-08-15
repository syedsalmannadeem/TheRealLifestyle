import React from 'react';
import Logo from '../assets/images/logo.png'
import navCompany from '../assets/images/nav-company.png'
import navLearn from '../assets/images/nav-learn.png'
import navEcosystem from '../assets/images/nav-ecosystem.png'
import navInvestment1 from '../assets/images/nav-investment-1.png'
import navInvestment2 from '../assets/images/nav-investment-2.png'
import navInvestment3 from '../assets/images/nav-investment-3.png'

const Header = () => {
  return (
    <div className="md:px-0 px-3 md:py-4 py-3">
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:block hidden'>
                    <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-1'>
                            <img alt="" className='inline' src={Logo}/>
                        </div>
                        <div className='col-span-6'>
                            <div className="relative group inline mr-4">
                                <a className="px-1" href="e-commerce">
                                    <span className="outfit-medium text-[#000000] transitiom-all ease-in-out duration-300 md:text-[16px]">
                                        Investments
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#000000] group-hover:text-[#000000]">
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
                                    <span className="outfit-medium text-[#000000] transitiom-all ease-in-out duration-300 md:text-[16px]">
                                        Token Ecosystem
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#000000] group-hover:text-[#000000]">
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
                                                                    <span>Roadmap</span>
                                                                </li>
                                                                <li>
                                                                    <span>TRL Ecosystem</span>
                                                                </li>
                                                                <li>
                                                                    <span>Whitepaper</span>
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
                                    <span className="outfit-medium text-[#000000] transitiom-all ease-in-out duration-300 md:text-[16px]">
                                        Company
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#000000] group-hover:text-[#000000]">
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
                                                                    <span>Roadmap</span>
                                                                </li>
                                                                <li>
                                                                    <span>TRL Ecosystem</span>
                                                                </li>
                                                                <li>
                                                                    <span>Whitepaper</span>
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
                            <div className="relative group inline mr-4">
                                <a className="px-1" href="e-commerce">
                                    <span className="outfit-medium text-[#000000] transitiom-all ease-in-out duration-300 md:text-[16px]">
                                        Learn
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#000000] group-hover:text-[#000000]">
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
                                                                    <span>Roadmap</span>
                                                                </li>
                                                                <li>
                                                                    <span>TRL Ecosystem</span>
                                                                </li>
                                                                <li>
                                                                    <span>Whitepaper</span>
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

                        </div>
                        <div className='col-span-5 text-right'>
                            <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px] mr-3">Log In</button>
                            <button className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px]">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;