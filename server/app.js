import express from 'express'; 
import cors from  'cors';
import cookieParser from 'cookie-parser';
import { config} from 'dotenv';
config();

import app from express();
import morgan from 'morgan';
app.use(express.json());
app.use(cors({
origin : [process.env.FRONTEND_URL],
credentials : true,
}));

app.use(cookieParser());
app.use(morgan('dev'));

app.use('/ping', function(req, res) {
    res.send('pong');
});


// routes of 3 modules;
app.all('*',(req,res)=>{
    res.status(404).send('Page not found please try again');
});

export default app;