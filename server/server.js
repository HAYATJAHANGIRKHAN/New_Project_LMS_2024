import Cloudinary from 'cloudinary';
import Razorpay from 'razorpay';
 import app from './app.js'; // Import the app instance
 import { config } from 'dotenv';
 import connectionTODB  from './config/dbconnection.js'


//  // Load environment variables
// config();
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, async () => {
//     await connectionTODB();
//  console.log(`APP is running at http://localhost:${PORT}`);
// });




// Cloudinary configuration
Cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // Razorpay configuration
  export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  
  const PORT = process.env.PORT || 5000;
  
  
  app.listen(PORT, async () => {
    // Connect to DB
    await connectToDB();
    console.log(`App is running at http://localhost:${PORT}`);
  });