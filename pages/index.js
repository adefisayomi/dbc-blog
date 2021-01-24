import Footer from '../src/layout/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Icon } from 'semantic-ui-react';

const Home = () => {
  return (
    <div className= {styles.home}>
    <section className= {styles.home_main}>
      <aside>
        <span className= {styles.home_aside_backgroundImage}>
          <Icon name= 'twitter' />
        </span>
        <ul>
          <li><span><Icon name= 'search'/></span>Follow your interests.</li>
          <li><span><Icon name= 'users' /></span>Hear what people are talking about.</li>
          <li><span><Icon name= 'comment outline' /></span>Join the conversation.</li>
        </ul>
      </aside>
      <main>
        <div className= {styles.home_main_login}>
            <span>
            <input type="text" name="password" id="password" placeholder= 'Phone, email, or username'/>
            <input type="password" name="password" id="password" placeholder= 'Password'/>
            <button>Log in</button>
            </span>
            <Link href= '#'><a>Forgot password?</a></Link>
        </div>
        <div className= {styles.home_main_create}>
          <span className= {styles.home_main_create_icon}>
            <Icon name= 'twitter' size= 'huge' />
          </span>
          <h1>
          See what’s happening in the world right now
          </h1>
          <p>Join Twitter today.</p>
          <Link href='#'><a id= {styles.colored_btn}>Sign up</a></Link>
          <Link href='#'><a>Log in</a></Link>
        </div>
      </main>
    </section>
    <div className= {styles.home_footer_login}>
        <Link href='#'><a id= {styles.colored_btn}>Sign up</a></Link>
        <Link href='#'><a>Log in</a></Link>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  )
}

export default Home
