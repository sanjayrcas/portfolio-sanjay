import React from 'react';
import AboutImg from '../Assets/About img-1.png';

export default function About() {
    const config = {
        line1 : 'Aspiring Frontend Developer | MERN Stack Enthusiast. ',
        line2 : 'I am a B. Com CA graduate with a strong foundation in computer applications, currently pursuing MERN Stack development to master modern web technologies. Passionate about frontend development, actively applying skills to build responsive and user-friendly websites. Aiming to transition into backend development to become a full-stack developer',
    }
    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
            <div className='md:w-1/2 py-5'>
                <img src={AboutImg} alt="About img" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-[#4cb849] mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                </div>-
            </div>
        </section>
    )
}
