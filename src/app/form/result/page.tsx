"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import './result.css';

const ResultPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const [recommendationData, setRecommendationData] = useState({
    PPO: 0,
    POS: 0,
    HMO: 0,
    EPO: 0,
    parent: false,
    locationConcern: false,
    highDeduct: false,
    highPremium: false,
    hmoEpoNote: false,
    ppoPosNote: false,
  });
  const [displayItems, setDisplayItems] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    const generateRecommendation = (data: { [key: string]: string }) => {
      // Generate a recommendation based on the form data
      console.log('Generating recommendation...');
      const { age, parentInsurance, sameStateAfterGrad, employerOptOut, primaryDoctorVisits, chronicIllness, sameStateInsurance, providersInNetwork } = data;
      const newRecommendationData = { ...recommendationData };
      // Implement your recommendation logic here
      if (parseInt(age) < 26) {
        if (parentInsurance === 'Yes') {
          newRecommendationData.parent = true;
          if (sameStateAfterGrad === 'No') {
            newRecommendationData.locationConcern = true;
          }
        }
        if (parentInsurance === 'Yes' && employerOptOut === 'Yes') {
          newRecommendationData.parent = true;
        }
      }
      switch (primaryDoctorVisits) {
        case 'Once a year':
          newRecommendationData.highDeduct = true;
          break;
        case '2-3 times a year':
          newRecommendationData.highDeduct = true;
          break;
        case 'Once a month':
          newRecommendationData.highPremium = true;
          break;
        case 'Greater than once a month':
          newRecommendationData.highPremium = true;
          break;
        default:
          break;
      }
      if (sameStateInsurance === 'No') {
        newRecommendationData.PPO += 1;
        newRecommendationData.POS += 1;
        newRecommendationData.EPO += 1;
      }
      if (chronicIllness === 'Yes') {
        newRecommendationData.highDeduct = false;
      }
      if (providersInNetwork === 'No') {
        newRecommendationData.PPO += 1;
        newRecommendationData.POS += 1;
        newRecommendationData.ppoPosNote = true;
      } else if (providersInNetwork === 'Yes') {
        newRecommendationData.HMO += 1;
        newRecommendationData.EPO += 1;
      } else {
        newRecommendationData.hmoEpoNote = true;
      }
      console.log("Generated!");
      setRecommendationData(newRecommendationData);
      displayRecommendation(newRecommendationData);
    }

    const displayRecommendation = (data: typeof recommendationData) => {
      // Display the recommendation
      const highestValue = Math.max(data.PPO, data.POS, data.HMO, data.EPO);
      const highestFields = (Object.keys(data) as (keyof typeof data)[]).filter(key =>
        ['PPO', 'POS', 'HMO', 'EPO'].includes(key) && data[key] === highestValue
      );
      const items: JSX.Element[] = [];
      if (data.parent) {
        items.push(
          <div key="parent">
            <p><strong>Stay on your parent&apos;s insurance plan</strong></p>
            {data.locationConcern && <p>Note: Some plans only offer care within the same state. Consult your parents to make sure this is not your case.</p>}
          </div>
        );
      }
      items.push(
        <div key="plan">
          {data.parent && <p><strong>If you want to get off of your parent&apos;s plan: </strong></p>}
          <p className='result-label'>Plan Type:</p>
          <p>{highestFields.join(', ')}</p>
          {data.ppoPosNote && <p>Note: PPO and POS plans may have additional costs.</p>}
          {data.hmoEpoNote && <p>Note: HMO and EPO plans may require you to use providers within the network.</p>}
        </div >
      );
      if (data.highDeduct && !data.highPremium) {
        items.push(
          <div key="highDeductPremium">
            <p>Make sure to choose a plan with high deductible and high premium</p>
          </div>
        );
      } else {
        items.push(
          <div key="highDeductPremium">
            <p>Make sure to choose a plan with low deductible and high premium</p>
          </div>
        );
      }
      setDisplayItems(items);
      console.log("Displayed!");
      setIsLoading(false);
      console.log("Displayed!");
      // return (<div></div>);
    }
    generateRecommendation(params);
  }, [searchParams, recommendationData]);


  return (
    <div className='result-container'>
      {/* <h1 className='result-header'>Form Data</h1>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul> */}
      <h1 className='result-header'>Recommendation</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : displayItems.length > 0 ? (
        <div className='result-item'>
          {displayItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><p>Look at the Dictionary Tab to learn more about what these terms mean!</p></div>
        </div>
      ) : (
        <p>Loading.</p>
      )}
    </div>
  );
};

const ResultPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultPageContent />
    </Suspense>
  );
};

export default ResultPage;