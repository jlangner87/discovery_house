import { BASE_URL } from "../globals"
import { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import { init } from "@emailjs/browser"

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

  let prefillTitle = post.title

  let initialState = {
    title: prefillTitle,
    body: "",
    img: "",
    linkTitle: "",
    link: ""
  }

  const [formState, setFormState]= useState(initialState)

  const handleChange = (event) => {
    setFormState({
      ...formState, [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.patch(`${BASE_URL}/api/edit/${event_id}`, formState)
    alert(`Post was updated.`)
    window.location.reload(true)
  }

  return (
    <div className="feed_container">
      <h3 className="page_content_header">Original Post</h3>
      <div id={post.id} className="feed_card">
        <h3>{post.title}</h3>
        <p className="feed_card_content">{post.body}</p>
        <p className="feed_link">{post.link}{post.linkTitle}</p>
        <br/>
        <img src={post.img}/>
        <p className="post_date">
          Posted: {new Date(post.createdAt).toLocaleString(
          "en-US",
          {
          month: "short",
          day: "2-digit",
          year: "numeric"
          }
        )}</p>
        <p className='post_date'>SERVER ID: {post.id}</p>
      </div>
      <h3 className="page_content_header">Edit Post</h3>
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
        <button type='submit'>UPDATE</button>
      </form>
    </div>
  )
}

export default UpdateDelete