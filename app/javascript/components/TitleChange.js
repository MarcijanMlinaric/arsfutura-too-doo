import React from 'react'
import { useState, useRef } from 'react'
import styles from '../../assets/stylesheets/styles.module.css'

const TitleChange = (props) => {
    const [disabled, setDisabled] = useState(true)
    const [title, setTitle] = useState(props.title)
    const [buttonText, setButtonText] = useState('Edit')
    const inputRef = useRef(null)

    const onButtonClick = (e) => {
        e.preventDefault()
        if(disabled) {
            setDisabled(false)
            setButtonText('Save')
            inputRef.current.focus()
        } else {
            setDisabled(true)
            setButtonText('Edit')
            e.target.value = title
            props.onSubmit(e)
        }
    }

    const onChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    return (
        <form className={styles.title} onSubmit={props.onSubmit}>
            <input className={styles.titleInput} maxLength="15" ref={inputRef} onChange={onChange} value={title} disabled={disabled} type="text" />
            <button className={styles.titleEdit} type="submit" onClick={onButtonClick}>{buttonText}</button>
        </form>
    )

}

export default TitleChange