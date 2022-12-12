import {NavLink} from 'react-router-dom'
import home_icon from '../elements/home_icon.png'

function HomeLink() {
  return (
    <div className='home_link'>
      <NavLink to='/'><img src={home_icon} alt="navigate home icon" className='home_icon'/></NavLink>
    </div>
  )
}

export default HomeLink
