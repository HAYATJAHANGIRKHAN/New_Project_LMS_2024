
 import app from './app.js'; // Import the app instance
 import { config } from 'dotenv';

 // Load environment variables
config();
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
 console.log(`APP is running at http://localhost:${PORT}`);
});
