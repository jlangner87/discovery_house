import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function HomeTop() {
  return (
    <div className="HomeTop">
      <NavLink className='home-top-links' to={'/'}>Home</NavLink>
      <HashLink className='home-top-links' to={'#top'}>To Top</HashLink>
    </div>
  )
}

export default HomeTop