import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../../../../styles';
import { SectionWrapper } from '../../../../hoc';
import { fadeIn, textVariant } from '../../../../utils/motion';
import { socialMedia } from '../../../../constants';
import { github } from '../..';

const SocialMediaCard = ({ index, name, icon, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='relative w-full h-[230px] flex flex-col justify-center items-center'>
          <img src={icon} alt={name} className='w-20 h-20 object-contain rounded-full' />
          <h3 className='text-white font-bold text-[24px] mt-4'>{name}</h3>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-secondary text-[14px] mt-2 underline">
            Visit Profile
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Connect = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Let's work Together</p>
        <h2 className={styles.sectionHeadText}>Connect</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
         You can contact me on LinkedIn, Twitter, Instagram
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {socialMedia.map((platform, index) => (
          <SocialMediaCard key={`platform-${index}`} index={index} {...platform} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Connect, "");
