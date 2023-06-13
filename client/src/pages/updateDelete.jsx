import { BASE_URL } from "../globals"
import { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

const UpdateDelete = () => {
  let {event_id} = useParams()
  let [post, setPost] = useState('')


  useEffect(() => {
    const thisPost = async () => {
      let response = await axios.get(`${BASE_URL}/api/admin/${event_id}`)
      setPost(response.data)
    }
    thisPost()
  }, [])


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
    await axios.patch(`${BASE_URL}/api/edit/${event_id}`, formState)
    setFormState(initialState)
    alert(`Post was updated.`)
  }

  return (
    <div className="feed_container">
      <form onSubmit={handleSubmit} className="post_form">
        <label for="title">Title:</label>
        <input onChange={handleChange} value={post.title} id="title" type="text" placeholder={post.title}/>
        <label for="body">Content:</label>
        <textarea onChange={handleChange} value={post.body} id="body" type="text"/>
        <label for="img">Image (optional):</label>
        <input onChange={handleChange} value={post.img} id="img" type="url" placeholder="paste image URL here"/>
        <label for="linkTitle">Link Title (optional):</label>
        <input onChange={handleChange} value={post.linkTitle} id="linkTitle" type="text"/>
        <label for="link">Link URL (optional):</label>
        <input onChange={handleChange} value={post.link} id="link" type="url" placeholder="paste link URL here"/>
        <button type='submit'>UPDATE</button>
      </form>
    </div>
  )
}

export default UpdateDelete