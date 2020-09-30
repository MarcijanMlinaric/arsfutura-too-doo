import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Title from './Title'

const List = (props) => {
    const [state, setState] = useState('')

    useEffect(() => setState(JSON.parse(props.list)), [])

    console.log(state)
    

    return (
        <React.Fragment>
            {state.data ? (
            <Title title={state.data.attributes.title}/>
            ) : (<div>Unable to load!</div>)}

        </React.Fragment>
    )

}

export default List