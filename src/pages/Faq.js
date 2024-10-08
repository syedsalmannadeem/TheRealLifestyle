import React, { useState, useEffect, useRef } from 'react';
import FaqBanner from '../assets/images/faq-hero.png';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, Accordion } from "flowbite-react";

const Faq = () => {
  const [sections, setSections] = useState([]);
  const [articles, setArticles] = useState([]);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const tabsRef = useRef(null);

  // Fetch sections
  useEffect(() => {
    fetch('https://thereallifestyle.zendesk.com/api/v2/help_center/categories/36562854739481/sections.json', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('yenray.ng@trlco.world/token:O4N6Fysz582712RvT2Aux2gvbdabCExJOoh966nK')
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Fetched Sections:', data.sections);
      setSections(data.sections);
      // Set the first section as active by default
      if (data.sections.length > 0) {
        setActiveSectionId(data.sections[0].id);
      }
    })
    .catch(error => console.error('Error fetching sections:', error));
  }, []);

  // Fetch articles for the active section
  useEffect(() => {
    if (activeSectionId) {
      console.log(`Fetching articles for section ID: ${activeSectionId}`);
      fetch(`https://thereallifestyle.zendesk.com/api/v2/help_center/sections/${activeSectionId}/articles.json`, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('yenray.ng@trlco.world/token:O4N6Fysz582712RvT2Aux2gvbdabCExJOoh966nK')
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(`Fetched Articles for Section ${activeSectionId}:`, data.articles);
        setArticles(data.articles);
      })
      .catch(error => console.error('Error fetching articles:', error));
    }
  }, [activeSectionId]);

  // Handle tab change
  const handleTabChange = (index) => {
    console.log(`Tab clicked: ${sections[index]?.id}`);
    if (sections[index]) {
      setActiveSectionId(sections[index].id);
    }
  };

  return (
    <div>
      <Topbar />
      <Header />
      <div>
        <div className='max-w-7xl mx-auto md:mt-5 lg:px-0 px-3'>
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
      <div className='lg:px-0 px-3 md:py-14 tabs-pills'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 text-center'>
              <span className='text-[#17271F] md:text-[32px] text-[26px] md:leading-[36px] leading-[29px] md:mb-0 mb-3 outfit-semibold block md:mt-0 mt-5'>Explore topics</span>
            </div>
            <div className='col-span-12 mt-5'>
              <Tabs
                aria-label="Pills"
                variant="pills"
                ref={tabsRef}
                onActiveTabChange={(tab) => handleTabChange(tab)}
              >
                {sections.map((section, index) => (
                  <Tabs.Item
                    key={section.id}
                    title={section.name}
                    active={activeSectionId === section.id}
                  >
                    <div className='shadow-xl md:pb-10 md:pl-10 md:pr-10 border-[1px] border-[#fff] mt-10 rounded-[15px]'>
                      <Accordion>
                        {articles.map(article => (
                          <Accordion.Panel key={article.id}>
                            <Accordion.Title>{article.title}</Accordion.Title>
                            <Accordion.Content>
                              <p className="mb-2 text-gray-500 dark:text-gray-400 mt-4">
                                {article.body.replace(/<[^>]+>/g, '')} {/* Stripping HTML tags from the content */}
                              </p>
                            </Accordion.Content>
                          </Accordion.Panel>
                        ))}
                      </Accordion>
                    </div>
                  </Tabs.Item>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
