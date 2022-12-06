import dh_header from '../elements/dh_header.png'

function Header() {
  return (
    <div className="page">
      <div className="logo_container">
        <img
          src={dh_header}
          alt="discovery house logo"
          className="header_logo"
        />
      </div>
    </div>
  )
}

export default Header
