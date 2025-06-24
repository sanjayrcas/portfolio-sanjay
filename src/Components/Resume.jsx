import React from 'react';
import ResumeImg from '../Assets/resume png-1.png';
import ResumePDF from '../Assets/resume.pdf';

export default function Resume() {

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
            <div className='md:w-1/2 py-5 flex justify-center'>
                <img className='w-[300px]' src={ResumeImg} alt="Resume img" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-[#4cb849] mb-5 w-[140px] font-bold'>Resume</h1>
                    <p className='pb-5'>You can view my Resume <a className='btn' href={ResumePDF} target='_blank' rel='noopener noreferrer'>Download</a></p>
                </div>
            </div>
        </section>
    )
}
