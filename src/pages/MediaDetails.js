import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mainImage from '../assets/images/news-details.png';
import sliderImage from '../assets/images/slider-stats.png';
import iconDownloads from '../assets/images/icon-downloads.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const MediaDetails = () => {
  return (
    <div>
      <Topbar/>
      <Header/>
      <div>
            <div className='max-w-5xl mx-auto md:pt-10 md:px-0 px-3 py-6'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <img alt="" className='max-w-[100%] w-full mx-auto' src={mainImage}/>
                    </div>
                    <div className='col-span-12 mt-5 mb-5'>
                      <span className='bg-[#F6F6F2] px-2 py-1 inline-block mr-3'>Category</span>
                      <span className='inline-block text-[#8A8A8A] text-[14px]'>3 July 2024</span>
                      <span className='block text-[#17271F] text-[48px] outfit-bold leading-[52px] mt-5 mb-5'>
                        Lorem ipsum dolor sit amet consecte elementum elementum massa
                      </span>
                      <p className='md:text-[18px] text-[#565656] mb-5'>
                        Lorem ipsum dolor sit amet consectetur. Imperdiet arcu volutpat pharetra lorem mattis arcu. Velit tempus felis odio sed. Diam nulla massa arcu penatibus cursus enim. Varius mi tortor etiam diam aliquam. Suspendisse massa pulvinar ut vestibulum lobortis.
                      </p>
                      <p className='md:text-[18px] text-[#565656] mb-5'>
                      Sit commodo eget bibendum lectus. Nullam lorem quis tristique massa. Malesuada nascetur aenean aliquet vulputate. Vivamus suscipit aliquam sit sapien ultricies urna eget risus senectus. Et viverra est mus mauris. Congue maecenas tristique egestas mattis enim odio porttitor.
                      </p>
                      <span className='md:text-[20px] text-[#565656] outfit-medium'>Eu viverra tempor duis dui:</span>
                      
                      <span className='block md:text-[18px] text-[#565656]'>1. Accumsan turpis velit in nunc rhoncus bibendum. Elementum quam pretium lorem nunc justo morbi.</span>
                      <span className='block md:text-[18px] text-[#565656]'>2. Faucibus nunc dolor at augue sagittis eu morbi fringilla.</span>
                      <span className='block md:text-[18px] text-[#565656] mb-5'>3. Quis sagittis massa cras risus in blandit nibh</span>


                      <span className='block mb-5 text-[#565656] text-[28px] outfit-semibold relative md:pl-10 pl-6'>
                        <div className='absolute left-0 top-0 h-full w-[4px] bg-[#8A8A8A]'></div>
                      “ Crypto ipsum bitcoin ethereum dogecoin litecoin. Quant nexo terraUSD secret revain flow eCash. BitTorrent elrond USD kava stellar decred kadena uniswap TRON quant. ”
                      </span>

                      <p className='md:text-[18px] text-[#565656] mb-5'>
                        Sit mi eu tortor aliquam cursus. Et ultricies porttitor nisi viverra quisque. Velit morbi vitae pharetra amet congue purus. Purus sapien aliquet a lectus posuere ut id. Nunc nulla commodo sit cursus risus. At sit vestibulum eu volutpat. Amet cras enim morbi fringilla laoreet. Viverra nisl a pellentesque commodo quis cras scelerisque dictumst non. Non habitant aenean amet in scelerisque hac consectetur. Diam imperdiet aenean duis malesuada cursus urna scelerisque gravida congue. 
                      </p>


                    </div>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='md:col-span-8 col-span-12 mb-5'>
                  <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={30}
                        nav={false}
                        dots={true}
                        autoplay
                        autoplayTimeout={3000}
                        autoplayHoverPause
                        responsive={{
                            0: {
                            items: 1,
                            },
                            600: {
                            items: 1,
                            },
                            1000: {
                            items: 1,
                            },
                        }}
                    >
                        <div className='item'>
                            <img src={sliderImage} alt=""/>
                        </div>
                        <div className='item'>
                            <img src={sliderImage} alt=""/>
                        </div>
                        <div className='item'>
                            <img src={sliderImage} alt=""/>
                        </div>
                        <div className='item'>
                            <img src={sliderImage} alt=""/>
                        </div>
                        <div className='item'>
                            <img src={sliderImage} alt=""/>
                        </div>
                        <div className='item'>
                            <img src={sliderImage} alt=""/>
                        </div>
                        <div className='item'>
                            <img src={sliderImage} alt=""/>
                        </div>
                        
                        </OwlCarousel>
                  </div>
                  <div className='md:col-span-8 col-span-12 mb-10'>
                    <span className='block md:text-[28px] text-[20px] outfit-bold text-[#17271F] mb-3'>Downloads</span>
                    <ul className='flex flex-row gap-x-3'>
                      <li className='border-[2px] border-[#E0E0E0] md:py-6 md:px-4 px-3 py-3 w-[200px] md:w-[200px] rounded-[10px]'>
                        <img className='mb-4' src={iconDownloads} alt=''/>
                        <span className='md:text-[16px] text-[14px] text-[#FF4A3F] outfit-medium'>Investor memo</span>
                      </li>
                      <li className='border-[2px] border-[#E0E0E0] md:py-6 md:px-4 px-3 py-3 w-[200px] md:w-[200px] rounded-[10px]'>
                        <img className='mb-4' src={iconDownloads} alt=''/>
                        <span className='md:text-[16px] text-[14px] text-[#FF4A3F] outfit-medium'>Investor memo</span>
                      </li>
                      <li className='border-[2px] border-[#E0E0E0] md:py-6 md:px-4 px-3 py-3 w-[200px] md:w-[200px] rounded-[10px]'>
                        <img className='mb-4' src={iconDownloads} alt=''/>
                        <span className='md:text-[16px] text-[14px] text-[#FF4A3F] outfit-medium'>Investor memo</span>
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

export default MediaDetails;