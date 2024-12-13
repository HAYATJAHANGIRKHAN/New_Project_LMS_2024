
import AppError from "../utils/error.util";
const register = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return next(new AppError('All fields are required', 400));
  }
  const userExists = await User.findOne({ email: email, password: password });
  if (userExists) {
    return next(new AppError('Email already exists', 400));
  }

  const User = await User.create({
    fullName,
    email,
    password,
    avatar: {
      public_id: email,
      secure_url: 'https://'
    }
  });

  if (!User) {
    return next(new AppError('Failed to register user', 500));
  }
  // TODO:FILE UPLOAD 
  await User.save();
  user.password=undefined;

  const token =await user.generateJWTToken();

  res.status(201).json({
    success:true,
    message:'user Successfully registered',
    user,
  })


};

const login = (req, res) => {

};

const logout = (req, res) => {

};

const getProfile = (req, res) => {

};

export {
  register,
  login,
  logout,
  getProfile
};

