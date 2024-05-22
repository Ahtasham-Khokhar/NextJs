import React from 'react';

const About = () => {
  return (
    <>
      <style jsx>
        {`
          .aboutContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            padding: 20px;
          }
          .aboutContent {
            max-width: 600px;
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .aboutTitle {
            font-size: 2em;
            margin-bottom: 20px;
            color: #333;
          }
          .aboutText {
            font-size: 1.2em;
            line-height: 1.5;
            color: #666;
          }
        `}
      </style>

      <div className="aboutContainer">
        <div className="aboutContent">
          <h2 className="aboutTitle">About Us</h2>
          <p className="aboutText">
          Hunting Coder is a platform dedicated to connecting 
          passionate developers with exciting opportunities in the tech world. 
          Our mission is to empower coders to hunt for the best coding challenges, learning resources, 
          and career advancements. We believe in fostering a community where knowledge is shared, and innovation
          thrives. Join us on this journey to elevate your coding skills and land your dream job. Happy hunting,
          coders!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
