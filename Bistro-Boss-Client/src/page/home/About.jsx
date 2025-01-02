import React from 'react';
import aboutBg from '../../assets/home/chef-service.jpg'

const About = () => {
    const aboutStyle = {
        backgroundImage: `url(${aboutBg})`,
    }
    return (
        <div style={aboutStyle} className='about p-24'>
            <div className='bg-white p-10 flex flex-col justify-center items-center gap-5 text-center w-3/4 mx-auto'>
                <h3 className='text-3xl'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default About;