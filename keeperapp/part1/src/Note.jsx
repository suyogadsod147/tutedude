import React from 'react'
import './style.css'
const Note = (props) => {
function handleClick(){
  props.onDelete(props.id)
}

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className='deletebtn' onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Note
