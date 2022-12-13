import dh_header from '../elements/dh_header.png'

function Header() {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          src={dh_header}
          alt="discovery house logo"
          className="header_logo"
        />
      </div> 
       <p className='marquee'>
          <span>
            When you need a place
          </span>
          &mdash;We're here to help&mdash;
        </p>

    </div>
  )
}

export default Header
