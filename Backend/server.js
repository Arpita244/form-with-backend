const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.post("/submit", (req, res) => {
    const { name, email, message , phone, qualification, operation} = req.body;
  console.log("Received data:", { name, email, message, phone , qualification, num1, num2, operation});

   // Perform arithmetic operation
   let result;
   if (num1 !== undefined && num2 !== undefined && operation) {
     const n1 = parseFloat(num1);
     const n2 = parseFloat(num2);
 
     if (isNaN(n1) || isNaN(n2)) return res.status(400).send('Invalid input for numbers.');
 
     switch (operation) {
       case 'add': result = n1 + n2; break;
       case 'subtract': result = n1 - n2; break;
       case 'multiply': result = n1 * n2; break;
       case 'divide':
         if (n2 === 0) return res.status(400).send('Cannot divide by zero.');
         result = n1 / n2;
         break;
       default: return res.status(400).send('Invalid operation.');
     }
   } else {
     result = "No arithmetic operation provided.";
   }
 

    res.status(200).send({
        message: "Data received successfully!",
        receivedData: {
            name: name,
            email: email,
            message: message,
            phone: phone,
            qualification: qualification,
            
        },
        operationResult: result,
    });
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
