import Link from 'next/link'
import {Button, Icon} from 'semantic-ui-react'
import styles from '../styles/account.module.css'

const Login = () => {

    return(
        <div className= {styles.login}>
            <Icon name= 'twitter' style= {{color: ' #1DA1F2'}} size= 'big' />
            <h1>Log in to Twitter</h1>
            <form>
                <input type="text" name="" id="" placeholder= 'Phone, Email or Username' />
                <input type="text" name="" id="" placeholder= 'Password' />
                <Button content= 'Log in' style= {{padding: '17px', borderRadius: '50px', fontWeight: 'bold', fontSize: '15px'}} primary disabled />
            </form>
            <span>
                <Link href='#'><a>Forgot Password? </a></Link>
                <Link href='#'><a>Sign up for Twitter</a></Link>
            </span>
        </div>
    )
}

export default Login