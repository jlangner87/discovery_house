import { NavLink } from 'react-router-dom'
import dh_about from '../elements/dh_about.png'
import dh_support from '../elements/dh_support.png'
import dh_contact from '../elements/dh_contact.png'
import dh_links from '../elements/dh_links.png'
import dh_feed from '../elements/dh_feed.png'

function Nav() {
  return (
    <div className="nav_bar">
        <NavLink to={'/about'}><img src={dh_about} alt="about icon" className='nav_tiles'/></NavLink>
        <NavLink to={'/announcements'}><img src={dh_feed} alt="announcements icon" className='nav_tiles'/></NavLink>
        <NavLink to={'/donate'}><img src={dh_support} alt="support icon" className='nav_tiles'/></NavLink>
        <NavLink to={'/connect'}><img src={dh_contact} alt="connect icon" className='nav_tiles'/></NavLink>
      <NavLink to={'/links'}><img src={dh_links} alt="links icon" className='nav_tiles'/></NavLink>
    </div>

    
  )
}

export default Nav
