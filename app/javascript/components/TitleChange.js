import React from 'react'
import { useState } from 'react'

const TitleChange = (props) => {
    const [disabled, setDisabled] = useState(true)
    const [title, setTitle] = useState(props.title)

    const onButtonClick = (e) => {
        e.preventDefault()
        if(disabled) {
            setDisabled(false)
        } else {
            setDisabled(true)
            e.target.value = title
            props.onSubmit(e)
        }
    }

    const onChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    return (
        <form onSubmit={props.onSubmit}>
            <input onChange={onChange} value={title} disabled={disabled} type="text" />
            <button type="submit" onClick={onButtonClick}>Change title</button>
        </form>
    )

}

export default TitleChange