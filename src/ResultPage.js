import React from 'react';
import { useLocation } from 'react-router-dom'; // Hook to access passed state

function ResultPage() {
  const location = useLocation(); // Access the state passed from the previous page
  const { formData, mathResult } = location.state || {}; // Destructure state

  return (
    <div>
      <h1>Form Data and Arithmetic Result</h1>

      <h2>Form Data:</h2>
      <div>
        <p><strong>Name:</strong> {formData?.name}</p>
        <p><strong>Email:</strong> {formData?.email}</p>
        <p><strong>Message:</strong> {formData?.message}</p>
        <p><strong>Phone:</strong> {formData?.phone}</p>
        <p><strong>Qualification:</strong> {formData?.qualification}</p>
      </div>

      <h2>Arithmetic Result:</h2>
      <p>{mathResult !== undefined ? `The result is: ${mathResult}` : 'No result yet.'}</p>
    </div>
  );
}

export default ResultPage;
