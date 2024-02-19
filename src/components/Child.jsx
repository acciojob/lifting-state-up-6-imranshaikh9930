import React from 'react'

function Child({todos,handleComplete}) {
    
    return (
    <div>

        <h1>Child Component</h1>
        {
            todos.map((item)=>(
                <li key={item.id}>{item.text} {!item.isCompleted && <button onClick={()=>handleComplete(item.id)}>Complete</button>}</li>
            ))
        }
    </div>
  )
}

export default Child