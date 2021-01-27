import nc from 'next-connect'
import {Auth, Db} from '../../server/config'
import bcrypt from 'bcryptjs'
import emailValidator from 'email-validator'

const login = nc();

login.post(async (req, res) => {

    const {username, password} = req.body
    const regEx = /[a-zA-Z]/g;

    const isEmail = username.includes('@')
    const textString = regEx.test(username)

    const userInfo = isEmail ? 'email' : textString ? 'username' : 'phoneNumber'

    try {
        if(!username || !password) {
            res.status(200).json({success: false, message: 'All field are required.'})
            return
        }
        if(userInfo == 'email' && !emailValidator.validate(username)){
            res.status(200).json({success: false, message: 'Email is not valid.'})
            return
        }
        else{
            const isValidUser =  await Db.collection('users').where( `${userInfo}`, '==', username).get()
            if(isValidUser.empty){
                res.status(200).json({success: false, message: `${userInfo} is not valid.`})
            }else{
                isValidUser.forEach( async (doc) => {
                    // compare the password .... 
                   
                    // after if it matches create token here and send back to the front
                        const token = await Auth.createCustomToken(doc.id, {username: doc.data().username})
                        res.status(200).json({success: true, message: token});
                    
                  });
            }
            
        }
    }
    catch(err) {
        res.status(500).json({success: false, message: err})
    }
})
login.get(async (req, res) => {
    res.json({success: true, message: 'get....'})
})

export default login