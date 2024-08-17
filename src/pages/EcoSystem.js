import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs } from "flowbite-react";
import ecosystemtab1 from '../assets/images/ecosystem-tabs-1.png'
import ecosystemCta1 from '../assets/images/ecosystem-cta-1.png'
import ecosystemCta2 from '../assets/images/ecosystem-cta-2.png'

const EcoSystem = () => {
  return (
    <div>
      <Topbar/>
      <Header/>
      <div className='md:pt-16 py-10 lg:px-0 px-3'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[48px] text-[32px] md:leading-[52px] leading-[29px] md:mb-4 mb-3 outfit-bold block md:max-w-[600px] mx-auto'>
                          <span className='orange-text2'>TRL Ecosystem</span>
                        </span>
                        <span className='text-[#565656] text-[20px] outfit-regular md:max-w-[1000px] mx-auto block'>
                          Our goal is to rebuild an ecosystem where renters can rent freely anywhere in the world, build a new homeownership financing system that enables buyers of tomorrow to have the flexibility of owning, upscaling, and downscaling at their convenience, and for investors to benefit with the security of real estate, but receive the upside from the ecosystem.
                        </span>
                    </div>
                    <div className='col-span-12 text-center mt-5'>
                        <button className='text-[#fff] bg-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 px-5 rounded-[25px]'>Read our whitepaper</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-5xl mx-auto md:py-10 lg:px-0 px-3 py-10'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <img alt="" className='max-w-[100%] mx-auto' src={ecosystemCta1}/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-5xl mx-auto md:py-10 lg:px-0 px-3 py-10'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <span class="text-[#17271F] max-w-[750px] mx-auto text-center mb-6 md:text-[42px] md:leading-[52px] text-[26px] leading-[34px] outfit-bold block">
                          Revolutionising homeownership, rentals and investments
                        </span>
                        <img alt="" className='max-w-[100%] mx-auto' src={ecosystemCta2}/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-5xl mx-auto md:py-16 lg:px-0 px-3 py-10'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <span class="text-[#17271F] max-w-[750px] mx-auto text-center mb-8 md:text-[42px] md:leading-[52px] text-[26px] leading-[34px] outfit-bold block">
                        Explore our network of partners
                        </span>
                    </div>
                    <div className='col-span-12'>
                      <div className='tabs-pills-eco'>
                        <Tabs aria-label="Pills" variant="pills">
                          <Tabs.Item active title="Product">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F]'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Blockchain network">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F]'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Security">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F]'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Compliance">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F]'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Wallets">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F]'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                        </Tabs>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
};

export default EcoSystem;