import {Divider} from 'semantic-ui-react'
import styles from '../../styles/account.module.css'
import BlogList from '../../src/layout/BlogList'

const Signup = () => {

    return(
        <div className= {styles.signup}>
            <div className= {styles.signup_aside}>
                <div className= {styles.signup_blog_list}>
                    <BlogList/>
                    <BlogList/>
                </div>
                <div className= {styles.aside_more}>

                </div>
            </div>
            <Divider vertical>OR</Divider>
            <div className= {styles.signup_form}>
                form
            </div>
           
        </div>
    )
}

export default Signup