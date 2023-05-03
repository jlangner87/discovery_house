import HomeLink from '../components/homeLink'
import Contact from '../components/contact'
import venmo_icon from '../elements/qr.png'

function Donate() {
  const exitAlert = () => {
    alert(
      'You are now leaving the Discovery House page and navigating to an external website.'
    )
  }
  return (
    <div className="page">
      <HomeLink />
      <h1 className="page_title">Support Discovery House</h1>
      <div className="page_content_container">
        <h2 className="page_content_header">Ways you can get involved</h2>
        <p className="page_content_text">
          We appreciate everyone who supports Discovery House financially,
          volunteering their time, serving meals, or with donations of food.{' '}
          <em>
            Discovery house is a recognized cheritable organization, and all
            contributions are tax-deductible.
          </em>
        </p>
        <p className="page_content_text">
          If you would like to support us financially, please submit your
          contribution via the link or mailing address below.
        </p>
        <div className="donation_container">
          <p className="donation_type">Donate Online</p>
          <p className="page_content_text">
            Send contributions electronically via Venmo:
          </p>
          <div id="paypal_container">
            <img src={venmo_icon} id="paypal" />
          </div>
          <p className="page_content_text">
            Scan the code above or visit our &nbsp;
            <a
              onClick={exitAlert}
              href="https://account.venmo.com/u/discoveryhouse"
            >
              Venmo page
            </a>
            .
          </p>
          <p className="donation_type">Donate by Mail</p>
          <p className="page_content_text">
            Mail contributions to:
            <br />
            <em>1411 Hill Avenue</em>
            <br />
            <em>P.O. Box 163</em> <br />
            <em>Spirit Lake, IA 51360</em>
          </p>
        </div>
        <p className="page_content_text">
          If you would like to volunteer your time or make a food donation,
          please let us know by sending us a message in the form below.
        </p>
        <Contact />
      </div>
    </div>
  )
}

export default Donate
