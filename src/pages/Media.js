import React from 'react';
import NewsroomBanner from '../assets/images/newsroom-hero.png'
import newsroom1 from '../assets/images/newsroom-1.png';
import newsroom2 from '../assets/images/newsroom-2.png';
import newsroom3 from '../assets/images/newsroom-3.png';
import newsroom4 from '../assets/images/newsroom-4.png';
import newsroom5 from '../assets/images/newsroom-5.png';
import newsroom6 from '../assets/images/newsroom-6.png';
import newsroom7 from '../assets/images/newsroom-7.png';
import newsroom8 from '../assets/images/newsroom-8.png';
import newsroom9 from '../assets/images/newsroom-9.png';
import iconPrev from '../assets/images/icon-previous.png'
import iconNext from '../assets/images/icon-next.png'
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Dropdown } from "flowbite-react";

const Media = () => {
  return (
    <div>
      <Topbar/>
      <Header/>
      <div>
        <div className='max-w-7xl mx-auto mt-5 md:px-0 px-3'>
          <div className='bg-no-repeat bg-cover md:rounded-[50px] p-10 md:m-0 rounded-[12px] relative' style={{ backgroundImage: `url(${NewsroomBanner})` }}>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-12'>
                    <div className='h-[280px] flex flex-col items-start justify-center'>
                        <span className='text-[#fff] md:text-[55px] text-[38px] leading-[42px] md:leading-[60px] outfit-bold block text-center'>Newsroom</span>    
                        <p className='text-[#fff] text-[18px] leading-[26px] mt-3 max-w-[500px]'>Find company news, announcements, and press resources.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:pt-16 md:pb-24 py-10 md:px-0 px-3'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-12 md:gap-6 gap-y-4'>
            <div class="md:mb-5 md:col-span-9 col-span-12">
              <div className='media-filters'>
                <Dropdown label="Category" inline>
                  <Dropdown.Item>Business</Dropdown.Item>
                  <Dropdown.Item>Market</Dropdown.Item>
                  <Dropdown.Item>Trending</Dropdown.Item>
                </Dropdown>
                <Dropdown label="Year" inline>
                  <Dropdown.Item>2021</Dropdown.Item>
                  <Dropdown.Item>2022</Dropdown.Item>
                  <Dropdown.Item>2023</Dropdown.Item>
                  <Dropdown.Item>2024</Dropdown.Item>
                </Dropdown>
                <Dropdown label="Month" inline>
                  <Dropdown.Item>June</Dropdown.Item>
                  <Dropdown.Item>July</Dropdown.Item>
                  <Dropdown.Item>August</Dropdown.Item>
                  <Dropdown.Item>September </Dropdown.Item>
                </Dropdown>
                </div>
            </div>
            <div class="md:mb-5 md:col-span-3 col-span-12 md:text-right">
              <span className='text-[16px] text-[#8A8A8A]'>Showing 1 to 9 of 195 results</span>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom1} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom2} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom3} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom4} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom5} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom6} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom7} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom8} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='md:col-span-4 col-span-12'>
              <div className='cs-boxshadow rounded-[15px]'>
                <img src={newsroom9} className='w-full' alt=""/>
                <div className='p-5'>
                  <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                    3 July 2024
                  </span>
                  <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                    Lorem ipsum dolor sit amet consecte elementum elementum massa
                  </span>
                  <span className='block text-[16px] text-[#565656] mb-2'>
                    Lorem ipsum dolor sit amet consectetur. Urna in in sagittis ac feugiat lacus netus viverra blandit..
                  </span>
                  <a href="/media-details" className='block text-[16px] text-[#FF4A3F] outfit-semibold'>Read more</a>
                </div>
              </div>
            </div>
            <div className='col-span-12 mt-10'>
              <ul className='flex flex-row items-center justify-center gap-x-3'>
                <li>
                  <a href="/">
                    <img src={iconPrev} className='max-w-[36px]' alt=""/>
                  </a>
                </li>
                <li>
                  <a href="/" className='text-[#8A8A8A] border-[2px] border-[#8A8A8A] hover:text-[#FF4A3F] hover:border-[#FF4A3F] transition ease-in-out duration-300 px-3 py-1 rounded-[8px] text-center inline-block'>
                    1
                  </a>
                </li>
                <li>
                  <a href="/" className='text-[#8A8A8A] border-[2px] border-[#8A8A8A] hover:text-[#FF4A3F] hover:border-[#FF4A3F] transition ease-in-out duration-300 px-3 py-1 rounded-[8px] text-center inline-block'>
                    2
                  </a>
                </li>
                <li>
                  <a href="/" className='text-[#8A8A8A] border-[2px] border-[#8A8A8A] hover:text-[#FF4A3F] hover:border-[#FF4A3F] transition ease-in-out duration-300 px-3 py-1 rounded-[8px] text-center inline-block'>
                    3
                  </a>
                </li>
                <li>
                  <a href="/" className='text-[#8A8A8A] border-[2px] border-[#8A8A8A] hover:text-[#FF4A3F] hover:border-[#FF4A3F] transition ease-in-out duration-300 px-3 py-1 rounded-[8px] text-center inline-block'>
                    ...
                  </a>
                </li>
                <li>
                  <a href="/" className='text-[#8A8A8A] border-[2px] border-[#8A8A8A] hover:text-[#FF4A3F] hover:border-[#FF4A3F] transition ease-in-out duration-300 px-3 py-1 rounded-[8px] text-center inline-block'>
                    10
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={iconNext} className='max-w-[36px]' alt=""/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Media;