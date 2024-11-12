"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './about.css';

const teamMembers = [
  {
    name: 'Bailey Belinger',
    description: "I’m pursuing a degree in Environmental Engineering, with graduation expected in Spring 2025. This project resonates with me deeply, as I’ll soon face the challenge of selecting an insurance plan with limited knowledge of how to make an informed choice. My goal throughout this project is to gain insight into key considerations in insurance packages and to assist other recent graduates who may encounter similar difficulties in navigating this important decision.",
    imageUrl: "/bailey.jpeg", // Replace with actual image URL
  },
  {
    name: 'Setor Simpri',
    description: "Hello, my name is Setor Simpri, and I am a senior studying for a BSc in Electrical and Computer Engineering (ECE). I’ve always been interested in exploring the health insurance system in the U.S., but I found that many of the resources available were unclear and didn’t provide a holistic, easy-to-understand picture of how the system works. This website aims to change that by offering straightforward, accessible information on various aspects of health insurance, including coverage options and how to select the plan that best meets your needs. Whether you're new to health insurance or just need a refresher, I hope this site makes navigating the world of health insurance a little easier and more understandable.",
    imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Yuki Suwabe',
    description: 'I am a senior pursuing a degree in Computer Science. I am interested in this project because I believe that health insurance is an important topic that is not well understood by many people. I hope that this website will help people understand the basics of health insurance and make informed decisions about their health insurance plans.',
    imageUrl: '/yuki.jpg', // Replace with actual image URL
  },
];

const AboutPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="about-container">
        <h1 className="about-header">Loading...</h1>
      </div>
    ); // Render a loading state on the server
  }

  return (
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      <h2 className="section-header">Meet the Team</h2>
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <Image src={member.imageUrl} alt={member.name} className="team-member-image" />
          <div className="team-member-info">
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        </div>
      ))}
      <h2 className="section-header">Our Motivation</h2>
      <p className="motivation-text">
        Health insurance is a hot topic in American society, but it wasn’t until we had to fill out a waiver for Cornell’s coverage that we realized how little we knew. Consider two issues: (a) the widespread discussions about health insurance and (b) the insurance system’s impact on whether people receive necessary medical care or even survive. If many share this experience, it highlights a significant problem. <br /> <br />
        Many recent college graduates receiving job offers have little to no knowledge about insurance packages and policies because they are insured under their parents. Our website will provide information on different insurance packages and give the users keywords to look for in the packages they are considering based on their answers to questions about coverage preferences.
      </p>
    </div>
  );
};

export default AboutPage;