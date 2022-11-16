import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="page">
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/donate'}>Donate</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/links'}>Links</Link>
    </div>
  )
}

export default Nav
