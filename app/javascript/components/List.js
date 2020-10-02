import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './Title'
import TitleChange from './TitleChange'
import NewToDo from './NewToDo'
import ToDo from './ToDo'

const List = (props) => {
    const [state, setState] = useState('')
    const [todos, setTodos] = useState('')

    useEffect(() => {
        setState(JSON.parse(props.list))
        setTodos(JSON.parse(props.list).included)

    }, [])

    

    //f11b3550-ef86-4096-9df4-840fff142174


    const onNameChangeHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        axios.patch(`/lists/${state.data.id}`, { "title": e.target.value })
    }

    const onNewTodoHandler = (e) => {

        console.log(e.target.value)
        const newToDo = { "name": e.target.value, "checked": false, "list_id": state.data.id }
        axios.post(`/to_dos/`, newToDo)
            .then(resp => {
                setTodos([...todos, resp.data.data])
            })
            .catch(resp => console.log(resp))

    }

    const onCheckHandler = (e) => {
        axios.patch(`/to_dos/${e.target.id}`, { "checked": e.target.checked })
            .then(resp => console.log(resp))
            .catch(resp => console.log(resp))
    }

    const onButtonClickHandler = (e) => {
        window.location.href = "http://localhost:3000"
    }





    return (
        <React.Fragment>
            {state.data ? (
                <div>
                    <button onClick={onButtonClickHandler}>New ToDo</button>
                    <TitleChange title={state.data.attributes.title} onSubmit={onNameChangeHandler} />
                    <NewToDo onSubmit={onNewTodoHandler} />
                    <div>
                        {todos.map((todo) => (
                            <ToDo key={`ToDo-${todo.id}`} id={todo.id} name={todo.attributes.name} checked={todo.attributes.checked} onCheck={onCheckHandler} />
                        ))}

                    </div>
                </div>



            ) : (<div>Unable to load!</div>)}

        </React.Fragment>
    )

}

export default List