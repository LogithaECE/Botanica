import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Layout title='Contact us - Botanica'>
      <section className="contact-content">
        <h1>Let's Chat About Plants!</h1>
        <p>
         <b> We'd love to hear from you! Whether you have a question about a specific plant, need help using our app, or just want to chat about your love of exotics, feel free to reach out. Our friendly and knowledgeable team is here to assist you.
        </b></p>
        <h2>Contact Options</h2>
        <ul className="contact-methods">
          <li>
            <a href="mailto:[your email address]"><IoIosMail /> Email: <u>botanica@gmail.com</u></a>
          </li>
          <li>
            <Link to="https://www.facebook.com/BotanicaHealth/" target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook /> Facebook: <u>Botanica</u>
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/botanica/" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram /> Instagram: <u>@botanica</u>
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank" rel="noopener noreferrer">
            <BsTelephoneFill /> Phone: +123 456 7890
            </Link>
          </li>
         
        </ul>
        <p>
          You can also visit our <Link to="/faq"><u>FAQ page</u></Link> for answers to common questions.
        </p>
      </section>
    </Layout>
  );
};

export default Contact;
