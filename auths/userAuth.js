
const User = require('../Models/UserModels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const registerUser = async (req, res) => {
    try {

        const { userName, email, password } = req.body;

        const existingUser = await User.findOne({ email: email })

        if (existingUser) {
            return res.status(400).json({
                message: "user already registered !",
                existingUser
            })
        }
        const hassedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            userName,
            email,
            password: hassedPassword
        })
        res.status(201).json({
            message: "user Registered sucessfully", user
        })
    }

    catch (error) {
        res.status(500).json({ message: error.message })

    }

}

const LogingUser = async (req, res) => {
   try {
     const { email, password } = req.body;

     const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "user not registered! ",
            user
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" })
    }

   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.status(200).json({ message: "Login successful", token })
   } 

   catch (error) {
    res.status(404).json({
        message:"something went wrong ! ",
        error
    })
    
   }



}

module.exports = { registerUser  , LogingUser}