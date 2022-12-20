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
      <section>
       <h1 className='marquee'>When you need a place</h1>
       <h3 className='marquee2'>&mdash;We're here to help&mdash;</h3>
       </section>
    </div>
  )
}

export default Header
