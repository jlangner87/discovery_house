import HomeLink from '../components/homeLink'
import LoginButton from '../components/LoginButton'
import { NavLink } from 'react-router-dom'

function Admin() {

  return (
    <div className="page">
      <HomeLink/>
      <h3 className='page_title'>Admin Page</h3>
      <h1 className='page_content_subheader'>You must be logged in to access this page.</h1>
      <LoginButton/>
      <h2 className='page_content_subheader'>-OR-</h2>
      <NavLink to='/'><button className='login_button'>Go Back</button></NavLink>

    </div>
  )
}

export default Admin
