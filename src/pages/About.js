import React from 'react';
import AboutBanner from '../assets/images/about-hero.png'
import AboutCta from '../assets/images/about-cta.png'
import icon1 from '../assets/images/abt-icon-1.png'
import icon2 from '../assets/images/abt-icon-2.png'
import icon3 from '../assets/images/abt-icon-3.png'
import icon4 from '../assets/images/abt-icon-4.png'
import icon5 from '../assets/images/abt-icon-5.png'
import icon6 from '../assets/images/abt-icon-6.png'
import iconLiColor from '../assets/images/icon-li-cl.png'
import advisor1 from '../assets/images/advisor-1.png'
import advisor2 from '../assets/images/advisor-2.png'
import advisor3 from '../assets/images/advisor-3.png'
import advisor4 from '../assets/images/advisor-4.png'
import leadership1 from '../assets/images/leadership-1.png'
import leadership2 from '../assets/images/leadership-2.png'
import leadership3 from '../assets/images/leadership-3.png'
import leadership4 from '../assets/images/leadership-4.png'
import leadership5 from '../assets/images/leadership-5.png'
import particleGt from '../assets/images/particle-gr.png'
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div>
      <Topbar/>
      <Header/>
      <div>
        <div className='max-w-7xl mx-auto mt-5 md:px-0 px-3'>
          <div className='bg-no-repeat bg-cover md:rounded-[50px] p-10 md:m-0 rounded-[12px] relative' style={{ backgroundImage: `url(${AboutBanner})` }}>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-12'>
                    <div className='h-[280px] flex flex-col items-start justify-center'>
                        <span className='text-[#fff] md:text-[55px] text-[38px] leading-[42px] md:leading-[60px] outfit-bold block text-center'>About TRL</span>    
                        <p className='text-[#fff] text-[18px] leading-[26px] mt-3 max-w-[500px]'>Understand our efficiency and transparency in building a real estate investing ecosystem.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:py-16 pb-10 pt-5 overflow-x-clip md:px-0 px-3'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='orange-text2 mb-3 md:text-[50px] md:leading-[60px] max-w-[900px] mx-auto text-[30px] outfit-bold block'>
                            At TRL, we seamlessly blend real-world tangibility with blockchain technology
                        </span>
                        <p className='md:text-[18px] text-[16px] text-[#565656] mx-auto max-w-[900px] mb-5 mt-8'>
                          The challenge of securing affordable housing undermines the foundational needs outlined in Maslow’s Hierarchy. Essential needs like shelter should be easily accessible to everyone, yet today’s youth face a stark reality.
                        </p>
                        <p className='md:text-[18px] text-[16px] text-[#565656] mx-auto max-w-[900px] mb-8'>
                          Recognizing these evolving desires, it becomes evident that traditional financial models fail to meet the needs of modern society. These outdated systems, burdened by cumbersome paperwork, convoluted processes, and inconsistent human judgment, are increasingly out of sync with the dynamic lifestyles and flexibility sought by today’s generations. Young people favor mobility, the freedom to invest, and the right to live life on their own terms. This stark contrast to the rigid structures in place underscores the urgent need for reform in how we finance and value our homes.
                        </p>
                        <button className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 px-4 py-2 rounded-[25px]">Learn about $TRLX Ecosystem</button>

                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-7xl mx-auto md:pt-0 md:px-0 px-3 py-10'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                        <img alt="" className='max-w-[900px] w-full mx-auto' src={AboutCta}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pt-10 md:pb-16 md:px-0 px-3 py-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12 md:gap-12 gap-3'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[48px] md:leading-[52px] text-[30px] leading-[34px] outfit-bold block'>Where we are today</span>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                      <div className='md:pl-8 pl-5 relative py-3'>
                        <div className='absolute left-0 top-0 w-[2px] h-full bg-[#E0E0E0]'></div>
                        <img src={icon1} className='mb-3' alt=""/>
                        <span className='block text-[#17271F] text-[24px] outfit-bold mb-1'>$400k in grants</span>
                        <p className='text-[#565656] text-[16px] md:max-w-[300px]'>Awarded and accelerated by SKALE and IOTA.</p>
                      </div>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                      <div className='md:pl-8 pl-5 relative py-3'>
                        <div className='absolute left-0 top-0 w-[2px] h-full bg-[#E0E0E0]'></div>
                        <img src={icon2} className='mb-3' alt=""/>
                        <span className='block text-[#17271F] text-[24px] outfit-bold mb-1'>5 lifestyle partners</span>
                        <p className='text-[#565656] text-[16px] md:max-w-[300px]'>Onboarded F&B, a and Gaming partners into our network.</p>
                      </div>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                      <div className='md:pl-8 pl-5 relative py-3'>
                        <div className='absolute left-0 top-0 w-[2px] h-full bg-[#E0E0E0]'></div>
                        <img src={icon3} className='mb-3' alt=""/>
                        <span className='block text-[#17271F] text-[24px] outfit-bold mb-1'>Featured in 50 news websites</span>
                        <p className='text-[#565656] text-[16px] md:max-w-[300px]'>Our product has been featured by the likes of Bloomberg, CoinTelegraph, and more.</p>
                      </div>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                      <div className='md:pl-8 pl-5 relative py-3'>
                        <div className='absolute left-0 top-0 w-[2px] h-full bg-[#E0E0E0]'></div>
                        <img src={icon4} className='mb-3' alt=""/>
                        <span className='block text-[#17271F] text-[24px] outfit-bold mb-1'>$1M total raised </span>
                        <p className='text-[#565656] text-[16px] md:max-w-[300px]'>Total Investment value from Angels and institutional Investors.</p>
                      </div>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                      <div className='md:pl-8 pl-5 relative py-3'>
                        <div className='absolute left-0 top-0 w-[2px] h-full bg-[#E0E0E0]'></div>
                        <img src={icon5} className='mb-3' alt=""/>
                        <span className='block text-[#17271F] text-[24px] outfit-bold mb-1'>First property acquired</span>
                        <p className='text-[#565656] text-[16px] md:max-w-[300px]'>Purchased and tokenised first property located in Johor, Malaysia.</p>
                      </div>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                      <div className='md:pl-8 pl-5 relative py-3'>
                        <div className='absolute left-0 top-0 w-[2px] h-full bg-[#E0E0E0]'></div>
                        <img src={icon6} className='mb-3' alt=""/>
                        <span className='block text-[#17271F] text-[24px] outfit-bold mb-1'>Fully KYC and audited team</span>
                        <p className='text-[#565656] text-[16px] md:max-w-[300px]'>Our team is fully KYC and audited.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pt-16 md:px-0 px-3 py-8 relative'>
            <img src={particleGt} className='absolute bottom-[-40px] left-[60px]' alt=""/>
            <div className='max-w-7xl mx-auto bg-[#F6F6F2] md:px-10 md:pt-14 md:pb-[100px] md:rounded-[25px]'>
                <div className='grid grid-cols-12 md:gap-x-12 md:gap-y-12'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[42px] md:leading-[52px] text-[30px] leading-[34px] outfit-bold block'>Meet the leadership team</span>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                        <img src={leadership1} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                        <img src={leadership2} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                        <img src={leadership5} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='md:col-span-2 col-span-12'>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                        <img src={leadership3} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='md:col-span-4 col-span-12'>
                        <img src={leadership4} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='col-span-12 text-center md:my-10'>
                        <span className='text-[#17271F] md:text-[34px] md:leading-[38px] text-[22px] leading-[26px] outfit-bold block'>Advisor</span>
                    </div>
                    <div className='md:col-span-3 col-span-12'>
                        <img src={advisor1} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='md:col-span-3 col-span-12'>
                        <img src={advisor2} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='md:col-span-3 col-span-12'>
                        <img src={advisor3} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                    <div className='md:col-span-3 col-span-12'>
                        <img src={advisor4} className='mx-auto mb-2' alt=""/>
                        <span className='block text-center text-[18px] text-[#17271F] outfit-bold'>Adrian Gaffor</span>
                        <span className='block text-center text-[14px] text-[#565656] mb-1 outfit-regular'>Co-founder & CEO</span>
                        <img src={iconLiColor} className='mx-auto' alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:py-16 py-10 md:px-0 px-3'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 text-center'>
                        <span className='text-[#17271F] md:text-[48px] text-[26px] md:leading-[52px] leading-[29px] md:mb-4 mb-3 outfit-bold block md:max-w-[600px] mx-auto'>
                          Revolutionise real estate investments with <span className='orange-text2'>TRL</span>
                        </span>
                        <span className='text-[#565656] text-[20px] outfit-regular md:max-w-[550px] mx-auto block'>
                          Effortlessly manage and grow your portfolio with the power of blockchain technology.
                        </span>
                    </div>
                    <div className='col-span-12 text-center mt-5'>
                        <button className='text-[#fff] bg-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 px-5 rounded-[25px]'>Join the waitlist</button>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
};

export default About;