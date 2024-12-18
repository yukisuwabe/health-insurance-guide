"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './dictionary.css';

interface DefinitionPart {
  title?: string;
  content: string;
  bulletPoints?: string[];
}

interface Term {
  term: string;
  definition: DefinitionPart[];
}

const DictionaryPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const terms: Term[] = [
    {
      term: 'Premium',
      definition: [
        { content: 'The amount you pay for your health insurance every month.' }
      ]
    },
    {
      term: 'Deductible',
      definition: [
        { content: 'The amount you pay for covered health care services before your insurance plan starts to pay.' }
      ]
    },
    {
      term: 'Copayment',
      definition: [
        { content: 'A fixed amount ($20, for example) you pay for a covered health care service after you’ve paid your deductible.' }
      ]
    },
    {
      term: 'Coinsurance',
      definition: [
        { content: 'Your share of the costs of a covered health care service, calculated as a percentage (for example, 20%) of the allowed amount for the service.' }
      ]
    },
    {
      term: "Preferred Provider Organizations (PPOs)",
      definition: [
        { content: 'Pay less for using providers within the plan’s network, can still use other doctors and hospitals without a referral but for an additional cost.' },
        {
          title: 'A Preferred Provider Organization (PPO) is like a gym membership with perks.', content: 'The PPO gives you freedom and options, but you save the most by staying within their network.', bulletPoints: [
            'If you work out at your gym’s main locations (in-network providers), you get full access to all the equipment and classes at a lower cost.',
            'But if you decide to use a different gym (out-of-network provider), you can still go, but you’ll have to pay more for access.',
            'Plus, you don’t need anyone’s permission (no referrals) to try new fitness classes or services—you can choose what works best for you.',
          ]
        }
      ]
    },
    {
      term: "Point-of-Service (POS)",
      definition: [
        { content: "Pay less for using providers within the plan’s network, required to get referrals from your primary doctor for specialists." },
        {
          title: 'A Point-of-Service (POS) plan is like a gym membership that offers two levels of access.',
          content: 'A POS plan gives you a balance of flexibility and cost savings, but it requires more coordination compared to other types of gym memberships.',
          bulletPoints: ['If you work out at the gyms in your membership’s main network (in-network providers), you get discounted rates, and everything is simple and affordable.',
            'If you decide to visit a different gym outside the network (out-of-network providers), you can still go, but you’ll pay more, and you’ll need to get approval from your home gym (primary care physician) first.',
            'You also need to coordinate most of your activities through your home gym, even if you’re sticking to in-network services.'
          ]
        }
      ]
    },
    {
      term: "Health Maintenance Organizations (HMOs)",
      definition: [
        { content: "Limited to care from doctors who work for or contract with the HMO and aren’t covered for out-of-network care (except in an emergency), may be required to live or work in service area (i.e. same state) to qualify for coverage. Focuses on prevention and wellness." },
        {
          title: 'A Health Maintenance Organization (HMO) is like signing up for a membership at a single gym with strict rules.',
          content: 'With an HMO, you save money and keep things straightforward, but your options are limited to that one gym and its rules.',
          bulletPoints: ['You can use all the equipment and attend any classes at this gym (in-network providers) for a low monthly fee.',
            'However, if you decide to go to a different gym (out-of-network provider), your membership won’t cover it, and you’ll have to pay full price out of pocket.',
            'Plus, if you want to access special services like personal training (see a specialist), you have to first check with your gym manager (primary care physician) to get approval before you can proceed.']
        }
      ]
    },
    {
      term: "Exclusive Provider Organizations (EPOs)",
      definition: [
        { content: "Only covered if you use doctors, specialists, or hospitals in the plan’s network (except in an emergency)" },
        {
          title: 'An Exclusive Provider Organization (EPO) is like having a gym membership that only works at specific gyms.',
          content: 'An EPO offers a middle ground: it’s less flexible than a PPO but gives you more freedom than an HMO, as long as you stick to the designated gyms.',
          bulletPoints: [
            'You can work out at any of the gyms in the network (in-network providers) and enjoy full benefits at a lower cost.',
            'However, if you decide to visit a gym outside the network (out-of-network providers), your membership won’t cover anything—you’ll have to pay the full price out of pocket.',
            'The good news is that you don’t need prior approval (no referrals) to try different services or trainers within the network.'
          ]
        }
      ]
    }
  ];

  if (!isClient) {
    return (
      <div className="dictionary-container">
        <h1 className="dictionary-header">Loading...</h1>
      </div>
    ); // Render a loading state on the server
  }

  return (
    <div className="dictionary-container">
      <h1 className="dictionary-header">Health Insurance Terms</h1>
      <ul className="dictionary-list">
        {terms.map((item, index) => (
          <li key={index} className="dictionary-item">
            <span className="dictionary-term">{item.term}</span>
            <div className="dictionary-definition">
              {item.definition.map((part, partIndex) => (
                <div key={partIndex}>
                  {part.title && <strong>{part.title}</strong>}
                  {part.bulletPoints && (
                    <ul>
                      {part.bulletPoints.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  <p>{part.content}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <Image src="/table.jpeg" width={700}
        height={700}
        style={{ width: '70%', height: 'auto' }}
        alt="Table of Health Insurance Plans" />
      <h1 className="dictionary-header">Learn more about the different healthcare plans here:</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gLzt2GjYVeA?si=j0BZfnrSIEsDuNIf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h1 className="dictionary-header">Learn more about the terms here:</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QcKZ2Xin8TA?si=grMhXgB2oejOwDmw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default DictionaryPage;