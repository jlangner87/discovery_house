import LogoutButton from '../components/LogOutButton'
import { useState, useEffect } from 'react'
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

  const [feed, setFeed] = useState([{}])

  useEffect(() => {
    const loadFeed = async () => {
      let res = await axios.get(`${BASE_URL}/api/feed`)
      setFeed(res.data)
    }
    loadFeed()
  }, [])

  const [formState, setFormState]= useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`${BASE_URL}/api/events`, formState)
    setFormState(initialState)
    alert(`${formState.title} was successfully posted`)
    window.location.reload(true)
  }

  const sortedFeed = feed.sort(function (a, b) {return b.id -a.id})

  return ( 
    <div className="page">
      <h3 className='page_title'>Admin Page</h3>
      <div>
        <h3 className="page_content_header">Create a new post</h3>
        <form onSubmit={handleSubmit} className="post_form">
        <label for="title">Post Title:</label>
        <input onChange={handleChange} value={formState.title} id="title" type="text"/>
        <label for="body">Content:</label>
        <textarea onChange={handleChange} value={formState.body} id="body" type="text"/>
        <label for="img">Image URL (optional):</label>
        <input onChange={handleChange} value={formState.img} id="img" type="url" placeholder="paste image URL here"/>
        <label for="linkTitle">Link Title (optional):</label>
        <input onChange={handleChange} value={formState.linkTitle} id="linkTitle" type="text"/>
        <label for="link">Link URL (optional):</label>
        <input onChange={handleChange} value={formState.link} id="link" type="url" placeholder="paste link URL here"/>
        <button type='submit'>submit</button>
        </form>
      <h3 className="page_content_header">All Current Posts</h3>
      <div className="feed_container">
      {sortedFeed.map((post) =>
        <div id={post.id} className="feed_card">

          <h3>{post.title}</h3>
          <p className="feed_card_content">{post.body}</p>
          <p className="feed_link">{post.link}{post.linkTitle}</p>
          <br/>
          <img src={post.img}/>
          <p className="post_date">Posted: {new Date(post.createdAt).toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric"
            }
          )}</p>
          <p className='post_date'>SERVER ID: {post.id}</p>
          <a id='update' href={`/posts/${post.id}`}>UPDATE POST</a> <br/>
          <button id='delete' onClick={
                async () => {
                await axios.delete(`${BASE_URL}/api/delete/${post.id}`)
                alert(`Post was deleted`)
                window.location.reload(true)
              }
          }>DELETE</button>
        </div>
      )}
    </div>
      </div>
      <LogoutButton/>
    </div>
  )
}

export default CRUD
