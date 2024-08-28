import React from 'react';
import Logo from '../assets/images/logo.png'
import whitePaperIcon from '../assets/images/whitepaper-icon.png'
import navCompany from '../assets/images/nav-company.png'
import navLearn from '../assets/images/nav-learn.png'
import navEcosystem from '../assets/images/nav-ecosystem.png'
import navInvestment1 from '../assets/images/nav-investment-1.png'
import navInvestment2 from '../assets/images/nav-investment-2.png'
import navInvestment3 from '../assets/images/nav-investment-3.png'
import { Navbar, Dropdown} from 'flowbite-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const redirectToWhitePaper = () => {
        window.open('https://whitepaper.trlco.world/trl', '_blank');
    };
  return (
    <div className="lg:px-0 px-3 md:py-4 py-3 header-colored">
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:block hidden'>
                    <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-1'>
                            
                            <Link to={`/`} className='hover:text-[#000]/50 transition-all duration-300 ease-in-out'>
                                <img alt="" className='inline' src={Logo}/>
                            </Link>
                        </div>
                        <div className='col-span-7'>
                            <div className="relative group inline mr-4">
                                <a className="px-1" href="#">
                                    <span className="outfit-medium text-[#000000] transitiom-all hover:text-[#000000]/50 ease-in-out duration-300 lg:text-[16px] text-[14px]">
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
                                                            <div className='relative cursor-pointer'>
                                                                <span className='absolute left-[10px] top-[10px] text-[14px] outfit-medium'>United Arab Emirates</span>
                                                                <img alt="" src={navInvestment1}/>
                                                            </div>
                                                        </div>
                                                        <div className='md:col-span-4'>
                                                            <div className='relative cursor-pointer'>
                                                                <span className='absolute left-[10px] top-[10px] text-[14px] outfit-medium'>Kuala Lumpur</span>
                                                                <span className='bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[33px] text-[12px]'>Coming Soon</span>
                                                                <img alt="" src={navInvestment2}/>
                                                            </div>
                                                        </div>
                                                        <div className='md:col-span-4'>
                                                            <div className='relative cursor-pointer'>
                                                                <span className='absolute left-[10px] top-[10px] text-[14px] outfit-medium'>Bali</span>
                                                                <span className='bg-[#088AB5] text-[#fff] rounded-[5px] left-[10px] px-1 py-[2px] absolute top-[33px] text-[12px]'>Coming Soon</span>
                                                                <img alt="" src={navInvestment3}/>
                                                            </div>
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
                                    <span className="outfit-medium text-[#000000] transitiom-all hover:text-[#000000]/50 ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Token Ecosystem
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#000000] group-hover:text-[#000000]">
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
                                                                    <Link className='hover:text-[#000]/50 transition-all duration-300 ease-in-out' to={`/roadmap`}>Roadmap</Link>
                                                                </li>
                                                                <li>
                                                                    <Link className='hover:text-[#000]/50 transition-all duration-300 ease-in-out' to={`/ecosystem`}>TRL Ecosystem</Link>
                                                                </li>
                                                                <li>
                                                                    <Link className='cursor-pointer hover:text-[#000]/50 transition-all duration-300 ease-in-out flex flex-row items-center gap-x-4' onClick={redirectToWhitePaper}>Whitepaper <img className='w-[14px] h-[14px]' src={whitePaperIcon}/></Link>
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
                                    <span className="outfit-medium text-[#000000] transitiom-all hover:text-[#000000]/50 ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Learn
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#000000] group-hover:text-[#000000]">
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
                                                                    <Link className='hover:text-[#000]/50 transition-all duration-300 ease-in-out' to={`/blog`}>Blog</Link>
                                                                </li>
                                                                <li>
                                                                    <Link className='hover:text-[#000]/50 transition-all duration-300 ease-in-out' to={`/how-to-buy`}>How to buy</Link>
                                                                </li>
                                                                <li>
                                                                    <Link className='hover:text-[#000]/50 transition-all duration-300 ease-in-out' to={`/faq`}>FAQ</Link>
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
                                    <span className="outfit-medium text-[#000000] transitiom-all hover:text-[#000000]/50 ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Company
                                    </span>
                                    <svg fill="currentcolor" viewBox="0 0 20 20" className="inline w-4 h-4 mt-0 group-hover:rotate-180 text-[#000000] group-hover:text-[#000000]">
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
                                                                    <Link className='hover:text-[#000]/50 transition-all duration-300 ease-in-out' to={`/about`}>About</Link>
                                                                </li>
                                                                <li>
                                                                    <Link className='hover:text-[#000]/50 transition-all duration-300 ease-in-out' to={`/media`}>Media Release</Link>
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
                            <Link className="px-1" to={`/contact`}>
                                    <span className="outfit-medium text-[#000000] transitiom-all hover:text-[#000000]/50 ease-in-out duration-300 lg:text-[16px] text-[14px]">
                                        Contact
                                    </span>
                                </Link>
                            

                        </div>
                        <div className='col-span-4 text-right'>
                            <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px] mr-3">Log In</button>
                            <button className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 rounded-[25px]">Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 md:hidden block'>
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

export default Header;