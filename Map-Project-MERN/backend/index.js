const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8000;
const dotenv = require('dotenv');
const pinRoute = require("./routes/pin");
const userRoute = require("./routes/user");

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{
    console.log('Database connection is established')

})
.catch((err) => {
    console.error(err);
})

app.use("/api/pins/", pinRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
    console.log(`backend server is running at port ${port}`);
});

