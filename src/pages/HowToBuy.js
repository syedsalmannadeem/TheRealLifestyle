import React , { useEffect, useRef, useState } from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowToBuyBanner from '../assets/images/howtobuy-banner.png';
import howtobuySteps1 from '../assets/images/steps.png';
import howtobuySteps2 from '../assets/images/steps2.png';
import howtobuySteps3 from '../assets/images/steps3.png';
import howtobuySteps4 from '../assets/images/steps4.png';
import videoPlaceholder from '../assets/images/video-placeholder.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import $ from 'jquery';

const HowToBuy = () => {

  const [currentImage, setCurrentImage] = useState(howtobuySteps1); // Set default image URL

  // Ref to access the OwlCarousel instance
  // const owlRef = useRef(null);

  // Define an array of images for each slide
  const slideImages = [
    howtobuySteps1,
    howtobuySteps2,
    howtobuySteps3,
    howtobuySteps4,
  ];

useEffect(() => {
  // const owl = $(owlRef.current);

  // // Start and reset the progress bar on carousel events
  // owl.on('translate.owl.carousel', () => {
  //   startProgressBar();  // Reset and stop the progress bar
  // });

  // owl.on('translated.owl.carousel', () => {
  //   resetProgressBar();  // Start the progress bar
  // });

  // Initialize the progress bar when the component mounts
  resetProgressBar();

  // return () => {
  //   owl.off('translate.owl.carousel');
  //   owl.off('translated.owl.carousel');
  // };
}, []);

const startProgressBar = () => {
  // Reset the progress bar height to 0%
  console.log("starting progress..")
  $('.progress').stop(true, true).css({
    height: '0%', 
    transition: 'none',
  });
};

const resetProgressBar = () => {
  console.log("resetting progress..")
  // Set the progress bar to fill up over the specified time
  setTimeout(() => {
    $('.progress').css({
      height: '100%', 
      transition: 'height 20s linear', // Adjust this duration to match your autoplay time
    });
  }, 50); // Short delay to ensure reset takes effect before animating
};

// const handleOnTranslated = (event) => {
//   const index = event.item.index;
//   console.log(index);
  // if(index == 0){
  //   setCurrentImage(howtobuySteps1);
  // }else if(index == 1){
  //   setCurrentImage(howtobuySteps2);
  // }else if(index == 2 ){
  //   setCurrentImage(howtobuySteps3);
  // }else if(index == 3 ){
  //   setCurrentImage(howtobuySteps4);
  // }
// };

// Function to handle button click
const handleButtonClick = (imageIndex) => {
  console.log(imageIndex);
  const indexImage = Number(imageIndex);
  if(indexImage === 1){
    setCurrentImage(howtobuySteps1);
  }else if(indexImage === 2){
    setCurrentImage(howtobuySteps2);
  }else if(indexImage === 3 ){
    setCurrentImage(howtobuySteps3);
  }else if(indexImage === 4 ){
    setCurrentImage(howtobuySteps4);
  }
};

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
      {/* <div className='md:py-24 how-to-buy'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='md:col-span-6 col-span-12'>
              
            </div>
            <div className='md:col-span-6 col-span-12'>
              <img src={howtobuySteps} className='md:pt-0 pt-10' alt=""/>
            </div>
          </div>
        </div>
      </div> */}
      <div className='md:py-16 lg:px-0 px-3 py-8 relative'>
            <div className='max-w-7xl mx-auto bg-[#F6F6F2] md:px-10 px-5 py-8 rounded-[12px] md:pt-14 md:pb-[50px] md:rounded-[25px]'>
                <div className='grid grid-cols-12 md:gap-y-12 items-center'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[42px] md:leading-[52px] text-[30px] leading-[34px] outfit-bold block'>Get started with 4 simple steps</span>
                    </div>
                    <div className='md:col-span-6 col-span-12 relative'>
                    <div className='relative'>
      <OwlCarousel
        // ref={owlRef}
        items={1}
        loop={false}
        autoplay
        autoplayTimeout={5000}
        dots={true}
        nav={false}
        className="owl-carousel owlvertical owl-theme"
        animateOut="slideOutUp"
        animateIn="slideInUp"
        margin={10}
        navSpeed={1000}
        slideTransition="ease-in-out"
        responsiveRefreshRate={200}
        mouseDrag={false}
        touchDrag={false}
        // onTranslated={handleOnTranslated}
      >
        <div className="item">
          {/* Slide 1 Content */}
          <div className='relative md:min-h-[420px] md:max-h-[420px] max-h-[400px] min-h-[400px] lg:w-[400px] overflow-y-scroll smooth-scroll'>
            <div className='md:pb-14 pb-8 z-[2] md:pl-0 pl-8'>
              <span className='block text-[#FF4A3F] outfit-bold mb-2 md:md:text-[24px] text-[20px]'>1 - Start</span>
              <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px] leading-[1.1]'>Create wallet in Base</span>
              <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[400px]'>Create a Coinbase wallet, or import an existing wallet if you have an existing Metamask or Trust Wallet. All you need to do is add Base Network.</span>
              <button onClick={() => handleButtonClick('1')} className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-1 px-3 rounded-[25px]">Create now</button>
            </div>
          </div>
        </div>
        <div className="item">
          {/* Slide 2 Content */}
          <div className='relative md:min-h-[420px] md:max-h-[420px] max-h-[400px] min-h-[400px] lg:w-[400px] overflow-y-scroll smooth-scroll'>
            <div className='md:pb-14 pb-8 z-[2] md:pl-0 pl-8'>
              <span className='block text-[#FF4A3F] outfit-bold mb-2 md:md:text-[24px] text-[20px]'>2 - Buy</span>
              <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px] leading-[1.1]'>Buy Crypto</span>
              <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[400px]'>Buy some USDT, or send some USDT to your wallet on the Base Network which can be used to buy $TRLX tokens. Remember to buffer some additional USDT (e.g. 1 USDT) to pay for gas.</span>
              <button onClick={() => handleButtonClick('2')} className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-1 px-3 rounded-[25px]">Complete KYC</button>
            </div>
          </div>
        </div>
        <div className="item">
          {/* Slide 3 Content */}
          <div className='relative md:min-h-[420px] md:max-h-[420px] max-h-[400px] min-h-[400px] lg:w-[400px] overflow-y-scroll smooth-scroll'>
            <div className='md:pb-14 pb-8 z-[2] md:pl-0 pl-8'>
              <span className='block text-[#FF4A3F] outfit-bold mb-2 md:md:text-[24px] text-[20px]'>3 - Set up</span>
              <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px] leading-[1.1]'>Create account and complete KYC in IXSWAP</span>
              <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[400px]'>Complete your KYC in IX Swap, by entering your personal information, and ID. Do buffer 1-2 days to get this approved.</span>
              <button onClick={() => handleButtonClick('3')} className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-1 px-3 rounded-[25px]">Complete KYC</button>
            </div>
          </div>
        </div>
        <div className="item">
          {/* Slide 3 Content */}
          <div className='relative md:min-h-[420px] md:max-h-[420px] max-h-[400px] min-h-[400px] lg:w-[400px] overflow-y-scroll smooth-scroll'>
            <div className='md:pb-14 pb-8 z-[2] md:pl-0 pl-8'>
              <span className='block text-[#FF4A3F] outfit-bold mb-2 md:md:text-[24px] text-[20px]'>4 - Done</span>
              <span className='block text-[#17271F] outfit-bold mb-2 md:text-[32px] text-[26px] leading-[1.1]'>Invest in IXSwap RWA Launchpad</span>
              <span className='block text-[#565656] md:text-[18px] text-[15px] mb-5 md:max-w-[400px]'>Once KYC is passed, head to the TRLX public sale page, click Invest to send in your desired funds, and then wait till the funding round is completed to claim your $TRLX!</span>
              <button onClick={() => handleButtonClick('4')} className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-1 px-3 rounded-[25px]">Start now</button>
            </div>
          </div>
        </div>
      </OwlCarousel>

                      <div className="progress-bar lg:left-[30px] md:left-[-20px] left-0">
                        <div className="progress"></div>
                        <div className='progress-top'></div>
                      </div>
                    </div>
                    
                    </div>
                    <div className='md:col-span-6 col-span-12'>
                      <img src={currentImage} className='md:pt-0 pt-10' alt=""/>
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