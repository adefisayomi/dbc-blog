import Header from './Header'
import styles from '../../styles/layout.module.css'
import { useEffect, useState } from 'react'
import Nav from './Nav'
import {useRouter} from 'next/router'

const AppWrapper = ({children, nav}) => {

    const {pathname} = useRouter()

    const [path, setPath] = useState('Home')
    const [showNav, setShowNav] = useState(false)

    const doShowNav = () => {
        if(pathname === '/account/login' || pathname === '/account/signup'){
            setShowNav(false)
        }else{
            setShowNav(true)
        }
    }

    
   
    useEffect(() => {
        doShowNav()
    }, [pathname])

    return <>
    <Header />
    <section className= {styles.appwrapper}>
        { showNav && <aside> <Nav /> </aside> }
        <main> {children} </main>
    </section>
    </>
}

export default AppWrapper