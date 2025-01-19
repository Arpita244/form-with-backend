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
    const { name, email, message , phone, qualification} = req.body;
  console.log("Received data:", { name, email, message, phone , qualification});

    res.status(200).send({
        message: "Data received successfully!",
        receivedData: {
            name: name,
            email: email,
            message: message,
            phone: phone,
            qualification: qualification,
        },
    });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
