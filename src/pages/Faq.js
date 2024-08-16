import React from 'react';
import FaqBanner from '../assets/images/faq-hero.png'
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import iconPrev from '../assets/images/icon-previous.png'
import iconNext from '../assets/images/icon-next.png'
import { Tabs } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div>
      <Topbar/>
      <Header/>
      <div>
        <div className='max-w-7xl mx-auto mt-5 md:px-0 px-3'>
          <div className='bg-no-repeat bg-cover md:rounded-[50px] p-10 md:m-0 rounded-[12px] relative' style={{ backgroundImage: `url(${FaqBanner})` }}>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-12'>
                    <div className='h-[280px] flex flex-col items-start justify-center'>
                        <span className='text-[#fff] md:text-[55px] text-[38px] leading-[42px] md:leading-[60px] outfit-bold block text-center'>Frequently Asked Questions</span>    
                        <p className='text-[#fff] text-[18px] leading-[26px] mt-3 max-w-[500px]'>Discover answers to your questions about combining real estate and cryptocurrency on our innovative platform.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-0 px-3 md:py-14 tabs-pills'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 text-center'>
            <span className='text-[#17271F] md:text-[32px] text-[26px] md:leading-[36px] leading-[29px] md:mb-0 mb-3 outfit-semibold block md:mt-0 mt-5'>Explore topics</span>
            </div>
            <div className='col-span-12 mt-5'>
              <Tabs aria-label="Pills" variant="pills" className='faq-accordion'>
                <Tabs.Item active title="Lorem ipsum 1">
                  <div className='shadow-xl md:pb-10 md:pl-10 md:pr-10 border-[1px] border-[#fff] mt-10 rounded-[15px]'>
                  <Accordion>
                    <Accordion.Panel className=''>
                      <Accordion.Title>Crypto ipsum bitcoin ethereum dogecoin litecoin. Helium tether kava ren.</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 mt-4">
                        Crypto ipsum bitcoin ethereum dogecoin litecoin. Fantom ipsum polygon TRON klaytn. Ox revain celo loopring avalanche ICON dai solana kadena. TRON waves THETA decred shiba-inu. Decred flow polkadot velas chainlink EOS avalanche crypto kadena klaytn. Stacks quant stacks tezos.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className=''>
                      <Accordion.Title>Crypto ipsum bitcoin ethereum dogecoin litecoin. Helium tether kava ren.</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 mt-4">
                        Crypto ipsum bitcoin ethereum dogecoin litecoin. Fantom ipsum polygon TRON klaytn. Ox revain celo loopring avalanche ICON dai solana kadena. TRON waves THETA decred shiba-inu. Decred flow polkadot velas chainlink EOS avalanche crypto kadena klaytn. Stacks quant stacks tezos.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className=''>
                      <Accordion.Title>Crypto ipsum bitcoin ethereum dogecoin litecoin. Helium tether kava ren.</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 mt-4">
                        Crypto ipsum bitcoin ethereum dogecoin litecoin. Fantom ipsum polygon TRON klaytn. Ox revain celo loopring avalanche ICON dai solana kadena. TRON waves THETA decred shiba-inu. Decred flow polkadot velas chainlink EOS avalanche crypto kadena klaytn. Stacks quant stacks tezos.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className=''>
                      <Accordion.Title>Crypto ipsum bitcoin ethereum dogecoin litecoin. Helium tether kava ren.</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 mt-4">
                        Crypto ipsum bitcoin ethereum dogecoin litecoin. Fantom ipsum polygon TRON klaytn. Ox revain celo loopring avalanche ICON dai solana kadena. TRON waves THETA decred shiba-inu. Decred flow polkadot velas chainlink EOS avalanche crypto kadena klaytn. Stacks quant stacks tezos.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className=''>
                      <Accordion.Title>Crypto ipsum bitcoin ethereum dogecoin litecoin. Helium tether kava ren.</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 mt-4">
                        Crypto ipsum bitcoin ethereum dogecoin litecoin. Fantom ipsum polygon TRON klaytn. Ox revain celo loopring avalanche ICON dai solana kadena. TRON waves THETA decred shiba-inu. Decred flow polkadot velas chainlink EOS avalanche crypto kadena klaytn. Stacks quant stacks tezos.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className=''>
                      <Accordion.Title>Crypto ipsum bitcoin ethereum dogecoin litecoin. Helium tether kava ren.</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 mt-4">
                        Crypto ipsum bitcoin ethereum dogecoin litecoin. Fantom ipsum polygon TRON klaytn. Ox revain celo loopring avalanche ICON dai solana kadena. TRON waves THETA decred shiba-inu. Decred flow polkadot velas chainlink EOS avalanche crypto kadena klaytn. Stacks quant stacks tezos.
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Lorem ipsum 2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
                </Tabs.Item>
                <Tabs.Item title="Lorem ipsum 3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
                </Tabs.Item>
                <Tabs.Item title="Lorem ipsum 4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
                </Tabs.Item>
                <Tabs.Item title="Lorem ipsum 5">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
                </Tabs.Item>
                <Tabs.Item title="Lorem ipsum 6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content 6</p>
                </Tabs.Item>
                <Tabs.Item title="Lorem ipsum 7">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content 7</p>
                </Tabs.Item>
                <Tabs.Item title="Lorem ipsum 8">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content 8</p>
                </Tabs.Item>
              </Tabs>
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

export default Faq;