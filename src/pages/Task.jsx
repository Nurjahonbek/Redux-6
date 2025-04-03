import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../hooks/useDocument'

function Task() {
    const {id} = useParams()
   const {isPending, data} = useDocument('tasks', id)

   if(isPending){
    return <h2>Loading...</h2>
   }
   
    return <div>{data.title}</div>

}

export default Task
