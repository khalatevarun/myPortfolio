import React, {
  useEffect,
  useState,
} from 'react';

import { PortfolioProvider } from '../context/context';
import {
  aboutData,
  blogsData,
  contactData,
  footerData,
  heroData,
  projectsData,
} from '../mock/data';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [blogs,setBlogs] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setBlogs([...blogsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, blogs, contact, footer }}>
      <Hero />
      <About />
      <Blogs />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
