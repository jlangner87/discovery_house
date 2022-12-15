import HomeLink from '../components/homeLink'
import Contact from '../components/contact'

function Connect() {
  return (
    <div className="page">
      <HomeLink />
      <h1 className="page_title">We want to hear from you</h1>
      <div className="page_content_container">
        <h2 className="page_content_header">Ways you can get get in touch</h2>
        <h2 className="board_member" id="connect">
          Send us a message here
        </h2>
        <Contact />
        <div className="contact_bar">
          <div className="contact_type">
            <h3 className="board_member">Phone:</h3>
            <p className="page_content_text">712-336-5340</p>
          </div>
          <div className="contact_type">
            <h3 className="board_member">Facebook:</h3>
            <p className="page_content_text">@DiscoveryHouse</p>
          </div>
          <div className="contact_type">
            <h3 className="board_member">eMail Address:</h3>
            <p className="page_content_text">
              <em>discoveryhousedirector@gmail.com</em>
            </p>
          </div>
          <div className="contact_type">
            <p className="board_member">Address:</p>
            <p className="page_content_text">
              <em>1411 Hill Avenue</em>
              <br />
              <em>P.O. Box 163</em>
              <br />
              <em>Spirit Lake, IA 51360</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
