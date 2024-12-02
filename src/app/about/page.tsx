"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './about.css';

const teamMembers = [
  {
    name: 'Bailey Belinger',
    description: "My name is Bailey Belinger and I am pursuing a degree in Environmental Engineering, with graduation expected in Spring 2025. This project resonates with me on a personal level, as I will soon face the challenge of selecting an insurance plan with limited knowledge of how to make an informed choice. Through this initiative, I aim to deepen my understanding of key considerations in insurance packages and provide valuable assistance to other recent graduates navigating this important decision.",
    imageUrl: "/bailey.jpeg", // Replace with actual image URL
  },
  {
    name: 'Setor Simpri',
    description: "My name is Setor Simpri, and I am a senior working toward a Bachelor of Science in Electrical and Computer Engineering (ECE). I’ve always been intrigued by the U.S. health insurance system, but I found that many resources lacked clarity and failed to provide a comprehensive, easy-to-understand overview of how the system works. With this project, my goal is to simplify the complexities of health insurance by offering accessible, straightforward information on topics such as coverage options and selecting the right plan. Whether you’re new to health insurance or seeking a refresher, I hope this website helps make the process more approachable.",
    imageUrl: '/placeholder.avif', // Replace with actual image URL
  },
  {
    name: 'Yuki Suwabe',
    description: 'My name is Yuki Suwabe and I am a senior studying Computer Science, and I joined this project because I believe health insurance is a critical but often misunderstood topic. Many people struggle to grasp the basics or make informed choices about their coverage. By developing this website, I hope to break down the fundamentals of health insurance and empower users to make confident, well-informed decisions about their plans.',
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
          <Image src={member.imageUrl} alt={member.name} className="team-member-image" width={150} height={150} />
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