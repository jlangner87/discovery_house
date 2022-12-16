import HomeLink from '../components/homeLink'
import LoginButton from '../components/LoginButton'

function Admin() {
  return (
    <div className="page">
      <HomeLink/>
      <h1 className='page_title'>Please log in to access this page.</h1>
      <LoginButton/>
    </div>
  )
}

export default Admin
