import React from 'react';
import Logo from '../assets/images/logo-wh.png'
import whitePaperIcon from '../assets/images/whitepaper-icon.png'
import navCompany from '../assets/images/nav-company.png'
import navLearn from '../assets/images/nav-learn.png'
import navEcosystem from '../assets/images/nav-ecosystem.png'
import navInvestment1 from '../assets/images/nav-investment-1.png'
import navInvestment2 from '../assets/images/nav-investment-2.png'
import navInvestment3 from '../assets/images/nav-investment-3.png'
import { Navbar, Dropdown} from 'flowbite-react';
import { Link } from 'react-router-dom';

const HeaderWhite = () => {

    const redirectToWhitePaper = () => {
        window.location.href = 'https://whitepaper.trlco.world/trl'; // Replace with your desired external link
    };

  return (
            <div className='col-span-12'>
                <div className='md:block hidden'>
                    <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-1'>
                            <a href="/">
                                <img alt="" className='inline' src={Logo}/>
                            </a>
                        </div>
                        <div className='col-span-7'>
                            <div className="relative group inline mr-4">
                                <a className="px-1" href="#">
                                    <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 lg:text-[16px] text-[14px]">
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
                                <a className="px-1" href="#">
                                    <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Token Ecosystem
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#ffffff] group-hover:text-[#ffffff]">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                                <div className="absolute z-40 hidden lg:min-w-[480px] min-w-[280px] pt-3 transition duration-150 ease-out group-hover:block hover:ease-in left-0 overflow-hidden">
                                    <div className="rounded-[15px] relative z-50  bg-[#fff] border-b-[2px]">
                                        <div className="grid grid-cols-12 py-3 px-2">
                                            <div className="col-span-12">
                                                <div className="relative group lg:px-5 px-3">
                                                    <div className='grid grid-cols-12 items-center'>
                                                        <div className='lg:col-span-6 col-span-12'>
                                                            <ul className='flex flex-col gap-y-4 my-3'>
                                                                <li>
                                                                    <a href="/roadmap">Roadmap</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/ecosystem">TRL Ecosystem</a>
                                                                </li>
                                                                <li>
                                                                <a className='cursor-pointer flex flex-row items-center gap-x-4' onClick={redirectToWhitePaper}>Whitepaper <img className='w-[14px] h-[14px]' src={whitePaperIcon}/></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className='lg:col-span-6 col-span-12'>
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
                                <a className="px-1" href="#">
                                    <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Learn
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#ffffff] group-hover:text-[#ffffff]">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                                <div className="absolute z-40 hidden lg:min-w-[480px] min-w-[280px] pt-3 transition duration-150 ease-out group-hover:block hover:ease-in left-0 overflow-hidden">
                                    <div className="rounded-[15px] relative z-50  bg-[#fff] border-b-[2px]">
                                        <div className="grid grid-cols-12 py-3 px-2">
                                            <div className="col-span-12">
                                                <div className="relative group lg:px-5 px-3">
                                                    <div className='grid grid-cols-12 items-center'>
                                                        <div className='lg:col-span-6 col-span-12'>
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
                                                        <div className='lg:col-span-6 col-span-12'>
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
                                <a className="px-1" href="#">
                                    <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Company
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#ffffff] group-hover:text-[#ffffff]">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                                <div className="absolute z-40 hidden lg:min-w-[480px] min-w-[280px] pt-3 transition duration-150 ease-out group-hover:block hover:ease-in left-0 overflow-hidden">
                                    <div className="rounded-[15px] relative z-50  bg-[#fff] border-b-[2px]">
                                        <div className="grid grid-cols-12 py-3 px-2">
                                            <div className="col-span-12">
                                                <div className="relative group lg:px-5 px-3">
                                                    <div className='grid grid-cols-12 items-start'>
                                                        <div className='lg:col-span-6 col-span-12'>
                                                            <ul className='flex flex-col gap-y-4 my-3'>
                                                                <li>
                                                                    <a href="/about">About</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/media">Media Release</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className='lg:col-span-6 col-span-12'>
                                                            <img alt="" src={navCompany}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <a className="px-1" href="/contact">
                                    <span className="outfit-medium text-[#FFFFFF] transitiom-all ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Contact
                                    </span>
                                </a>
                            

                        </div>
                        <div className='col-span-4 text-right'>
                            <button className="text-[#ffffff] bg-transparent border-[2px] border-[#fff] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px] mr-3">Log In</button>
                            <button className="text-[#FF4A3F] bg-[#fff] border-[2px] border-[#fff] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px]">Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className='md:hidden block'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <Navbar className='bg-transparent' fluid={true} rounded={true}>
                                <Navbar.Brand href="/">
                                    <img
                                    src={Logo}
                                    className="mr-3 h-6 sm:h-9"
                                    alt="Logo"
                                    />
                                </Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse>
                                    <Navbar.Link href="/" active={true}>
                                    Home
                                    </Navbar.Link>
                                    <Navbar.Link href="/live">
                                    Live Extended
                                    </Navbar.Link>
                                    <Navbar.Link href="/invest">
                                    Invest Extended
                                    </Navbar.Link>
                                    <Dropdown label="Token Ecosystem" inline={true}>
                                    <Dropdown.Item href="/roadmap">Roadmap</Dropdown.Item>
                                    <Dropdown.Item href="/ecosystem">TRL Ecosystem</Dropdown.Item>
                                    <Dropdown.Item className='cursor-pointer' onClick={redirectToWhitePaper}>Whitepaper  <img className='w-[14px] h-[14px]' src={whitePaperIcon}/> </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown label="Learn" inline={true}>
                                    <Dropdown.Item href="/blog">Blog</Dropdown.Item>
                                    <Dropdown.Item href="/how-to-buy">How to Buy</Dropdown.Item>
                                    <Dropdown.Item href="/faq">FAQ</Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown label="Company" inline={true}>
                                    <Dropdown.Item href="/about">About</Dropdown.Item>
                                    <Dropdown.Item href="/media">Media Releases</Dropdown.Item>
                                    </Dropdown>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default HeaderWhite;