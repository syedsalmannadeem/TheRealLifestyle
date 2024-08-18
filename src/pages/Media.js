import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { blogPostsQuery } from '../sanityQueries';
import NewsroomBanner from '../assets/images/newsroom-hero.png';
import iconPrev from '../assets/images/icon-previous.png';
import iconNext from '../assets/images/icon-next.png';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Dropdown } from "flowbite-react";
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';
import { extractPlainText } from '../utils/portableTextUtils';

const Media = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post" ${
          category ? `&& categories[]._ref == "${category}"` : ''
        } ${
          year ? `&& publishedAt match "${year}-"` : ''
        } ${
          month ? `&& publishedAt match "-${month}-"` : ''
        }] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage {
            asset->{
              _id,
              url
            },
            alt
          },
          categories[]->{
            title
          },
          body,
          publishedAt
        }`;
        
        console.log("Query:", query); // Debug query
  
        const postsData = await client.fetch(query);
        console.log("Posts Data:", postsData); // Debug fetched data
  
        setTotalPosts(postsData.length);
        const paginatedPosts = postsData.slice(
          (currentPage - 1) * postsPerPage,
          currentPage * postsPerPage
        );
        setPosts(paginatedPosts);
      } catch (err) {
        setError(err);
      }
    };
  
    fetchPosts();
  }, [category, year, month, currentPage]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch(`*[_type == "category"] { _id, title }`);
        console.log("Categories Data:", categoriesData); // Debug categories
        setCategories(categoriesData);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Handle category selection
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setCurrentPage(1); // Reset to first page
  };

  // Handle year selection
  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    setCurrentPage(1); // Reset to first page
  };

  // Handle month selection
  const handleMonthChange = (selectedMonth) => {
    setMonth(selectedMonth);
    setCurrentPage(1); // Reset to first page
  };

  // Pagination handlers
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const truncateText = (text, wordLimit) => {
    if (!text) return '';
    const plainText = extractPlainText(text); // Convert Portable Text to plain text
    const words = plainText.split(/\s+/); // Split by whitespace
    if (words.length <= wordLimit) return plainText;
    return words.slice(0, wordLimit).join(' ') + '...'; // Add ellipsis
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div>
      <Topbar />
      <Header />
      <div>
        <div className='max-w-7xl mx-auto md:mt-5 lg:px-0 px-3'>
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
      <div className='md:pt-16 md:pb-24 py-10 lg:px-0 px-3'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-12 md:gap-6 gap-y-4'>
            <div className="md:mb-5 md:col-span-9 col-span-12">
              <div className='media-filters'>
                <Dropdown label="Category" inline>
                  {categories.length > 0 ? (
                    categories.map(category => (
                      <Dropdown.Item key={category._id} onClick={() => handleCategoryChange(category._id)}>
                        {category.title}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item>No categories available</Dropdown.Item>
                  )}
                </Dropdown>
                <Dropdown label="Year" inline>
                  <Dropdown.Item onClick={() => handleYearChange('2021')}>2021</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleYearChange('2022')}>2022</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleYearChange('2023')}>2023</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleYearChange('2024')}>2024</Dropdown.Item>
                </Dropdown>
                <Dropdown label="Month" inline>
                  <Dropdown.Item onClick={() => handleMonthChange('06')}>June</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleMonthChange('07')}>July</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleMonthChange('08')}>August</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleMonthChange('09')}>September</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <div className="md:mb-5 md:col-span-3 col-span-12 md:text-right">
              <span className='text-[16px] text-[#8A8A8A]'>
                Showing {((currentPage - 1) * postsPerPage) + 1} to {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts} results
              </span>
            </div>
            <div className='col-span-12'>
  {posts.length === 0 && (
    <div className='text-center text-[16px] text-[#8A8A8A]'>
      No results found for the selected filters.
    </div>
  )}
  <div className='grid grid-cols-12 md:gap-5 gap-2'>
    {posts.map((post) => (
      <div key={post._id} className='md:col-span-4 col-span-12'>
        <div className='cs-boxshadow rounded-[15px]'>
          {post.mainImage && <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className='w-full' />}
          <div className='p-5'>
            <span className='block text-[14px] text-[#8A8A8A] mb-2'>
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
              {post.title}
            </span>
            <div className='block text-[16px] text-[#565656] mb-2'>
              {truncateText(post.body, 15)}
            </div>
            <Link to={`/media-details/${post._id}`} className='block text-[16px] text-[#FF4A3F] outfit-semibold'>
              Read more
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            {totalPages > 1 && (
              <div className='col-span-12 mt-10'>
                <ul className='flex flex-row items-center justify-center gap-x-3'>
                  {currentPage > 1 && (
                    <li>
                      <button onClick={() => handlePageChange(currentPage - 1)}>
                        <img src={iconPrev} className='max-w-[36px]' alt="Previous" />
                      </button>
                    </li>
                  )}
                  {[...Array(totalPages).keys()].map((page) => (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page + 1)}
                        className={`text-[#8A8A8A] border-[2px] border-[#8A8A8A] hover:text-[#FF4A3F] hover:border-[#FF4A3F] transition ease-in-out duration-300 px-3 py-1 rounded-[8px] text-center inline-block ${currentPage === page + 1 ? 'bg-[#FF4A3F] text-white' : ''}`}
                      >
                        {page + 1}
                      </button>
                    </li>
                  ))}
                  {currentPage < totalPages && (
                    <li>
                      <button onClick={() => handlePageChange(currentPage + 1)}>
                        <img src={iconNext} className='max-w-[36px]' alt="Next" />
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Media;