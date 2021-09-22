const Users = require('../../user/models/userModels')
const bcrypt = require('bcrypt')

const userCtrl = {
    // CreateUser
    CreatUser: async (req, res) =>{
        try {
            const {firstname,lastname, email, password,address,phonenumber} = req.body;

            const user = await Users.findOne({email})
            // check email
            if(user) return res.status(400).json({msg: "The email already exists."})
            // check password
            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                firstname, lastname, email, password: passwordHash,address,phonenumber
            })

            // Save mongodb
            await newUser.save()
            return res.status(200).json({msg : "Create Users successfully!"})

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
        await Users.updateOne({ _id: req.body._id }, editUser);
        return res.status(200).json({msg : "Update Users successfully!"})

    },
    // delete user from admin
    deleteUser: async(req, res) => {
        try {
            await Users.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted User Successfully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
 }

module.exports = userCtrl