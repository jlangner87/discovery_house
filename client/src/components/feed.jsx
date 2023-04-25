import { useState, useEffect } from "react"
import { BASE_URL } from "../globals"
import axios from 'axios'

//TODO:: restyle feed page
//Add fields to model for url sharing and image sharing

function Feed() {
const [feed, setFeed] = useState([{}])
useEffect(() => {
  const loadFeed = async () => {
    let res = await axios.get(`${BASE_URL}/api/feed`)
    setFeed(res.data)
  }
  loadFeed()
}, [])


  return (
    <div>
      <div className="feed_container">
      {feed.map((post) =>
        <div className="feed_card">
          <h3 className="feed_title">{post.title}</h3>
          <p className="feed_detail">{new Date(post.createdAt).toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric"
            }
          )}</p>
          <p className="feed_content">{post.body}</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default Feed
