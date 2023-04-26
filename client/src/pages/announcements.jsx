import HomeLink from "../components/homeLink"
import Feed from "../components/feed"


function Announcements() {
  return (
    <div>
      <div>
      <HomeLink/>
        <h1 className='page_title'>Announcements & Updates</h1>
        <Feed/>
      </div>
    </div>
  )
}

export default Announcements
