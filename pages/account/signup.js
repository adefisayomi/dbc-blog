import {Divider, Form, Button, Header, Image} from 'semantic-ui-react'
import styles from '../../styles/account.module.css'
import BlogList from '../../src/layout/BlogList'
import {useState} from 'react'

const Signup = () => {

    const [showPass, setShowPass] = useState(false)
    const toggleShowPass = () => showPass ? setShowPass(false) : setShowPass(true)

    return(
        <div className= {styles.signup}>
            <div className= {styles.signup_aside}>
                <h1>latest blogs.</h1>
                {/* <div className= {styles.signup_blog_list}>
                    <BlogList/>
                    <BlogList/>
                </div> */}
            </div>
            {/* <Divider vertical segment>OR</Divider> */}
            <div className= {styles.signup_form}>
            <Header as='h2'>
                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> DBC-blog
            </Header>
                <Form>
                    <Form.Input 
                        placeholder= 'Username'
                        icon= 'user'
                    />
                    <Form.Input 
                        placeholder= 'Password'
                        type= {showPass ? 'text' : 'password'}
                        icon= {{link: true, name: showPass ? 'eye' : 'eye slash', onClick: toggleShowPass}}
                    />
                    <Button 
                        content= 'Login'
                        primary
                    />
                </Form>
            </div>
           
        </div>
    )
}

export default Signup