import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowToBuyBanner from '../assets/images/howtobuy-banner.png';
import howtobuySteps from '../assets/images/steps.png';
import particleBar from '../assets/images/particle-bar.png';
import videoPlaceholder from '../assets/images/video-placeholder.png';

const HowToBuy = () => {
  return (
    <div>
      <Topbar/>
      <Header/>
      <div>
        <div className='max-w-7xl mx-auto md:mt-5 lg:px-0 px-3'>
          <div className='bg-no-repeat bg-cover md:rounded-[50px] p-10 md:m-0 rounded-[12px] relative' style={{ backgroundImage: `url(${HowToBuyBanner})` }}>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-12'>
                    <div className='h-[280px] flex flex-col items-start justify-center'>
                        <span className='text-[#fff] md:text-[55px] text-[38px] leading-[42px] md:leading-[60px] outfit-bold block text-center'>Learn with TRL</span>    
                        <p className='text-[#fff] text-[18px] leading-[26px] mt-3 max-w-[500px]'>Empowering everyone to own and build wealth through Real Estate.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:py-16 lg:px-0 px-3 py-8 relative'>
            <div className='max-w-7xl mx-auto bg-[#F6F6F2] md:px-10 px-5 py-8 rounded-[12px] md:pt-14 md:pb-[50px] md:rounded-[25px]'>
                <div className='grid grid-cols-12 md:gap-y-12 items-center'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[42px] md:leading-[52px] text-[30px] leading-[34px] outfit-bold block'>Get started with 4 simple steps</span>
                    </div>
                    <div className='md:col-span-6 col-span-12 relative'>
                    <img src={particleBar} className='h-[100%] absolute left-0 top-0' alt=""/>
                    <div className='absolute left-[20px] md:block hidden bottom-0 h-[200px] z-[1] w-full bg-[#F6F6F2]/70'></div>
                      <div className='relative md:min-h-[470px] md:max-h-[470px] max-h-[250px] min-h-[250px] overflow-y-scroll'>
                        
                        
                        <div className='md:pb-14 pb-8 md:pl-12 pl-8 z-[2]'>
                          <span className='block text-[#FF4A3F] outfit-bold mb-2 md:md:text-[24px] text-[20px]'>1 - Start</span>
                          <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Create wallet in Base</span>
                          <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5'>Create a Coinbase wallet, or import an existing wallet if you have an existing Metamask or Trust Wallet. All you need to do is add Base Network.</span>
                          <button className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 px-4 rounded-[25px]">Create now</button>
                        </div>
                        <div className='md:pb-14 pb-8 md:pl-12 pl-8 z-[2]'>
                          <span className='block text-[#FF4A3F] outfit-bold mb-2 md:text-[24px] text-[20px]'>1 - Start</span>
                          <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Create wallet in Base</span>
                          <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5'>Create a Coinbase wallet, or import an existing wallet if you have an existing Metamask or Trust Wallet. All you need to do is add Base Network.</span>
                          <button className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 px-4 rounded-[25px]">Create now</button>
                        </div>
                        <div className='md:pb-14 pb-8 md:pl-12 pl-8 z-[2]'>
                          <span className='block text-[#FF4A3F] outfit-bold mb-2 md:text-[24px] text-[20px]'>1 - Start</span>
                          <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px]'>Create wallet in Base</span>
                          <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5'>Create a Coinbase wallet, or import an existing wallet if you have an existing Metamask or Trust Wallet. All you need to do is add Base Network.</span>
                          <button className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 px-4 rounded-[25px]">Create now</button>
                        </div>
                      </div>
                    </div>
                    <div className='md:col-span-6 col-span-12'>
                      <img src={howtobuySteps} className='md:pt-0 pt-10' alt=""/>
                    </div>
                    <div className='col-span-12 text-center'>
                      <span className='text-[#17271F] md:text-[24px] text-[20px] md:mt-0 mt-8 block md:mb-0 mb-4 outfit-semibold'>
                        Need more guidance?
                        <span className='block'>Watch the full tutorial video here</span>
                      </span>
                    </div>
                    <div className='col-span-12 text-center'>
                      <img src={videoPlaceholder} className='mx-auto max-w-[100%]' alt=""/>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
};

export default HowToBuy;