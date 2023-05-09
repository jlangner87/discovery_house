import Nav from '../components/nav'
import aa_splash from '../elements/aa_splash.png'
import steps_splash from '../elements/steps_splash.png'
import abuse_splash from '../elements/abuse_splash.png'
import chamber_splash from '../elements/chamber_splash.png'

function Links() {
  const exitAlert = () => {
    alert(
      'You are now leaving the Discovery House page and navigating to an external website.'
    )
  }

  return (
    <div className="page">
      <Nav />
      <h1 className="page_title">Helpful Links</h1>
      <div className="page_content_container">
        <h2 className="page_content_header">Great websites</h2>
        <h2 className="link_subheader">
          with information related to the Discovery House mission
        </h2>
        <div className="links_container">
          <div className="link_box">
            <a onClick={exitAlert} href="https://www.aa.org/">
              <h4 className="link_title">Alcoholics Anonymous</h4>
              <img src={aa_splash} className="link_splash" />
            </a>
          </div>
          <div className="link_box">
            <a onClick={exitAlert} href="https://12step.org/">
              <h4 className="link_title">The 12 Steps to Recovery</h4>
              <img src={steps_splash} className="link_splash" />
            </a>
          </div>
          <div className="link_box">
            <a onClick={exitAlert} href="https://yourlifeiowa.org/">
              <h4 className="link_title">
                Iowa Substance Abuse Information Center
              </h4>
              <img src={abuse_splash} className="link_splash" />
            </a>
          </div>
          <div className="link_box">
            <a onClick={exitAlert} href="http://www.slmainsail.com/">
              <h4 className="link_title">
                Spirit Lake Mainsail Chamber of Commerce
              </h4>
              <img src={chamber_splash} className="link_splash" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links
