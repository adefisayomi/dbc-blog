import styles from '../../styles/blogs.module.css'

const BlogList = () => {

    return (
        <div className= {styles.blog_list}>
            <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="blogger"/>
            <div className= {styles.blog_list_details}>
                <h1>solomon olamilekan</h1>
                <h2>A full-stack web developer</h2>
                <a href="#" target= '_blank'>This is the link to the post</a>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sapiente perspiciatis corrupti delectus nam accusamus quos excepturi dicta, harum a....</p>
            </div>
        </div>
    )
}

export default BlogList