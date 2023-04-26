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

const shareLink = "localhost:3000/announcements/"

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
          <p className="post_date">{new Date(post.createdAt).toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric"
            }
          )}</p>
          <p className="post_date">Share this</p>
          <a href={`${shareLink}#${post.id}`}>FACEBOOK</a>
        </div>
      )}
    </div>
    </div>
  )
}

export default Feed
