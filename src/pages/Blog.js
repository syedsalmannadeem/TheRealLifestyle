import React,{useEffect, useState} from 'react';
import NewsroomBanner from '../assets/images/newsroom-hero.png';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { extractPlainText } from '../utils/portableTextUtils';
function Blog() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchMediumPosts = async () => {
            const token = '2f25a0ab23c3192af677c413b3a814567c041c76c25aefd429dd2f2205fc92027';

            try {


                // Fetch user posts
                const postsResponse = await fetch(`https://v1.nocodeapi.com/shawnmichael78690/medium/lYaFNcTGoTwIyuBl`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                const postsData = await postsResponse.json();
                console.log(postsData);
                setPosts(postsData); 

            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchMediumPosts();
    }, []);

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const plainText = extractPlainText(text); // Convert Portable Text to plain text
        const words = plainText.split(/\s+/); // Split by whitespace
        if (words.length <= wordLimit) return plainText;
        return words.slice(0, wordLimit).join(' ') + '...'; // Add ellipsis
      };

      const extractImageSrc = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const img = doc.querySelector('img');
        return img ? img.src : null;
      };

      const PostImage = ({ content }) => {
        // Extract the image source once and store it in a variable
        const imageSrc = extractImageSrc(content);
      
        return (
          <div
            className='mb-2 rounded-[5px] w-full'
            style={{
              backgroundColor: !imageSrc ? '#f0f0f0' : 'transparent', // Gray background if no image
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {imageSrc ? (
              <img
                className='max-h-[170px] min-h-[170px] w-full object-contain rounded-[5px]'
                src={imageSrc}
                alt="Post Image"
              />
            ) : (
              <span>No Image Available</span> // Fallback content if no image
            )}
          </div>
        );
      };

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
                  <span className='text-[#fff] md:text-[55px] text-[38px] leading-[42px] md:leading-[60px] outfit-bold block text-center'>Blog</span>
                  <p className='text-[#fff] text-[18px] leading-[26px] mt-3 max-w-[500px]'>Find company news, announcements, and press resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto md:py-10 py-8'>
        <div className='grid grid-cols-12 md:gap-6'>

            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='md:col-span-4 col-span-12'>
                        <div className='cs-boxshadow rounded-[10px] flex flex-row items-start'>
                        
                        <div className='p-5'>
                              {/* <img
                                className='max-h-[170px] min-h-[170px] !w-full mb-3 object-contain mr-auto rounded-[5px]'
                                src={extractImageSrc(post.content)}
                                alt="Post Image"
                              /> */}

                            <PostImage content={post.content} />

                            {/* <img className='mb-2 rounded-[5px] max-h-[160px] w-full object-contain' src={extractImageSrc(post.content)}/> */}
                            {/* <span>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </span> */}
                            <span className='block text-[14px] text-[#8A8A8A] mb-2'>
                            {new Date(post.published).toLocaleDateString()}
                            </span>
                            <span className='block text-[18px] text-[#17271F] outfit-medium mb-2'>
                            {post.title}
                            </span>
                            <a target='_blank' href={post.link} className='block text-[16px] text-[#FF4A3F] outfit-semibold'>
                            Read more
                            </a>
                        </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}

        </div>      
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;