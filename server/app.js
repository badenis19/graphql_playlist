const express = require('express');

// invoke the express function to create our app 
const app = express();

app.listen(4000, () => console.log("Listening for request on port 4000"));