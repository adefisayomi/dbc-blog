import Link from 'next/link'
import { useEffect, useState } from 'react'
import {Button, Icon} from 'semantic-ui-react'
import styles from '../styles/account.module.css'
import axios from 'axios'
import {ClientAuth} from '../server/client'

const Login = () => {

    const [form, setForm] = useState({username: '', password: ''})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})

    const [err, setErr] = useState({isError: '', message: ''})
    const [submitting, setSubmitting] = useState(false)
    const [loading, setLoading] = useState(false)
    const validateForm = () => !form.username || !form.password ? setSubmitting(false) : setSubmitting(true)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.post('/login', form)
        .then(res => {
            if(res && !res.data.success) {
                setLoading(false)
                setErr({isError: true, message: res.data.message})
            }
            else{
                setErr({isError: false, message: ''})
                setSubmitting(true)
                console.log(res.data.message)
                // ClientAuth.signInWithCustomToken(res.data.message).then(user => {
                //     setLoading(false)
                //     console.log(user)
                // })
            }
        }).catch(err => {
            setLoading(false)
            setErr({...err, isError: true, message: 'Server error'})
        })
    }

    useEffect(() => {
        validateForm()
    }, [form])

    return(
        <div className= {styles.login}>
            <Icon name= 'twitter' style= {{color: ' #1DA1F2'}} size= 'big' />
            <h1>Log in to Twitter</h1>
            {err.isError && <p className= {styles.login_err}>{err.message}</p>}
            <form onSubmit= {handleSubmit}>
                <input type="text" name= "username" placeholder= 'Phone, Email or Username' onChange= {getForm}/>
                <input type="password" name="password" placeholder= 'Password' onChange= {getForm}/>
                <Button
                    content= 'Log in'
                    style= {{padding: '17px', borderRadius: '50px', fontWeight: 'bold', fontSize: '15px'}}
                    primary
                    disabled= {!submitting}
                    onClick= {handleSubmit}
                    loading= {loading}
                />
            </form>
            <span>
                <Link href='#'><a>Forgot Password? </a></Link>
                <Link href='#'><a>Sign up for Twitter</a></Link>
            </span>
        </div>
    )
}

export default Login