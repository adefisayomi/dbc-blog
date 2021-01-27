import {Modal, Button, Icon} from 'semantic-ui-react'
import styles from '../styles/account.module.css'
import {useEffect, useState} from 'react'
import TwitterInput, {TwitterSelect} from '../src/templates/input'
import Home from './index'
import {months, day, year} from '../src/extras.js/dropDownInfo'
import { Checkbox } from '@material-ui/core'
import axios from 'axios'

const Signup = () => {

  const [form, setForm] = useState({email: '', phone: '', name: '', year: '', day: '', month: ''})
  const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validateForm = () => {
    if( (!form.phone && !form.email) || !form.year || !form.month || !form.day || !form.name){
      setSubmitting(false)
    }else{
      setSubmitting(true)
    }
  }
useEffect(() => {
validateForm()
}, [form])

// swap email to phone 
    const [useEmail, setUseEmail] = useState(true)
    const swapEmail = () => {
      if(useEmail){
        setForm({...form, email: ''})
        setUseEmail(false)
      }else{
        setForm({...form, phone: ''})
        setUseEmail(true)
      }
    }
    
    // next page functions 
    const [page, setPage] = useState(1)
    const nextPage = () => {
      if(page == 3){
        return
      }else{
        setPage(prevState =>  prevState + 1)
      }
    }
    const prevPage = () => {
      if(page == 1){
        return
      }else{
        setPage(prevState =>  prevState - 1)
      }
    }
    const goToPageOne = () => setPage(1)

    // handle submit 
    const handleSubmit = (e) => {
      console.log(form)
      // e.preventDefault()
      // axios.post('/signup', form).then(data => {
      //   console.log(data)
      // }).catch(err => {
      //   console.log(err)
      // })
    }

    return(
        <Home>
           <Modal
                open
                size= 'small'
                style= {{ width: '100%',
                          maxWidth: '600px',
                          height: 'auto',
                          minHeight: '80%',
                          borderRadius: '10px',
                          padding: '10px'
                        }}
            >
              <div className= {styles.signup_header}>
                  <Icon
                      name= {page === 1 ? '' : 'arrow left'}
                      link= {page === 1 ? false : true}
                      size= 'large'
                      style= {{color: ' #1DA1F2', paddingLeft: '15px'}}
                      onClick= {prevPage}
                    />
                    {page == 3 && <h1>Step 3 of 5</h1>}
                  <Icon
                      name= 'twitter'
                      size= 'big'
                      style= {{display: page == 3 ? 'none' : '', color: ' #1DA1F2'}}
                    />
                  <Button 
                      content= 'Next'
                      primary
                      disabled= {!submitting}
                      onClick= {nextPage}
                      style= {{
                                padding: '8px 18px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                display: page == 3 ? 'none' : ''
                              }}
                  />
                  
              </div>
              {/* Page 1 ------- */}

             <div className= {styles.signup_page1} style= {{display: page == 1 ? '' : 'none'}}>
               <h1>Create your account.</h1>
                <TwitterInput
                  placeholder= 'Name'
                  type= 'text'
                  name= 'name'
                  value= {form.name}
                  onChange= {getForm}
                />
                <TwitterInput
                  placeholder= {useEmail ? 'Email' : 'Phone'}
                  type= {useEmail ? 'email' : 'tel'}
                  name= {useEmail ? 'email' : 'phone'}
                  value= {useEmail ? form.email : form.phone}
                  onChange= {getForm}
                />
                <a onClick= {swapEmail}>User email instead.</a>

                <h3>Date of birth.</h3>
                <p>
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </p>
                <span className= {styles.signup_page1_date}>
                    <TwitterSelect
                      placeholder= 'Month'
                      options= {months}
                      name= 'month'
                      onChange= {getForm}
                    />
                    <TwitterSelect
                      placeholder= 'Day'
                      options= {day}
                      style= {{width: '50%'}}
                      name= 'day'
                      onChange= {getForm}
                    />
                    <TwitterSelect
                      placeholder= 'Year'
                      options= {year}
                      style= {{width: '70%'}}
                      name= 'year'
                      onChange= {getForm}
                    />
                </span>
             </div>
             
              {/* Page 2 -------------- */}
             <div className= {styles.signup_page2} style= {{display: page == 2 ? '' : 'none'}}>
                       <h1>Customize your experience</h1>
                       <h3>Track where you see Twitter content across the web</h3>
                       <span>
                         <p>Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</p>
                         <Checkbox
                            color= 'primary'
                            defaultChecked
                            style= {{padding: '0'}}
                         />
                       </span>
                       <p>For more details about these settings, visit the <a href="#">Help Center.</a> </p>
             </div>

              {/* Page 3 ------------- */}
             <div className= {styles.signup_page3} style= {{display: page == 3 ? '' : 'none'}}>
               <h1>Create your account.</h1>
                        <TwitterInput 
                            placeholder= 'Name'
                            type= 'text'
                            name= 'name'
                            value= {form.name}
                            onChange= {goToPageOne}
                        />
                        <TwitterInput 
                            placeholder= {useEmail ? 'Email' : 'Phone'}
                            type= {useEmail ? 'email' : 'tel'}
                            name= {useEmail ? 'email' : 'phone'}
                            value= {useEmail ? form.email : form.phone}
                            onChange= {goToPageOne}
                        />
                        <TwitterInput 
                            placeholder= 'Birth date'
                            type= 'text'
                            value= {`${form.month} ${form.day}, ${form.year}`}
                            onChange= {goToPageOne}
                        />
                        <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Others will be able to find you by email or phone number when provided · Privacy Options</p>
                        <Button 
                          primary
                          content= 'Sign up'
                          onClick= {handleSubmit}
                          style= {{padding: '17px', borderRadius: '50px', fontSize: '17px'}}
                        />
             </div>
    </Modal>
        </Home>
        
    )
}

export default Signup