// const {confiq, config} =require('dotenv');
// config();
 import app from './app';
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
 console.log(`APP is running at http://localhost:${PORT}`);
});