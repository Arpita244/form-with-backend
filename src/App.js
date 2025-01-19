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
    num1: '',       // First number for arithmetic
    num2: '',       // Second number for arithmetic
    operation: 'add', // Default operation
  });
  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data:", formData);
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      console.log(response)
      alert(JSON.stringify(response.data.receivedData));
      console.log('Data received:', response.data);

      const mathResponse = await axios.post('http://localhost:5000/operate', {
        num1: formData.num1,
        num2: formData.num2,
        operation: formData.operation,
      });
      setResult(mathResponse.data.result);  // Display result from backend
      console.log('Math result received:', mathResponse.data);
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
          phone:
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          qualification:
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
      {result !== null && (
        <h2><center>Arithmetic Result: {result}</center></h2>
      )}
    </div>
  );
}

export default App;
