const express = require("express");
const app = express();



const bdconfig = require("./DB");
const roomRoote = require("./routes/roomRouter")

app.use('/api/rooms' , roomRoote)

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server is flow in this port => ${port}`));


















// const express = require("express");
// const app = express();

// const bdconfig = require("./DB"); // Assuming your DB config is correct
// const roomRouter = require("./routes/roomRouter"); // Fixed typo

// const port = process.env.PORT || 5050;

// app.use(express.json()); // Middleware to parse JSON
// app.use("/rooms", roomRouter); // Mount your router

// // Basic Route
// app.get("/", (req, res) => {
//     console.log(req.headers.accept);
    
//     res.send({name: "my name", num: 10}); 
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));


