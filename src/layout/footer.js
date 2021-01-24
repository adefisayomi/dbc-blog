import styles from '../../styles/footer.module.css'

const Footer = () => {

    const footerItem = [
        {name: 'About', link: ''},
        {name: 'Help Center', link: ''},
        {name: 'Terms of Service', link: ''},
        {name: 'Privacy Policy', link: ''},
        {name: 'Cookie Policy', link: ''},
        {name: 'Ads info', link: ''},
        {name: 'Status', link: ''},
        {name: 'Careers', link: ''},
        {name: 'Brand Resources', link: ''},
        {name: 'Advertising', link: ''},
        {name: 'Marketing', link: ''},
        {name: 'Twitter for Business', link: ''},
        {name: 'Developers', link: ''},
        {name: 'Directory', link: ''},
        {name: 'Settings', link: ''},
        {name: '© 2021 Twitter, Inc.', link: ''}
    ]

    return (
        <footer className= {styles.footer}>
            <ul>
                {footerItem.map(foot => (
                    <li><a href="#">{foot.name}</a></li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer
