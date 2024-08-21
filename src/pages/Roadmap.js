import React, { useRef } from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import iconPrev from '../assets/images/icon-previous.png'
import iconNext from '../assets/images/icon-next.png'

const RoadMap = () => {
  const carouselRef = useRef(null);

  const goToNextSlide = () => {
    carouselRef.current.next(); // Go to next slide
  };

  const goToPrevSlide = () => {
    carouselRef.current.prev(); // Go to previous slide
  };
  return (
    <div>
      <Topbar/>
      <Header/>
      <div className='md:py-16 py-10 lg:px-0 px-3'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[48px] text-[32px] md:leading-[52px] leading-[29px] md:mb-4 mb-3 outfit-bold block md:max-w-[600px] mx-auto'>
                          <span className='orange-text2'>Roadmap</span>
                        </span>
                        <span className='text-[#565656] text-[20px] outfit-regular md:max-w-[600px] mx-auto block'>
                          Our journey aims to revolutionize real estate investment using Web3 technology. We’re committed to creating a transparent, efficient, and accessible platform for all investors.
                        </span>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto mt-10'>
              <div className='grid grid-cols-12'>
                <div className='md:col-span-4 col-span-12'>
                  
                  <div className="custom-nav mt-5">
                    
                  </div>
                </div>
                <div className='md:col-span-12 col-span-12 relative'>
                  <span className='absolute right-0 top-0 h-full bg-[#fff]/80 z-[2] w-[10%] md:block hidden'></span>
                  <div className='absolute md:left-0 right-0 top-[-20px] md:top-[280px] z-[999999]'>
                    <button onClick={goToPrevSlide} className="custom-prev mr-3">
                        <img src={iconPrev} alt=""/>
                      </button>
                      <button onClick={goToNextSlide} className="custom-next">
                        <img src={iconNext} alt=""/>
                      </button>
                  </div>
                <OwlCarousel ref={carouselRef}
                        className="owl-theme"
                        loop
                        margin={30}
                        nav={false}
                        dots={false}
                        autoplay
                        autoplayTimeout={3000}
                        autoplayHoverPause
                        responsive={{
                            0: {
                            items: 1,
                            },
                            600: {
                            items: 1.2,
                            },
                            1000: {
                            items: 1.1,
                            },
                        }}
                    >
                        <div className='item md:m-0 m-[12px]'>
                          <div className='grid grid-cols-12'>
                            <div className='md:col-span-5 col-span-12'>
                              <span className='block md:text-[90px] text-[50px] leading-[55px] text-[#FF4A3F] outfit-bold md:leading-[100px] md:mt-10'>Q1 <span className='block'>2024</span></span>
                            </div>
                            <div className='md:col-span-7 col-span-12'>

                            <div className='mx-auto relative cs-boxshadow md:m-10 m-8 rounded-[25px] md:p-8 p-6'>
                                <span className='md:text-[32px] outfit-bold text-[#565656]'>Project</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>Finalized Corporate Structure, Legal and Tokenization Framework</li>
                                  <li className='text-[#8A8A8A]'>Signed 74 properties into Property Pool with Promissory Notes (Malaysia) </li>
                                  <li className='text-[#8A8A8A]'>⁠6 F&B and Bangkok Hotel Partnerships onboarded </li>
                                </ul>

                                <span className='md:text-[32px] outfit-bold text-[#565656] mt-6 block'>Product</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>Tokenomics finalized </li>
                                  <li className='text-[#8A8A8A]'>⁠Investor DApp portal and Utility Application prototype under development  </li>
                                </ul>

                                <span className='md:text-[32px] outfit-bold text-[#565656] mt-6 block'>Funding & Marketing</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>⁠Approved Grant offer from SKALE worth $300K</li>
                                  <li className='text-[#8A8A8A]'>Commencement of Marketing Campaign </li>
                                  <li className='text-[#8A8A8A]'>⁠Commencement of Advisory Incubation </li>
                                </ul>
                            </div>

                            </div>
                          </div>
                        </div>
                        <div className='item md:m-0 m-[12px]'>
                          <div className='grid grid-cols-12'>
                            <div className='md:col-span-5 col-span-12'>
                              <span className='block md:text-[90px] text-[50px] leading-[55px] text-[#FF4A3F] outfit-bold md:leading-[100px] md:mt-10'>Q2 <span className='block'>2024</span></span>
                            </div>
                            <div className='md:col-span-7 col-span-12'>

                            <div className='mx-auto relative cs-boxshadow md:m-10 m-8 rounded-[25px] md:p-8 p-6'>
                                <span className='md:text-[32px] outfit-bold text-[#565656]'>Project</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>Finalized Corporate Structure, Legal and Tokenization Framework</li>
                                  <li className='text-[#8A8A8A]'>Signed 74 properties into Property Pool with Promissory Notes (Malaysia) </li>
                                  <li className='text-[#8A8A8A]'>⁠6 F&B and Bangkok Hotel Partnerships onboarded </li>
                                </ul>

                                <span className='md:text-[32px] outfit-bold text-[#565656] mt-6 block'>Product</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>Tokenomics finalized </li>
                                  <li className='text-[#8A8A8A]'>⁠Investor DApp portal and Utility Application prototype under development  </li>
                                </ul>

                                <span className='md:text-[32px] outfit-bold text-[#565656] mt-6 block'>Funding & Marketing</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>⁠Approved Grant offer from SKALE worth $300K</li>
                                  <li className='text-[#8A8A8A]'>Commencement of Marketing Campaign </li>
                                  <li className='text-[#8A8A8A]'>⁠Commencement of Advisory Incubation </li>
                                </ul>
                            </div>

                            </div>
                          </div>
                        </div>
                        <div className='item md:m-0 m-[12px]'>
                          <div className='grid grid-cols-12'>
                            <div className='md:col-span-5 col-span-12'>
                              <span className='block md:text-[90px] text-[50px] leading-[55px] text-[#FF4A3F] outfit-bold md:leading-[100px] md:mt-10'>Q3 <span className='block'>2024</span></span>
                            </div>
                            <div className='md:col-span-7 col-span-12'>

                            <div className='mx-auto relative cs-boxshadow md:m-10 m-8 rounded-[25px] md:p-8 p-6'>
                                <span className='md:text-[32px] outfit-bold text-[#565656]'>Project</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>Finalized Corporate Structure, Legal and Tokenization Framework</li>
                                  <li className='text-[#8A8A8A]'>Signed 74 properties into Property Pool with Promissory Notes (Malaysia) </li>
                                  <li className='text-[#8A8A8A]'>⁠6 F&B and Bangkok Hotel Partnerships onboarded </li>
                                </ul>

                                <span className='md:text-[32px] outfit-bold text-[#565656] mt-6 block'>Product</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>Tokenomics finalized </li>
                                  <li className='text-[#8A8A8A]'>⁠Investor DApp portal and Utility Application prototype under development  </li>
                                </ul>

                                <span className='md:text-[32px] outfit-bold text-[#565656] mt-6 block'>Funding & Marketing</span>
                                <ul className='!list-disc flex flex-col gap-y-3 mt-3 pl-5'>
                                  <li className='text-[#8A8A8A]'>⁠Approved Grant offer from SKALE worth $300K</li>
                                  <li className='text-[#8A8A8A]'>Commencement of Marketing Campaign </li>
                                  <li className='text-[#8A8A8A]'>⁠Commencement of Advisory Incubation </li>
                                </ul>
                            </div>

                            </div>
                          </div>
                        </div>
                        </OwlCarousel>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default RoadMap;