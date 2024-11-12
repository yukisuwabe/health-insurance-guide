"use client";
import React, { useEffect, useState } from 'react';
import './dictionary.css';

const DictionaryPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const terms = [
    { term: 'Premium', definition: 'The amount you pay for your health insurance every month.' },
    { term: 'Deductible', definition: 'The amount you pay for covered health care services before your insurance plan starts to pay.' },
    { term: 'Copayment', definition: 'A fixed amount ($20, for example) you pay for a covered health care service after you’ve paid your deductible.' },
    { term: 'Coinsurance', definition: 'Your share of the costs of a covered health care service, calculated as a percentage (for example, 20%) of the allowed amount for the service.' },
    { term: "Preferred Provider Organizations (PPOs)", definition: "Pay less for using providers within the plan’s network, can still use other doctors and hospitals without a referral but for an additional cost." },
    { term: "Point-of-Service (POS)", definition: "Pay less for using providers within the plan’s network, required to get referrals from your primary doctor for specialists." },
    { term: "Health Maintenance Organizations (HMOs)", definition: "Limited to care from doctors who work for or contract with the HMO and aren’t covered for out-of-network care (except in an emergency), may be required to live or work in service area (i.e. same state) to qualify for coverage. Focuses on prevention and wellness." },
    { term: "Exclusive Provider Organizations (EPOs)", definition: "Only covered if you use doctors, specialists, or hospitals in the plan’s network (except in an emergency)" }
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
            <span className="dictionary-definition">{item.definition}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DictionaryPage;