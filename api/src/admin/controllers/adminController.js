const Admins = require('../models/adminModels')
const bcrypt = require('bcrypt')
const Users = require('../../user/models/userModels')
const jwt = require('jsonwebtoken')
const adminCtrl = {
    // login admin
    login: async (req, res) =>{
        try {
            const {email, password} = req.body;

            const admin = await Admins.findOne({email})
            // check user
            if(!admin) return res.status(400).json({msg: "User does not exist."})
            // check password
            if(admin.password !== password)
            {
                return res.status(400).json({msg: "Wrong email or password, Please re-enter your account or password."})
            }
            // If login success , create access token and refresh token
            // accesstoken = chìa khóa để lấy đc thông tin cá nhân vd email, passs...
            const accesstoken = createAccessToken({id: admin._id})
            const refreshtoken = createRefreshToken({id: admin._id})
            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/admin/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // logout admin
    logout: async (req, res) =>{
        try {
            // clear refreshtoken (refresh_token = thẻ để ra vào) 
            res.clearCookie('refreshtoken', {path: '/admin/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: (req, res) =>{
        try {
            // refresh token when login or gegister 
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})
            // verify token
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, admin) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: admin.id})

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    // get infor admin
    getAdmin: async (req, res) =>{
        try {
            const user = await Admins.findById(req.admin.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // get all admin
    getAdmins: async (req, res) =>{
        try {
            const admins = await Admins.find()
            res.json(admins)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 
    // get all user
    getAllUser : async(req,res) =>{
        try {
            const alluser = await Users.find()
            res.json(alluser)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}
const createAccessToken = (admin) =>{
    return jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (admin) =>{
    return jwt.sign(admin, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}
module.exports = adminCtrl;