import Head from 'next/head';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactCard';
import Menu from '@/components/Menu';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Home() {
  return (
    <div>
        <Head>
            <title>My Next.js App</title>
            <meta name="description" content="My Next.js app description" />
        </Head>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mx-auto sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl block relative">
                <div className="left-container top-24 pr-4 sticky inset-y-0 left-0">
                    <div className={'text-5xl font-bold text-slate-100 ' }>Peter Bodnar</div>
                    <div className={'text-2xl  font-semibold subNameBox text-slate-300 mb-10'}>Full Stack Web Developer</div>
                    <div className={'text-lg text-slate-400 font-light mb-0 p-0' }>I imagine and build accesible, personalized products for the web.</div>
                    <Menu></Menu>
                    <div className="link-container flex gap-5 mt-20">
                        <div className="github-link">
                            <a href="https://github.com/HexadecimalHUN" target='blank' rel="noopener noreferrer" className='w-10 h-10 text-slate-200 hover:text-blue-500 hover:ease-in duration-200'>
                            <FontAwesomeIcon icon={faGithub} className='w-10 h-10'/>
                            </a>
                        </div>
                        <div className="linkedin-link">
                            <a href="https://www.linkedin.com/in/peter-bodnar97/" target='blank' rel="noopener noreferrer" className='w-10 h-10 text-slate-200 hover:text-blue-500 hover:ease-in duration-200'>
                            <FontAwesomeIcon icon={faLinkedin} className='w-10 h-10'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right-container-wrapper flex flex-col-reverse items-end">
                    <div className="right-container pl-4 overflow-auto">
                        <div className={'text-sm text-slate-400 font-light mb-10 p-0 mt-0' } id='intro'>
                            <p className='mb-3'>In 2017, I made a decision to pursue my dreams as a computer scientist. Since then, my life has changed quite a bit. I moved to Aarhus, Denmark and recently graduated as a Web Developer BA in 2023.</p>
                            <p className='mb-3'>Currently, my main focus is to deepen my knowledge and keep up with the latest trends in web development. I've been fortunate enough to work as an intern for a Textile Printing Company and also contribute to a Web Developer Startup while finishing my studies.</p>
                            <p className='mb-3'>Outside of work, I actively contribute to the FIVE:M development team and have started learning 3D modeling and animations. When I'm not in front of the computer, you can find me enjoying the Danish weather on my bike, hanging out with my girlfriend, or playing Hearthstone for fun.</p>
                        </div>
                        <ExperienceCard techStack={['Java', 'Apache Kafka', 'JavaScript', 'MongoDB', 'Node.js', 'Spring']} monthStart='Sep' monthEnd='Dec' year={2022} company='Exinko A/S' title='Back-End Developer Intern' description='Designing and implementing a new micro services based back-end for a monolith reservation web application. Designing and documenting the api endpoints and declaring the messaging fundamentals for the applicatiuon.'></ExperienceCard>
                        <ExperienceCard techStack={['.Net', 'C#', 'JavaScript', 'HTML', 'CSS', 'jQuerry']} monthStart='Sep' monthEnd='Dec' year={2020} company='JetSport A/S' title='Web Developer Intern' description='Build and optimization of an in-house designed and maintained .Net application that served as a back-bone for the connection between the creative department and the production line.'></ExperienceCard>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='text-lg font-bold italic text-slate-200'>
                            View Full Résumé <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                        <ProjectCard yearStart={2020} yearEnd={2022} title='Project OldSchool RolePlay' picture='/images/oldschool.png' description='Creating a fully custom framework built on top of FIVE:M (modified version of Rockstar Games GTA V) native api handles. The collection of scripts was designed to make servers more maintainable while enhancing player experience spent on modified online servers.' techStack={['LUA', 'SQL', 'HTML', 'CSS', 'JavaScript', 'jQuery']} ></ProjectCard>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </motion.div>
    </div>
  );
}
