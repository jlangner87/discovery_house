import LogoutButton from '../components/LogOutButton'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

function CRUD() {
  let initialState = {
    title: "",
    body: "",
    img: "",
    link: "",
    linkTitle: ""
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
        <form onSubmit={handleSubmit} className="post_form">
        <label for="title">Title:</label>
        <input onChange={handleChange} value={formState.title} id="title" type="text"/>
        <label for="body">Content:</label>
        <textarea onChange={handleChange} value={formState.body} id="body" type="text"/>
        <label for="img">Image (optional):</label>
        <input onChange={handleChange} value={formState.img} id="img" type="url" placeholder="paste image URL here"/>
        <label for="linkTitle">Link Title (optional):</label>
        <input onChange={handleChange} value={formState.linkTitle} id="linkTitle" type="text"/>
        <label for="link">Link URL (optional):</label>
        <input onChange={handleChange} value={formState.link} id="link" type="url" placeholder="paste link URL here"/>
        <button type='submit'>submit</button>
        </form>



      </div>
      <LogoutButton/>
    </div>
  )
}

export default CRUD


{/* <label htmlFor="title">Title</label>
<input onChange={handleChange} id='title' type="text" value={formState.title}/>
<label htmlFor="content">Content</label>
<textarea onChange={handleChange} id="content" type="text" value={formState.message}/>
<label htmlFor="image">Image (optional)</label>
<input onChange={handleChange} type="text" value={formState.image}/>
<label htmlFor="link">Link (optional)</label>
<input onChange={handleChange} type="text" value={formState.link}/>
<button type='submit'>submit</button> */}