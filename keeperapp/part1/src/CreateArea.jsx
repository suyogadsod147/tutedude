import React , {useState} from 'react'
import './style.css'

const CreateArea = (props) => {
    const [note  , setNote] = useState({
        title :"",
        content : "",
    })

    function handleChange(event){
        const {name , value} = event.target
        setNote(preNote =>{
            return {
                ...preNote,
                [name] : value
            }
        })    
    }


    function submitNote(event){
        props.onAdd(note)
        setNote({
            title : "",
            content : "",
        })
        event.preventDefault()

    }

    
  return (
    <div className='notebox'>
        <form className='form'>
            <input name="title"
            onChange={handleChange}
            value={note.title} 
            placeholder='Take a title'
            className='input'
             />
            
            <textarea name="content"
             onChange={handleChange}
             value={note.content}
             placeholder='Take a note...'
             rows="3"
            className='textarea'
             />

            <button onClick={submitNote} className='addbtn'>Add</button>
        </form>
    </div>
  )
}

export default CreateArea
