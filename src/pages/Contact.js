import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import FaqBanner from '../assets/images/faq-hero.png';
import axios from 'axios';


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Send form data to SendGrid
        await sendFormDataToSendGrid(formData);
    
        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', message: '' });
      };

      const sendFormDataToSendGrid = async (formData) => {
        try {
            const response = await axios.post(
                'https://api.sendgrid.com/v3/marketing/contacts',
                {
                    contacts: [
                        {
                            email: formData.email,
                            first_name: formData.name,
                            phone_number: formData.phone,
                            custom_fields: {
                                e1_T: formData.message // Check if this field ID is correct
                            }
                        }
                    ]
                },
                {
                    headers: {
                        'Authorization': `Bearer bPVhDQzqTNS9091KSXJtfg`, // Replace with your SendGrid API key
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            console.log('Form data sent successfully:', response.data);
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error request:', error.request);
            } else {
                // Something else caused the error
                console.error('Error:', error.message);
            }
        }
    };
    

  return (
    <div>
      <Topbar/>
      <Header/>
      <div>
        <div className='max-w-7xl mx-auto md:mt-5 lg:px-0 px-3'>
          <div className='bg-no-repeat bg-cover md:rounded-[50px] p-10 md:m-0 rounded-[12px] relative' style={{ backgroundImage: `url(${FaqBanner})` }}>
            <div className='grid grid-cols-12 items-center'>
              <div className='col-span-12'>
                <div className='h-[280px] flex flex-col items-start justify-center'>
                  <span className='text-[#fff] md:text-[55px] text-[38px] leading-[42px] md:leading-[60px] outfit-bold block text-center'>Contact Us</span>
                  <p className='text-[#fff] text-[18px] leading-[26px] mt-3 max-w-[500px]'>Discover answers to your questions about combining real estate and cryptocurrency on our innovative platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:py-16 py-10'>
        <div className='max-w-[650px] mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12'>
                    <div className='bg-[#F6F6F2] border-[1px] border-[#e2e2e2] md:p-8 p-6 rounded-[10px]'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12 mb-3'>
                                    <span className='orange-text3 text-[25px] md:leading-[40px] leading-[30px] mb-2 md:text-[35px] outfit-bold block'>Get In Touch</span>
                                </div>
                                <div className='col-span-12 mb-3'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className='w-full bg-[#e2e2e2] border-none' placeholder="Enter Full Name" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className='col-span-12 mb-3'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className='w-full bg-[#e2e2e2] border-none' placeholder="Enter Email Address" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className='col-span-12 mb-3'>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className='w-full bg-[#e2e2e2] border-none' placeholder="Enter Phone Number" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                                <div className='col-span-12 mb-3'>
                                    <label htmlFor="message">Message</label>
                                    <textarea className='w-full bg-[#e2e2e2] border-none' placeholder="Enter Message" id="message" name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                                <div className='col-span-12'>
                                    <button className='text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 py-2 px-3 rounded-[25px]' type="submit">Subscribe Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Contact;