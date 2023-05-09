import Nav from '../components/nav'
import Contact from '../components/contact'
import venmo_icon from '../elements/qr.png'
import amazon_logo from '../elements/amazon-logo.png'

//TODO AMAZON WISHLIST LINKED

function Donate() {
  const exitAlert = () => {
    alert(
      'You are now leaving the Discovery House page and navigating to an external website.'
    )
  }
  return (
    <div className="page">
      <Nav />
      <h1 className="page_title">Support Discovery House</h1>
      <div className="page_content_container">
        <h2 className="page_content_header">Ways you can get involved</h2>
        <p className="page_content_text">
          We appreciate everyone who supports Discovery House financially, by
          volunteering their time, serving meals, or with donations of food.{' '}
          <em>
            Discovery house is a recognized cheritable organization, and all
            contributions are tax-deductible.
          </em>
        </p>
        <p className="page_content_text">
          If you would like to support Discovery House, please explore the ways
          you can get involved below.
        </p>
        <div className="donation_type_container">
          <p className="donation_type">Donate Online</p>
          <p className="page_content_text">
            Send contributions electronically via Venmo:
          </p>
          <img src={venmo_icon} id="paypal" />
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
        </div>

        <div className="donation_type_container">
          <p className="donation_type">Donate Supplies</p>
          <p className="page_content_text">
            Ship essential items directly from Amazon:
          </p>
          <img id="wishlist" src={amazon_logo} />
          <p className="page_content_text">
            Our Amazon Wishlist is made up of the many items that are needed for
            day-to-day operation. This wishlist makes it easy for supporters to
            make meaningful and practical donations with just a few clicks.
          </p>
        </div>

        <div className="donation_type_container">
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
        <div className="donation_type_container">
          <p className="donation_type">Other ways to support</p>
          <p className="page_content_text">
            If you would like to volunteer your time, make a food donation, or
            if you have a creative way that you want to get involved, please let
            us know by sending us a message in the form below.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default Donate
