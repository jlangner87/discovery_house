import Nav from '../components/nav'
import Contact from '../components/contact'

//TODO Facebook and email icon links instead of string

function Connect() {
  const exitAlert = () => {
    alert(
      'You are now leaving the Discovery House page and navigating to an external website.'
    )
  }
  return (
    <div className="page">
      <Nav />
      <h1 className="page_title">We want to hear from you</h1>
      <div className="page_content_container">
        <h2 className="page_content_header">Ways you can get get in touch</h2>
        <h2 className="board_member" id="connect">
          Send us a message here
        </h2>
        <Contact />
        <h2 className="board_member" id="connect">
          Or Contact us another way
        </h2>
        <div className="contact_bar">
          <div className="contact_type">
            <p className="board_member">Address:</p>
            <p className="contact_type_detail">
              <em>1411 Hill Avenue</em>
              <br />
              <em>P.O. Box 163</em>
              <br />
              <em>Spirit Lake, IA 51360</em>
            </p>
          </div>
          <div className="contact_type">
            <h3 className="board_member">Phone:</h3>
            <p className="contact_type_detail">712-336-5340</p>
          </div>
          <div className="contact_type">
            <h3 className="board_member">Facebook:</h3>
            <p className="contact_type_detail">@DiscoveryHouse</p>
          </div>
          <div className="contact_type">
            <h3 className="board_member">eMail:</h3>
            <p className="contact_type_detail">
              <em>discoveryhousedirector@gmail.com</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
