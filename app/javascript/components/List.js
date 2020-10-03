import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TitleChange from './TitleChange'
import NewToDo from './NewToDo'
import ToDo from './ToDo'
import styles from '../../assets/stylesheets/styles.module.css'

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

        axios.patch(`/lists/${state.data.id}`, { "title": e.target.value })
    }

    const onNewTodoHandler = (e) => {
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


    console.log(todos)


    return (
        <React.Fragment>
            {state.data ? (
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <button className={styles.newListButton} onClick={onButtonClickHandler}>New List</button>
                            <TitleChange title={state.data.attributes.title} onSubmit={onNameChangeHandler} />
                        </div>
                        <div className={styles.inputs}>
                            <NewToDo onSubmit={onNewTodoHandler} />
                        </div>
                        <div className={styles.todos}>
                            {todos.map((todo) => (
                                <ToDo key={`ToDo-${todo.id}`} id={todo.id} name={todo.attributes.name} checked={todo.attributes.checked} onCheck={onCheckHandler} />
                            ))}
                        </div>
                        <div className={styles.footer}>
                            <hr className={styles.footerHr}/>
                            <div className={styles.footerTitle}>Too Doo</div>
                            <div className={styles.footerDesc}>Your to-dos have never been simpler.</div> 
                        </div>
                    </div>
                </div>



            ) : (<div>Unable to load!</div>)}

        </React.Fragment>
    )

}

export default List