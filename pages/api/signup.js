import nc from 'next-connect'
import {Auth, Db} from '../../server/config'
import bcrypt from 'bcryptjs'
import emailValidator from 'email-validator'

const signup = nc();

signup.post( async (req, res) => {

    const {name, year, day, month, email, phone} = req.body
    const isEmail = email ? 'email' : 'phoneNumber'
    const isEnailData = email ? email : phone
    
    try{
        // check if the user already exist
        const userExist = await Db.collection('users').where('email')
        // const user = await Auth.createUser({isEmail: isEnailData})
        // console.log(user)
        const userData = {
            name: name,
            dateOfBirth: `${month} ${day}, ${year}`,
            created: new Date().toDateString(),
            email: email,
            user_id: 'user.uid',
            phone: phone,
        }
        Db.collection('users').doc('user.uid').set({user: userData}).then(data => {
            res.status(201).json({success: true, message: {id: 'user.uid'}})
        }).catch(err => {throw err})
    }
    
        // if(email && !emailValidator(email)){
        //     res.status(200).json({success: false, message: 'Email is not valid'})
        // }
        // else {
            // hash password here
        // const hashedPassword = await bcrypt.hash(password, 12)

        // create user here
        
        
        
  
        // after all data is verified put inside database
        
    // }
    catch(err) {
        res.status(500).json({success: false, message: err})
    }
})

export default signup