import {Modal, Button, Icon, Form, Dropdown} from 'semantic-ui-react'
import styles from '../styles/account.module.css'
import BlogList from '../src/layout/BlogList'
import {useState} from 'react'
import Home from './index'
import Link from 'next/link'

const Signup = () => {

    const monthOptions = [
        {
          key: 'jan',
          text: 'January',
          value: 'january'
        },
        {
          key: 'feb',
          text: 'February',
          value: 'february'
        },
        {
          key: 'mar',
          text: 'March',
          value: 'march'
        },
        {
          key: 'apr',
          text: 'April',
          value: 'april'
        }
      ]

      let counter = 0
    const [page, setPage] = useState(1)
    const nextPage = () => setPage(counter += 1)
    const prevPage = () => setPage(counter -= 1)

    return(
        <Home>
           <Modal
                open
                size= 'small'
            >
      <Modal.Content>
          <div className= {styles.signup} style= {{display: page == 1 ? '' : 'none'}}>
                <div className= {styles.signup_header}>
                        <Icon />
                        <Icon name= 'twitter' style= {{color: ' #1DA1F2'}} size= 'big' />
                        <Button 
                            content= 'Next'
                            primary
                            // disabled
                            onClick= {nextPage}
                            style= {{padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold', fontSize: '15px'}}
                        />
                    </div>
                    <h1>Create you account.</h1>
                    <Form>
                        <Form.Input
                            placeholder= 'Name'
                        />
                        <Form.Input
                            placeholder= 'Phone'
                        />
                    </Form>
                    <Link href= '#'><a>User email instead.</a></Link>
                    <div className= {styles.signup_date}>
                        <h3>Date of birth</h3>
                        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        <Dropdown
                            placeholder='Month'
                            closeOnBlur
                            selection
                            options={monthOptions}
                            />
                            <Dropdown
                            placeholder='Day'
                            closeOnBlur
                            selection
                            // options={friendOptions}
                            />
                            <Dropdown
                            placeholder='Year'
                            closeOnBlur
                            selection
                            // options={friendOptions}
                            />
            </div>
            <div className= {styles.signup_page2} style= {{display: page == 2 ? 'flex' : 'none'}}>
                this is page 2
            </div>
          </div>
      </Modal.Content>
      
    </Modal>
        </Home>
        
    )
}

export default Signup