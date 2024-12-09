const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cors({
origin : [process.env.FRONTEND_URL],
credentials : true,
}));

app.use(cookieParser());

app.use('/ping', function(req, res) {
    res.send('pong');
})