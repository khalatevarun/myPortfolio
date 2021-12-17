/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

import CalendarIcon from './calendarIcon';


import PortfolioContext from '../../context/context';
import './style.scss';

const Blogs = () => {
    const { blogs } = useContext(PortfolioContext);


return (
    <section id="projects">
    <Container>
      <div className="project-wrapper">
        <Title title="Blogs" />
        <p style={{marginBottom:'60px'}}>I document and share what I am learning through blogs. Since writing brings clarity it also helps me be more confident about my skills. When I work on some content, the meticulous research helps rough out the edges and fill the gaps in my mind about the topic I am learning.</p>
<div style={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap'}}>
  {blogs.map((blog)=>(<div className="homeBlogBox">
    <Link to={blog.url}>
      <div className="homeBlogImage">
          <Img fixed={blog.image} />
      </div>

      <div className="homeBlogTitle">
        <h2 style={{fontWeight:'bold'}}>{blog.title}</h2>
      </div>

      <div className="homeBlogDateTag">
        <span className="homeBlogDate">
            <CalendarIcon />
            <span> {blog.date}</span>
        </span>

      
      </div>

      <div className="homeBlogExcerpt">{blog.description}</div>
    </Link>
                      </div>))}
</div>
      </div>
    </Container>
    </section>
  );
};
  export default Blogs;
