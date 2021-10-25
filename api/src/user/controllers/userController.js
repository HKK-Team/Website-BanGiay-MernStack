const Users = require('../models/userModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    // register
    register: async (req, res) =>{
        try {
            const {firstname,lastname, email, password,address,nationality,phonenumber} = req.body;
            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                firstname, lastname, email, password: passwordHash,address,nationality,phonenumber
            })

            // Save mongodb
            await newUser.save()

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({id: newUser._id})
            const refreshtoken = createRefreshToken({id: newUser._id})
            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // login
    login: async (req, res) =>{
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            // check user
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            // check password
            if(!isMatch) return res.status(400).json({msg: "Wrong email or password, Please re-enter your account or password."})
            // If login success , create access token and refresh token
            // accesstoken = chìa khóa để lấy đc thông tin cá nhân vd email, passs...
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})
            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // logout
    logout: async (req, res) =>{
        try {
            // clear refreshtoken (refresh_token = thẻ để ra vào) 
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // refreshToken
    refreshToken: (req, res) =>{
        try {
            // refresh token when login or gegister 
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})
            // verify token
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    // get User
    getUser: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // edit User
    editUser : async (req,res) =>{
        // check your id
        let user = await Users.findById(req.body._id);
        user = req.body;
        // update to mongodb
        const editUser = new Users(user);
        try {
            await Users.updateOne({ _id: req.body._id }, editUser);
            return res.status(200).json("Bạn đã update thông tin thành công!")

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // edit password
    editPassword : async (req,res) =>{
        // check password
        let user = await Users.findById(req.body._id);
        const check = await bcrypt.compare(req.body.old_password, user.password)
        if(!check) return res.status(400).json({msg : "Old_password incorrect, please try again."});
        if(req.body.confirm_password !== req.body.password)  return res.status(400).json({msg : "Confirm_password incorrect, please try again."});
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        try{
            await Users.findOneAndUpdate({email : req.body.email},{password : passwordHash});
            return res.status(200).json("Bạn đã đổi mật khẩu thành công!")
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
 }


const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl