"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './form.css';

const Page: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    age: "",
    parentInsurance: "",
    sameStateAfterGrad: "",
    employerOptOut: "",
    primaryDoctorVisits: "",
    chronicIllness: "",
    sameStateInsurance: "",
    providersInNetwork: ""
  });
  const [isClient, setIsClient] = useState(false);
  const ageLessThan26 = formData.age && parseInt(formData.age) < 26;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    router.push(`/result?${queryString}`);
    console.log('Form Data Submitted:', formData);
  };

  if (!isClient) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    ); // Render a loading state on the server
  }

  return (
    <div className='form-container'>
      <h1 className='form-header'>Find the Right Insurance for You!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        {ageLessThan26 ? <div>
          <label htmlFor="parentInsurance">Are you currently on your parent&apos;s insurance plan?</label>
          <select name="parentInsurance" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div> : <div></div>}
        {ageLessThan26 ? <div>
          <label htmlFor="sameStateAfterGrad">Will you be living in the same state as your parents after you graduate?</label>
          <select name="sameStateAfterGrad" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div> : <div></div>}
        <div>
          <label htmlFor="employerOptOut">Does your employer offer an opt-out payment?</label>
          <select name="employerOptOut" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="primaryDoctorVisits">How often do you go to the doctor (either primary care or specialist)?</label>
          <select name="primaryDoctorVisits" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Once a year">Once a year</option>
            <option value="2-3 times a year">2-3 times a year</option>
            <option value="Once a month">Once a month</option>
            <option value="Greater than once a month">Greater than once a month</option>
          </select>
        </div>
        <div>
          <label htmlFor="chronicIllness">Do you have a chronic illness?</label>
          <select name="chronicIllness" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="sameStateInsurance">Do you live in the area that will be providing your health insurance plan?</label>
          <select name="sameStateInsurance" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="providersInNetwork">Are your current primary care providers within the health insurance network?</label>
          <select name="providersInNetwork" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Don’t know">I Don’t know</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;