
 import app from './app.js'; // Import the app instance
 import { config } from 'dotenv';
 import connectionTODB  from './config/dbconnection.js'


 // Load environment variables
config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectionTODB();
 console.log(`APP is running at http://localhost:${PORT}`);
});
