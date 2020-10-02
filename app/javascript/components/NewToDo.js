import React from 'react'
import { useState } from 'react'

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
        <form onSubmit={props.onSubmit}>
            <input onChange={onChange} value={todo} placeholder="Add a to-do" type="text" />
            <button type="submit" disabled={disabled} onClick={onButtonClick}>Add to-do</button>
        </form>
    )

}

export default NewToDo