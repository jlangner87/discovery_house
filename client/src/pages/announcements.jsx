import Nav from '../components/nav'
import Feed from "../components/feed"


function Announcements() {
  return (
    <div>
      <div>
      <Nav/>
        <h1 className='page_title'>Announcements & Updates</h1>
        <Feed/>
      </div>
    </div>
  )
}

export default Announcements
