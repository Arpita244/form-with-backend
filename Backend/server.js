const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Handle both form data and arithmetic operation in one route
app.post("/submit", (req, res) => {
  const { name, email, message, phone, qualification, num1, num2, operation } = req.body;
  
  // Handle form data
  console.log("Received form data:", { name, email, message, phone, qualification });

  // Handle arithmetic operations
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let operationResult;

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).send('Invalid numbers for arithmetic operation.');
  }

  switch (operation) {
    case 'add':
      operationResult = n1 + n2;
      break;
    case 'subtract':
      operationResult = n1 - n2;
      break;
    case 'multiply':
      operationResult = n1 * n2;
      break;
    case 'divide':
      if (n2 === 0) {
        return res.status(400).send('Cannot divide by zero.');
      }
      operationResult = n1 / n2;
      break;
    default:
      return res.status(400).send('Invalid operation.');
  }

  // Respond with both form data and arithmetic result
  res.status(200).send({
    message: "Data received successfully!",
    receivedData: { name, email, message, phone, qualification },
    operationResult: operationResult
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
