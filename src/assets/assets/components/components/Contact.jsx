import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../../../../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../../../../hoc';
import { slideIn } from '../../../../utils/motion';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );
      console.log(result.text);
      setLoading(false);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.log(error.text);
      setLoading(false);
      // Handle error, e.g., show an error message
    }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text" 
              name='name' 
              value={form.name} 
              onChange={handleChange} 
              placeholder='What is your name?' 
              className='bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none' 
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email" 
              name='email' 
              value={form.email} 
              onChange={handleChange} 
              placeholder='What is your email?' 
              className='bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none' 
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              name='message' 
              value={form.message} 
              onChange={handleChange} 
              placeholder='What do you want to say?' 
              className='bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none' 
            />
          </label>

          <button type="submit" disabled={loading} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right',"tween",0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">

<EarthCanvas/>


      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
