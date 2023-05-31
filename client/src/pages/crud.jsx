import LogoutButton from '../components/LogOutButton'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

function CRUD() {
  let initialState = {
    title: "",
    contnet: "",
    image: "",
    link: ""
  }

  const [formState, setFormState]= useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`${BASE_URL}/api/events`, formState)
    setFormState(initialState)
    alert(`${formState.title} was successfully posted`)
  }

  return ( 
    <div className="page">
      <h3 className='page_title'>Admin Page</h3>
      <div>
        <h3>Create a new post</h3>
        <form className='post_form' onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input onChange={handleChange} id='title' type="text" value={formState.title}/>
          <label htmlFor="content">Content</label>
          <textarea onChange={handleChange} id="content" type="text" value={formState.contnet}/>
          <label htmlFor="image">Image (optional)</label>
          <input onChange={handleChange} type="text" value={formState.image}/>
          <label htmlFor="link">Link (optional)</label>
          <input onChange={handleChange} type="text" value={formState.link}/>
          <button type='submit'>submit</button>
        </form>
      </div>
      <LogoutButton/>
    </div>
  )
}

export default CRUD
