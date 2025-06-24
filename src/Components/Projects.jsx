import React from 'react';
import WebsiteImg1 from '../Assets/website img-1.jpeg';
import WebsiteImg2 from '../Assets/website img-2.png';
import WebsiteImg3 from '../Assets/website img-3.png';

export default function Projects() {
    const config = {
        projects : [
            {
                image : WebsiteImg1,
                title : "E-Shop-See – Frontend Website",
                description : "Designed a modern e-commerce home page for an online shopping platform.",
                link : "https://e-shop-see.netlify.app/",
            },
            {
                image : WebsiteImg2,
                title : "Dispatcher Admin Dashboard – Frontend Project",
                description : "Developed a comprehensive admin dashboard with multiple management modules for logistics and dispatch operations.",
                link : "https://dispatcher-frontend-project.netlify.app/",
            },
            {
                image : WebsiteImg3,
                title : "Online Shopping – Mern Stack Project",
                description : "(In Progress)",
                link : "website link 3",
            },
        ]
    }
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='projects'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-4xl border-b-4 border-[#358a30] mb-5 w-[140px] font-bold'>Projects</h1>
                <p>My Projects</p>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex px-10 gap-5 flex-col md:flex-row'>
                {config.projects.map((project)=>(
                    <a href={project.link}>
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} alt="Website Image 1" />
                            <div className='project-description'>
                                <h1 className='text-center px-5 pt-5'>{project.title}</h1>
                                <p className='text-center px-5 pt-2 pb-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a target='_blank' className='btn' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}
