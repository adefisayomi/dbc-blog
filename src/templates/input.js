import styles from '../../styles/template.module.css'

const Input = ({placeholder, value, name, type, onChange}) => {

    return (
        <div>
            <div className= {styles.twitter_input}>
            <input type= {type} name= {name} value= {value}  autocomplete="off" required onChange= {onChange}/>
            <label for= {name} className= {styles.label_name}>
                <span className= {styles.content_name}>{placeholder}</span>
            </label>
            </div>
        </div>
    )
}

export const TwitterSelect = ({options, name, placeholder, style, value, onChange}) => {

    return (
        <div className= {styles.twitter_select_form} style= {style}>
            <select  className= {styles.twitter_select}  onChange= {onChange} name= {name}>
            <option key= 'default' hidden selected >{placeholder}</option>
                {options && options.map(val => (
                    <option key= {val.key} value= {val.value} >{val.text}</option>
                ))}
            </select>
            <label for= 'input' className= {styles.select_label_name}>
                <span className= {styles.select_content_name}>
                    {placeholder}
                </span>
            </label>  
        </div>
    )
}

export default Input