import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <NavLink to={'/admin'} className='footer_link'>Admin Login</NavLink>
      <footer>©2022 Joshua Langner · All Rights Reserved</footer>
    </div>
  )
}

export default Footer
