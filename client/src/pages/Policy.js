import React from 'react';
import { Layout } from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title='Privacy Policy - Botanica'>
      <section className="policy-content">
        <h1>Privacy Policy</h1>
        <p>
          At Botanica, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your information in connection with your use of our mobile application, Botanica.
        </p>
        <p>
          <b>Please read this Privacy Policy carefully to understand our practices regarding your information.</b>
        </p>
        <p>
          At Botanica, we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose your information in connection with your use of our application, Botanica.
        </p>
        <div style={{display:"inline-block",width:"50%",borderRight:"1px solid black"}}>
        <h4>Information We Collect</h4>
        <p>
          We collect two types of information through the App:
        </p>
        <ul>
          <li>
            <b>Information You Provide:</b> This includes information that you directly provide to us when you use the App, such as:
            <ul>
              <li>User name</li>
              <li>Email address (for account creation or communication)</li>
              <li>Plant information you enter (species, care needs, etc.)</li>
            </ul>
          </li>
          <li>
            <b>Information Collected Automatically:</b> When you use the App, we may automatically collect certain information about your device and usage, such as:
            <ul>
              <li>Device type and operating system</li>
              <li>IP address (with your consent)</li>
              <li>Location data (with your consent)</li>
            </ul>
          </li>
        </ul>

        <h4>How We Use Your Information</h4>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide and improve the App and its features</li>
          <li>Create and manage your account (if applicable)</li>
          <li>Send you informational communications about the App and your plants (with your consent)</li>
          <li>Respond to your inquiries and requests</li>
          <li>Analyze how the App is used to improve the user experience</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
        </div>
        <div style={{display:"inline-block",width:"50%",paddingLeft:"18px"}}>
        <h4>Disclosure of Information</h4>
        <p>
          We may disclose your information to third-party service providers who help us operate the App and provide its features. These service providers are contractually obligated to keep your information confidential and secure.
        </p>
        <p>
          We will not disclose your information to any other third party without your consent, except as required by law or to protect our rights or safety.
        </p>

        <h4>Data Security</h4>
        <p>
          We take reasonable steps to protect the information you provide to us from unauthorized access, disclosure, alteration, or destruction. However, no internet or electronic storage system is completely secure.
        </p>


        <h4>Children's Privacy</h4>
        <p>
          Our App is not directed to children under the age of 13. We do not knowingly collect information from children under 13. If you are a parent or guardian and you believe that your child has provided us with information, please contact us.
        </p>

        <h4>Changes to this Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the App.
        </p>
        <p>For any queries feel free to Contact us.</p>
        </div>
      </section>
    </Layout>
  );
}
export default Policy