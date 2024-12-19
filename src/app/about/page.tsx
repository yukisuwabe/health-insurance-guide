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
        Health insurance is a hot topic in American society, but it wasn’t until we had to fill out a waiver for Cornell’s coverage that we realized how little we knew. Consider two issues: (a) the widespread discussions about health insurance and (b) the insurance system’s impact on whether people receive necessary medical care or even survive (Tseng et al., 2023). If many share this experience, it highlights a significant problem. <br /> <br />
        Many recent college graduates receiving job offers have little to no knowledge about insurance packages and policies because they are insured under their parents (Miller & Smith, 2022). Our website will provide information on different insurance packages and give the users keywords to look for in the packages they are considering based on their answers to questions about coverage preferences.
      </p>
      <h2 className="section-header">Our Method</h2>
      <h3 className="subheading">Kristin VanWye - Licensed Insurance Agent at HealthMarkets</h3>
      <p className='motivation-text'> As current college students, we recognized the importance of consulting a health insurance professional to ensure we had accurate and reliable information. Kristin VanWye, a Licensed Insurance Agent at HealthMarkets, generously shared her expertise, answering our questions and offering valuable advice for recent graduates navigating health insurance options. She provided insights into various types of insurance plans, including HMO, PPO, EPO, and POS, which we detailed in our dictionary. Kristin also clarified key terminology and explained scenarios where individuals might prefer plans with higher or lower premiums and deductibles, helping us better understand how to make informed recommendations.
      </p>
      <h3 className="subheading">Michael Richards - Professor; Director, Sloan Program in Health Administration</h3>
      <p className="motivation-text">To deepen our understanding, we consulted Professor Richards from Cornell, whose research focuses on healthcare provider responses to public policies and shifting market dynamics. Professor Richards offered valuable insights into systemic issues within the healthcare industry, including fragmentation and the significant variations influenced by factors such as age, income, and health status. Additionally, he provided practical recommendations for presenting our information effectively, such as incorporating comparisons between in-network and out-of-network providers.</p>
      <h2 className="section-header">References</h2>
      <ul>
        <li>Aetna Life Insurance Company. (n.d.). Aetna Life Insurance Company. <a href="https://www.aetna.com/document-library/health-care-reform/sample-IVL-hmo-2022.pdf" target="_blank" rel="noopener noreferrer">https://www.aetna.com/document-library/health-care-reform/sample-IVL-hmo-2022.pdf</a></li>
        <li>Centers for Medicare & Medicaid Services. (2023). Health Insurance Basics. In Health Insurance Basics. <a href="https://www.cms.gov/files/document/nsa-health-insurance-basics.pdf" target="_blank" rel="noopener noreferrer">https://www.cms.gov/files/document/nsa-health-insurance-basics.pdf</a></li>
        <li>Health Insurance Plan (HIP/HMO). (2024). Health Insurance Plan (HIP/HMO). In Health Insurance Plan (HIP/HMO).  <a href="https://www.emblemhealth.com/content/dam/emblemhealth/pdfs/resources/ghi/2024/hip-hmo-ri-brochure-2024-emblemhealth.pdf" target="_blank" rel="noopener noreferrer">https://www.emblemhealth.com/content/dam/emblemhealth/pdfs/resources/ghi/2024/hip-hmo-ri-brochure-2024-emblemhealth.pdf</a></li>
        {/* <li>Horner, A., Gregory, B., & Bembas, R. (2022, September 09). Assessing health insurance acquisition preparedness in university students. Journal of American College Health, 72(7). <a href="https://www.tandfonline.com/doi/full/10.1080/07448481.2022.2100998#abstract" target="_blank" rel="noopener noreferrer">https://www.tandfonline.com/doi/full/10.1080/07448481.2022.2100998#abstract</a></li>
        <li>James, T. G., Sullivan, M. K., Dumeny, L., Lindsey, K., Cheong, J., & Nicolette, G. (2020). Health insurance literacy and health service utilization among college students. Journal of American College Health, 68(2), 200-206. Taylor & Francis. Retrieved October 20, 2024, from <a href='https://research-ebsco-com.proxy.library.cornell.edu/c/u2yil2/viewer/pdf/l2jxu2aumj?route=details' target="_blank" rel='noopener noreferrer'>https://research-ebsco-com.proxy.library.cornell.edu/c/u2yil2/viewer/pdf/l2jxu2aumj?route=details</a></li>
        <li>Liu, E., Bach, A., Gumireddy, L., & Hwang, J. J. (2024, October 05). A Study of the Connection Between Health Insurance Literacy and Health Status: Evidence from the US Healthcare Reform Monitoring Survey. Journal of Community Health. Springer Link. Retrieved October 20, 2024, from <a href="https://link.springer.com/article/10.1007/s10900-024-01407-9" target="_blank" rel="noopener noreferrer">https://link.springer.com/article/10.1007/s10900-024-01407-9</a></li> */}
        <li>Miller, J. W., & Smith, A. D. (2022). College students&apos; health insurance literacy: Implications for health outcomes and access. Journal of American College Health, 70(2), 214–223. <a href="https://doi.org/10.1080/07448481.2022.2100998" target="_blank" rel="noopener noreferrer">https://doi.org/10.1080/07448481.2022.2100998</a></li>
        <li>Patient Protection and Affordable Care Act. (2010). In Public Law (Vol. 111, pp. 119–121).<a href="https://www.congress.gov/111/plaws/publ148/PLAW-111publ148.pdf" target="_blank" rel="noopener noreferrer">https://www.congress.gov/111/plaws/publ148/PLAW-111publ148.pdf</a></li>
        <li>Richards, M. (2024, November 21). Personal communication.</li>
        <li>Tseng, H.-Y., Chung, S., Lakshmi Ananda, Kim, L., & Gutilla, M. (2023). Stress and excessive alcohol consumption among insured and uninsured adults during the COVID-19 pandemic. Journal of Public Health. <a href="https://doi.org/10.1007/s10389-023-01927-z" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s10389-023-01927-z</a></li>
        <li>U.S. Department of Health and Human Services. (2024). The Health Insurance Marketplace: Things You Can Do to Get Ready to Enroll. In CMS Product (No. 11629). <a href="https://www.cms.gov/marketplace/outreach-and-education/about-the-marketplace-english.pdf" target="_blank" rel="noopener noreferrer">https://www.cms.gov/marketplace/outreach-and-education/about-the-marketplace-english.pdf</a></li>
        <li>U.S. Centers for Medicare & Medicaid Services. (n.d.). Types of health insurance plans. HealthCare.gov. Retrieved from <a href="https://www.healthcare.gov/choose-a-plan/plan-types/" target="_blank" rel='noopener noreferrer'>https://www.healthcare.gov/choose-a-plan/plan-types/</a> </li>
        <li>VanWye, K. (2024, November 2). Personal communication.</li>
      </ul>
    </div>
  );
};

export default AboutPage;