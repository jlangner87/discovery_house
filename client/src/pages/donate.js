import HomeLink from '../components/homeLink'
import paypal_icon from '../elements/paypal_icon.png'

function Donate() {
  return (
    <div className="page">
      <HomeLink />
      <h1 className="page_title">Support Discovery House</h1>
      <div className="page_content_container">
        <h2 className="page_content_header">Ways you can get involved</h2>
        <div className="support_banner">
          <h3 className="page_content_subheader">Donate Money</h3>
          <h3 className="star">❖</h3>
          <h3 className="page_content_subheader">Volunteer</h3>
          <h3 className="star">❖</h3>
          <h3 className="page_content_subheader">Serve Meals</h3>
          <h3 className="star">❖</h3>
          <h3 className="page_content_subheader">Donate Food</h3>
        </div>
        <h3 className="page_content_header">Donate Money</h3>
        <p className="page_content_text">
          This is text... tax deductible contributions...
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
        <p className="donation_type">Donate Electronically</p>
        <p className="page_content_text">
          Send contributions electronically via PayPal:
        </p>
        <img src={paypal_icon} alt="paypal icon link" className="pay_icon" />
      </div>
    </div>
  )
}

export default Donate
