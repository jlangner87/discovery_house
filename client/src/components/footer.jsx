import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <NavLink to={'/admin'} className='footer_link'>Admin Login</NavLink>
      <footer><a className='footer_link' href='https://joshua-langner.com'> ©2022 Joshua Langner WebDev · All Rights Reserved </a></footer>
    </div>
  )
}

export default Footer
