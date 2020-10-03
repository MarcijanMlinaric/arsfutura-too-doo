import React from 'react'
import {useState} from 'react'
import styles from '../../assets/stylesheets/styles.module.css'

const ToDo = (props) => {
    const [checked, setChecked] = useState(props.checked)
    

    const onCheckHandler = (e) => {
        setChecked(!checked)
        props.onCheck(e)
    }

    return (
        <div className={styles.todo}>
            <input className={styles.check} type="checkbox" checked={checked} id={props.id} onChange={onCheckHandler} />
            <p className={styles.text}>{props.name}</p>
            
        </div>
    )
}

export default ToDo