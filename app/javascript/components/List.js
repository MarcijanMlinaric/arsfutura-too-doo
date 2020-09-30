import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './Title'
import TitleChange from './TitleChange'
import NewToDo from './NewToDo'

const List = (props) => {
    const [state, setState] = useState('')

    useEffect(() => setState(JSON.parse(props.list)), [])



    const onNameChangeHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        axios.patch(`/lists/${state.data.id}`, {"title": e.target.value})
    }

    const onNewTodoHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }


    return (
        <React.Fragment>
            {state.data ? (
                <div>
                    <Title title={state.data.attributes.title} />
                    <TitleChange title={state.data.attributes.title} onSubmit={onNameChangeHandler}/>
                    <NewToDo onSubmit={onNewTodoHandler}/>
                </div>



            ) : (<div>Unable to load!</div>)}

        </React.Fragment>
    )

}

export default List