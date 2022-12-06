import { Link } from 'react-router-dom'
import Nav from '../components/nav'
import dh_header from '../elements/dh_header.png'

function Home() {
  return (
    <div className="page">
      <img src={dh_header} alt="discovery house logo" className="header_logo" />
      <Nav />
    </div>
  )
}

export default Home
