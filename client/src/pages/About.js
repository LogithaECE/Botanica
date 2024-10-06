import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

const About = () => {
  return (
    <Layout title='About us - Botanica'>
      <section className="about-content" >
        <h1 style={{fontSize:"370%"}}>Welcome to Botanica!</h1>
        <p>
         <b> Botanica is passionate about bringing the world of exotic plants to your fingertips. 
          We believe that everyone should have access to beautiful and unique plants, regardless of their gardening experience.</b>
        </p>
        <h4>How We Achieve Our Mission</h4>
          <ul>
            <li>
              <strong>Discovery:</strong> Our app features a user-friendly interface with advanced search filters to help you find the perfect exotic plant for your needs.
            </li>
            <li>
              <strong>Knowledge Base:</strong> We offer a comprehensive library of care guides, growing tips, and FAQs to empower you to thrive with your plant companions.
            </li>
            <li>
              <strong>Community:</strong> Join our vibrant community forum to connect with fellow plant enthusiasts, share experiences, and learn from each other.
            </li>
          </ul>
          <h5>Join the Botanica Family!</h5>
          <p>
            Download the Botanica app today and embark on a journey into the world of exotic plants. <br></br>Follow us on social media for plant care tips, exciting updates, and more!
          </p>
                
        <Link to="/" className="about-btn"><GoArrowLeft /> Explore our plants!</Link>
      </section>
    </Layout>
  );
};

export default About;
