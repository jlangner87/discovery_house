import HomeLink from '../components/homeLink'
import LogoutButton from '../components/LogOutButton'

function CRUD() {
  return (
    <div className="page">
      <HomeLink/>
      <h3 className='page_title'>The CURUD page</h3>
      <p>This is where I will import the forms for creating, updating and deleting events and announcements</p>
      <LogoutButton/>
    </div>
  )
}

export default CRUD
