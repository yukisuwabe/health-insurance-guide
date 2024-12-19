"use client";
import React, { useEffect, useState } from 'react';
import './overview.css';

const OverviewPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className='overview-container'>
        <p>Loading...</p>
      </div>
    ); // Render a loading state on the server
  }

  return (
    <div className="overview-container">
      <h2 className="section-header">Introduction</h2>
      <p>
        The ability to obtain healthcare is very important; be it a check-up, care after an emergency or treatment for any other type of sickness, being able to access and afford quality care is crucial. The fact though is that it is not always easy to access the care one needs pressingly or even if that care is available, it is hard to afford it.
      </p>
      <p>
        In America specifically, expensive healthcare is the norm and is widely discussed: the tale of someone getting perhaps an hour’s care in the emergency room and then being shocked with thousands of dollars worth of resources that they have drained. Provided this widespread high expense, emergency health situations are probably on people&apos;s list of mortal fears.
      </p>

      <h2 className="section-header">Healthcare and Risk</h2>
      <p>
        Healthcare can incur high unexpected expenses; therefore one has to think about financial risk when managing finances. Contrary to the nature of routine spendings, where costs are predictable, there likely is no telling when one would get into an emergency health situation and have to unexpectedly shed a lot of money that one potentially does not have. For this reason, investing in health insurance affords higher certainty in a long term sense by allowing monthly contributions that produce benefits in times of emergency.
      </p>

      <h2 className="section-header">Ways of Purchasing</h2>
      <p>
        Context somewhat dictates the mode in which one can purchase health insurance. They are as follows:
      </p>
      <ul>
        <li>
          <strong>Group Health Insurance:</strong> Health insurance is purchased through affiliation with a certain entity like a labor union, an association or one’s job. A particular subset of this category is the Employer Sponsored Insurance (ESI). This the employer offers to the employee (and their dependents) as a fringe compensation (compensation other than wages). In this setting, the employer negotiates the terms of the coverage on the employee’s behalf.
        </li>
        <li>
          <strong>Non-group Health Insurance:</strong> Health insurance is purchased by the individual. One way to do this is through the exchange, which serves as a form or marketplace where clients learn about and buy insurance. An example of the marketplace is the website: <a href="https://healthcare.gov" target="_blank" rel="noopener noreferrer">healthcare.gov</a>. Another way is directly from the insurer. In this case, one can use the service of agents or brokers to learn about the plans. Typically, agents are either captive or independent and are employed by one or multiple companies, respectively. In any case, they are like salespeople. Brokers on the other hand are like consultants and are always independent although they may have affiliations to various companies.
        </li>
      </ul>
      <p>
        Under any of these modalities (ESI or marketplace), purchasing or renewal happens during the open season, a period that lasts from November 1st to January 15th, every year. A qualifying life event is one that makes a customer eligible for changing their plan outside the open season; they include: marriage, childbirth, state change and divorce.
      </p>
      <p>
        <strong>Summary:</strong> Health insurance can be purchased through an employer (ESI); through other associations; or individually, in the marketplace.
      </p>

      <h2 className="section-header">Differences In Plans</h2>
      <p>Insurance plans themselves can differ from each other in the type of services they provide, the kinds of people that can be enrolled (coverage), their cost structure, etc. To some degree, these factors determine the quality and expense of the insurance that one is buying. </p>
      <h3 className="subheading">Coverage</h3>
      <ul>
        <li><strong>Self-only coverage: </strong>Only the person buying is insured is covered</li>
        <li><strong>Self-plus-one coverage:</strong> Includes the enrollee and another eligible family member (i.e. a legal spouse and other dependents, including children younger than 26 years.)</li>
        <li><strong>Family coverage:</strong> Includes the spouse and/or dependents of the customer. </li>
        <li><strong>Self-plus children coverage:</strong> Children are allowed to remain on their parent’s health insurance until the age of 26, which in principle means the end of the birth month for an ESI and the end of the year for a marketplace plan. The exception is those children with some long term illness. </li>
      </ul>
      <h3 className="subheading">Covered Services</h3>
      <p>Insurers only cover services that they classify as medically necessary care; that is, care or supplies that meet accepted standards of medicine are needed to prevent, diagnose, and treat illnesses and their symptoms. Any care that the insurer does not specify as belonging to that lies outside this category (inclusions of which they specify) is out of the coverage area.</p>
      <p>While there seems to be one definition for medically necessary care, what this actually is can vary from one insurer to the next. Thus one insurer might insure against alternative care like acupuncture or chiropractic services while another might not. Even when insurers agree on what they consider to be medically necessary care, the specifics of what they cover might differ. Thus a customer can pay a certain number of maternal visits to their healthcare provider, different from another customer under another plan. </p>
      <h3 className="subheading">Cost</h3>
      <p>Insurance plans can also differ based on the way the amount that is paid on a yearly or monthly basis. This yearly, semi-annual or monthly fee is referred to as the premium. It is similar to the subscription fee that one pays for Netflix or other such services: It is steady and is what keeps the subscription active.</p>
      <p>People who purchase through the marketplace typically get some form of tax credit to reduce their premiums. This reduction comes in through an income tax refund. Eligibility depends on their income level and the types of health insurance they qualify for.</p>
      <h3 className="subheading">Cost Sharing</h3>
      <p>Beyond the monthly or yearly premium, the enrollee in insurance still shares some of the cost that comes with obtaining health care.</p>
      <p>Before the insurer even begins assisting with fees, the insured is on their own and has to settle any bills until a certain amount is reached. This amount is the deductible. After this milestone, the insurer steps in. But still, further cost-sharing obligations exist for the customer and end only after yet another milestone is cleared: when the out-of-pocket (OOP) maximum is attained. After this, the insurer is responsible for all covered services. This makes it so that people requiring substantial healthcare are not fulfilling the cost-sharing obligation indefinitely. </p>
      <p>The cost-sharing that exists after the deductible comes in the form of a copay or coinsurance. The fundamental difference is that copay entails paying a flat fee per service while coinsurance is quoted in percentages. Therefore, for a higher-cost service one pays higher in terms of actual money when cost sharing is in coinsurance.  As a note, the premium is not factored into the calculation of the OOP maximum or deductible.</p>
      <h3 className="subheading">Networks and Providers</h3>
      <p>Under some insurance plans, one is free to seek care anywhere with equal levels of responsibility from the insurer. Other plans require that the insured stays within a particular network, which is a group of providers that the insurance companies have negotiated with and who agree to render services at favorable rates to the insurance company.  </p>
      <p>These dynamics also capture more ways in which health insurance plans differ. Also, the flexibility a plan provides with networks or not dictates in large part whether premiums, deductibles, or out-of-pocket maxima are high or low. Below are classes of insurance plans based on their network restrictions.</p>
      <ul>
        <li><strong>Indemnity insurance: </strong>Under this type of plan, the consumer is allowed to decide where to seek health care. There is no concept of networks. With this level of flexibility, the insurance company typically does not negotiate terms with providers and has little control over costs. Therefore indemnity insurance is typically characterized by high premiums and cost sharing.</li>
        <li><strong>Human Maintenance Organizations (HMO):</strong> The insured faces the lowest cost sharing levels when they use services of in-network providers. When a person enrolls in this type of plan, they are assigned a primary care provider who is responsible for the insured’s primary care (contrast with specialized care). Visits to a specialist will require permission/ a referral from the primary care provider.
          <br /> <br />A lot of insurance plans go under the HMO umbrella. However, many of these plans differ slightly in how they operate and the specifics of the things they cover. For example, network size, one, and the rules governing when and under what conditions one can go out-of-network may vary.
          <br /> <br /> Provided this tight control, HMOs typically have lower premiums and deductibles.</li>
        <li><strong>Preferred Provider Organizations (PPO):</strong> Plans in this category offer flexibility that is between that of HMOs and indemnity insurance. PPOs are associated with a given network but the consumer has the option of choosing their own primary care provider. </li>
      </ul>
      <h2 className="section-header">References</h2>
      <ul>
        <li>Health Insurance Plan (HIP/HMO). (2024). Health Insurance Plan (HIP/HMO). In Health Insurance Plan (HIP/HMO).  <a href="https://www.emblemhealth.com/content/dam/emblemhealth/pdfs/resources/ghi/2024/hip-hmo-ri-brochure-2024-emblemhealth.pdf" target="_blank" rel="noopener noreferrer">https://www.emblemhealth.com/content/dam/emblemhealth/pdfs/resources/ghi/2024/hip-hmo-ri-brochure-2024-emblemhealth.pdf</a></li>
        <li>Centers for Medicare & Medicaid Services. (2023). Health Insurance Basics. In Health Insurance Basics. <a href="https://www.cms.gov/files/document/nsa-health-insurance-basics.pdf" target="_blank" rel="noopener noreferrer">https://www.cms.gov/files/document/nsa-health-insurance-basics.pdf</a></li>
        <li>Patient Protection and Affordable Care Act. (2010). In Public Law (Vol. 111, pp. 119–121).<a href="https://www.congress.gov/111/plaws/publ148/PLAW-111publ148.pdf" target="_blank" rel="noopener noreferrer">https://www.congress.gov/111/plaws/publ148/PLAW-111publ148.pdf</a></li>
      </ul>
    </div>
  );
};

export default OverviewPage;