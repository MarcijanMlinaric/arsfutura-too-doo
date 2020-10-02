import React from 'react'
import {useState} from 'react'

const ToDo = (props) => {
    const [checked, setChecked] = useState(props.checked)
    

    const onCheckHandler = (e) => {
        setChecked(!checked)
        props.onCheck(e)
    }

    return (
        <div>
            <p>{props.name}</p>
            <input type="checkbox" checked={checked} id={props.id} onChange={onCheckHandler} />
        </div>
    )
}

export default ToDo