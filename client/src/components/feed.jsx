import { useState, useEffect } from "react"
import { BASE_URL } from "../globals"
import axios from 'axios'

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
        <div id={post.id} className="feed_card">
          <h3>{post.title}</h3>
          <p className="feed_card_content">{post.body}</p>
          <p className="feed_link"><a href={post.link}>{post.linkTitle}</a></p>
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
        </div>
      )}
    </div>
    </div>
  )
}

export default Feed
