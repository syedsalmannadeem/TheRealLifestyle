import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sliderImage from '../assets/images/slider-stats.png';
import iconDownloads from '../assets/images/icon-downloads.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const MediaDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && _id == "${id}"]{
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
          publishedAt,
          sliderImages[] {
            asset->{
              _id,
              url
            },
            alt
          },
          files[] {
            asset->{
              _id,
              url
            },
            originalFilename
          }
        }`;
        const data = await client.fetch(query);
        setPost(data[0]);
      } catch (err) {
        setError(err);
      }
    };

    fetchPost();
  }, [id]);

  if (error) return <div>Error: {error.message}</div>;
  if (!post) return <div>Loading or no post found...</div>;

  return (
    <div>
      <Topbar />
      <Header />
      <div>
        <div className='max-w-5xl mx-auto md:pt-10 lg:px-0 px-3 py-6'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              {post.mainImage && post.mainImage.asset && (
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt || 'Image'} className='max-w-[100%] w-full mx-auto' />
              )}
            </div>
            <div className='col-span-12 mt-5 mb-5'>
              <div className='flex items-center mb-2'>
                {post.categories && post.categories.length > 0 ? (
                  <span className='bg-[#F6F6F2] px-2 py-1 inline-block mr-3 capitalize'>
                    {post.categories.map((cat, index) => (
                      <span key={index} className='mr-2'>{cat.title}</span>
                    ))}
                  </span>
                ) : (
                  <span className='inline-block text-[#8A8A8A] text-[14px] hidden'>No categories available</span>
                )}
                <span className='inline-block text-[#8A8A8A] text-[14px]'>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              
              <span className='block text-[#17271F] text-[48px] outfit-bold leading-[52px] mt-5 mb-5'>
                {post.title}
              </span>
              <p className='md:text-[18px] text-[#565656] mb-5'>
                <PortableText value={post.body || []} />
              </p>
            </div>
          </div>
          <div className='grid grid-cols-12'>
            {/* Slider Images Section */}
            {post.sliderImages && post.sliderImages.length > 0 ? (
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
                    0: { items: 1 },
                    600: { items: 1 },
                    1000: { items: 1 },
                  }}
                >
                  {post.sliderImages.map((image, index) => (
                    <div key={index} className='item'>
                      <img className='rounded-[25px]' src={image.asset.url} alt={image.alt || `Slide ${index + 1}`} />
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            ) : (
              <div className='md:col-span-8 col-span-12 mb-5 hidden'>
                <p className='text-left text-[16px] text-[#8A8A8A]'>No slider images to show</p>
              </div>
            )}

{post.files && post.files.length > 0 ? (
  <div className='md:col-span-8 col-span-12 mb-10'>
    <span className='block md:text-[28px] text-[20px] outfit-bold text-[#17271F] mb-3'>Downloads</span>
    <ul className='flex flex-row gap-x-3'>
      {post.files.map((file, index) => (
        <li key={index} className='border-[2px] border-[#E0E0E0] md:py-6 md:px-4 px-3 py-3 w-[200px] md:w-[200px] rounded-[10px]'>
          <a href={file.asset.url} download className='flex items-center'>
            <img className='mb-4' src={iconDownloads} alt='' />
            <span className='md:text-[16px] text-[14px] text-[#FF4A3F] outfit-medium'>{file.originalFilename}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
) : (
  <div className='md:col-span-8 col-span-12 mb-10 hidden'>
    <p className='text-left text-[16px] text-[#8A8A8A]'>No downloads available</p>
  </div>
)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaDetails;
