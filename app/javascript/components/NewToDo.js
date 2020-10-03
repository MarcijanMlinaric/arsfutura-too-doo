import React from 'react'
import { useState } from 'react'
import styles from '../../assets/stylesheets/styles.module.css'


const NewToDo = (props) => {
    const [todo, setTodo] = useState('')
    const [disabled, setDisabled] = useState(true)

    const onButtonClick = (e) => {
        e.preventDefault()
        e.target.value = todo
        setTodo('')
        setDisabled(true)
        props.onSubmit(e)
        
    }

    const onChange = (e) => {
        e.preventDefault()
        setTodo(e.target.value)
        if(e.target.value) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <form onSubmit={props.onSubmit} className={styles.newTodo}>
            <button className={styles.newButton} type="submit" disabled={disabled} onClick={onButtonClick}>+</button>
            <input className={styles.newInput} maxLength="50" onChange={onChange} value={todo} placeholder="Add a to-do" type="text" />
           
        </form>
    )

}

export default NewToDo