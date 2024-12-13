import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema({
  fullName:{
    type: 'String',
    required:[true, 'Name is required'],
    minLength: [5,'Name is required must be at least 5 characters'],
    maxLenth: [50,'Name is required must be at lessthan 50 characters'],
    lowercase: true,
    trim: true,

  },
  email:{
     type:'String',
     required:[true, 'Email is required'],
     unique: true,
     lowercase: true,
     trim: true,
  },
     
  password:{
    type:'String',
    required:[true, 'Password is required'],
    minLength: [8,'Password must be at least 8 characters'],
    trim: true,
    select: false,
  },
  avatar:{
    public_id: {
        type: String,
        
    },
    secure_url:{
      type: String,
    }
  },
  role:{
  type: String,
  enum: ['USER', 'ADMIN'], 
  default: 'USER',

  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,


},{

    timestamps:true
});
userSchema.pre('save', async function (next){
  if(!this.isModified('password')){
    return next();
  }
  this.password=  await bcrypt.hash(this.password,10);
});

const user = model('User, userSchema');


export default User;