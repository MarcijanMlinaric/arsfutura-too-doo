import React from 'react'
import { useState } from 'react'

const NewToDo = (props) => {
    
    const [todo, setTodo] = useState('')

    const onButtonClick = (e) => {
        e.preventDefault()
        e.target.value = todo
        props.onSubmit(e)
        
    }

    const onChange = (e) => {
        e.preventDefault()
        setTodo(e.target.value)
    }

    return (
        <form onSubmit={props.onSubmit}>
            <input onChange={onChange} placeholder="Add a to-do" type="text" />
            <button type="submit" onClick={onButtonClick}>Add to-do</button>
        </form>
    )

}

export default NewToDo