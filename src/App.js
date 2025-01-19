import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    qualification: '',
    num1: '',
    num2: '',
    operation: 'add',
  });

  const [result, setResult] = useState(null);
  const [formDataReceived, setFormDataReceived] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data and arithmetic operation request together
      const response = await axios.post('http://localhost:5000/submit', formData);
      
      // Set form data received and operation result to be displayed
      setFormDataReceived(response.data.receivedData);
      setResult(response.data.operationResult); // <-- Make sure this is set with the response

      // Log the response to console
      console.log('Form and operation result received:', response.data);
    } catch (error) {
      alert('Error submitting data.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1><center>Submit your details</center></h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Qualification:
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number 1:
          <input
            type="number"
            name="num1"
            value={formData.num1}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Number 2:
          <input
            type="number"
            name="num2"
            value={formData.num2}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Operation:
          <select
            name="operation"
            value={formData.operation}
            onChange={handleChange}
            required
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display form data and result */}
      {formDataReceived && (
        <div>
          <h2><center>Form Data Received:</center></h2>
          <pre>{JSON.stringify(formDataReceived, null, 2)}</pre>
        </div>
      )}

      {result !== null && (
        <div>
          <h2><center>Arithmetic Result: {result}</center></h2>
        </div>
      )}
    </div>
  );
}

export default App;
