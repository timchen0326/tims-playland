'use client'
import React, { useState } from "react";
import Image from "next/image";
import "./bmi.css";

// Function to determine BMI category
const getBMICategory = (bmi: number) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 25) return "Healthy";
  if (bmi >= 25 && bmi < 30) return "Overweight";
  if (bmi >= 30 && bmi < 35) return "Obese";
  return "Extremely Obese";
};

// Calculate BMI
const calculateBMI = (weight: number, height: number) => weight / (height * height);

// Modern BMI component
function ModernBMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState("");

  const handleWeightChange = (event: any) => {
    const weightValue = parseFloat(event.target.value);
    setWeight(weightValue);
    if (height > 0) {
      const calculatedBmi = weightValue / (height * height);
      setBmi(calculatedBmi);
      setBmiCategory(getBMICategory(calculatedBmi));
    }
  };

  const handleHeightChange = (event: any) => {
    const heightValue = parseFloat(event.target.value);
    setHeight(heightValue);
    if (weight > 0) {
      const calculatedBmi = weight / (heightValue * heightValue);
      setBmi(calculatedBmi);
      setBmiCategory(getBMICategory(calculatedBmi));
    }
  };

  const getBmiPosition = (bmi: number) => {
    if (bmi < 10) return 0;
    if (bmi > 40) return 100;
    return ((bmi - 10) / 30) * 100;
  };

  // BMIs for 71kg/178cm and 81kg/178cm
  const bmi71kg178cm = calculateBMI(71, 1.78);
  const bmi81kg178cm = calculateBMI(81, 1.78);

  return (
    <div className="bmi-box futuristic">
      <h1>Futuristic BMI Calculator</h1>
      <h3>My BMI is {bmi.toFixed(2)}</h3>
      <div>
        <label htmlFor="weight">Weight in Kg:</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height in m:</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div className="bmi-category">Category: {bmiCategory}</div>
      <div className="bmi-number-line">
        <h3>BMI Number Line</h3>
        <div className="number-line">
          <div className="number-line-track">
            <div
              className="number-line-section underweight"
              style={{ width: "28.33%" }}
            ></div>
            <div
              className="number-line-section healthy"
              style={{ width: "21.67%" }}
            ></div>
            <div
              className="number-line-section overweight"
              style={{ width: "16.67%" }}
            ></div>
            <div
              className="number-line-section obese"
              style={{ width: "16.67%" }}
            ></div>
            <div
              className="number-line-section extremely-obese"
              style={{ width: "16.67%" }}
            ></div>
            <div
              className="number-line-indicator"
              style={{ left: `${getBmiPosition(bmi)}%` }}
            ></div>
            <div
              className="number-line-indicator reference-indicator1"
              style={{ left: `${getBmiPosition(bmi71kg178cm)}%` }}
              title="71kg, 178cm"
            ></div>
            <div
              className="number-line-indicator reference-indicator2"
              style={{ left: `${getBmiPosition(bmi81kg178cm)}%` }}
              title="81kg, 178cm"
            ></div>
          </div>
          <div className="number-line-labels">
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40</span>
          </div>
        </div>
      </div>
      <div className="bmi-chart">
        <h3>BMI Chart</h3>
        <Image
          src="/bmi-chart-desktop-new.jpeg"
          alt="BMI Chart"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}

function BMI() {
  return (
    <div>
      <div className="container">
        <ModernBMI />
      </div>
    </div>
  );
}

export default BMI;
