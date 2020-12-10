const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// set up port
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

// add routes
const router = require('./routes/router.js');
app.use('/api', router);

//Handle production
if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));