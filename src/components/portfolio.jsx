import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "Stone Paper Scissor Game Using JAVA.",
      links: {
        site: "#",
        github: "https://github.com/2002Yashwant/Stone-paper-scissor-game",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "Tic Tac Toe game Built with Html , CSS , JavaScript fully functional.",
      links: {
        site: "#",
        github: "https://github.com/2002Yashwant/Tik-Tak-Toe-Game/tree/main/TIC_TAK_TOE_Project",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "Daily Expense Tracker A PHP and MySQL-based application for managing daily expenses, allowing users to log, categorize, and track spending efficiently",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "My personal portfolio built using React , Tailwind , node.js ,Html and CSS.",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project6,
      title: "Project #5",
      description: "FitoBot   An AI-powered fitness chatbot designed to assist users with queries about diet, exercise, motivation, and common health issues, developed using HTML, CSS, and JavaScript..",
      links: {
        site: "https://drive.google.com/file/d/1vXyheTihCaRHlJdmiHQS60M6_Kk5PIpp/view?usp=drive_link",
        github: "https://drive.google.com/file/d/1f_cCf9eI4u6-X5Zj8TwUq01SFXW73GmM/view?usp=drive_link", /*to be edited*/
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio