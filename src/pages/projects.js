import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Projects from '../components/Projects/Projects';
import { PortfolioProvider } from '../context/context';
import { projectsData } from '../mock/data';

export default () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsData]);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Varun Khalate | Frontend Engineer</title>
        <html lang={false || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <PortfolioProvider value={{ projects }}>
        <Projects page />
      </PortfolioProvider>
    </>
  );
};
