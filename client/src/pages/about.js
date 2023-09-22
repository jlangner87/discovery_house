import Nav from '../components/nav'
import flourish from '../elements/flourish.png'
import woman from '../elements/woman.png'
import man from '../elements/man.png'
import mission from '../elements/mission.png'
import historyIcon from '../elements/history.png'
import residency from '../elements/residency.png'
import faq from '../elements/faq.png'
import people from '../elements/people.png'

function About() {
  const exitAlert = () => {
    alert(
      'You are now leaving the Discovery House page and navigating to an external website.'
    )
  }
  return (
    <div className="page">
      <Nav />
      <h1 className="page_title">About Discovery House</h1>
      <div className="page_content_container">
        <img className="header_img" src={mission} />
        <h2 className="page_content_header">Our Mission</h2>
        <img className="flourish" src={flourish} />
        <p className="page_content_text">
          Discovery House provides a safe, supportive, Christian environment for
          homeless adults and those recovering from addictions. Residents
          receive counseling and the tools to begin to build a new foundation
          for a better life.
        </p>
      </div>
      <div className="page_content_container">
        <img className="header_img" src={historyIcon} />
        <h2 className="page_content_header">Our History</h2>
        <img className="flourish" src={flourish} />
        <p className="page_content_text">
          Discovery House, in Spirit Lake, Iowa, provides transitional housing
          for up to six months for homeless men and women and for those who are
          in recovery from alcoholism and other addictions. They may or may not
          have completed a substance abuse treatment program. The program offers
          case management to help residents set realistic goals for obtaining
          steady employment and position themselves for self-sufficiency upon
          leaving the program.
        </p>
        <p className="page_content_text">
          Phyllis Kempema, a recovered alcoholic, who wanted to help alcoholics,
          drug addicts, and homeless individuals get back on their feet and
          overcome their addictions, started discovery House. Discovery House is
          a homeless shelter and sober living environment with a maximum
          capacity of 14 residents. It is open to men and women from Northwest
          Iowa, Southern Minnesota, and surrounding states. It is the only such
          facility in the area.
        </p>
      </div>
      <div className="page_content_container">
        <h2 className="page_content_header">Locations</h2>
        <img className="flourish" src={flourish} />
        <h2 className="staff_type">Spirit Lake, Iowa</h2>
        <p className="page_content_text">123 Some Street</p>
        <p className="page_content_text">Spirit Lake, IA 51360</p>
        <p className="page_content_text">Place a map here</p>
        <h2 className="staff_type">Spencer, Iowa</h2>
        <p className="page_content_text">123 Some Street</p>
        <p className="page_content_text">Spencer, IA 51301</p>
        <p className="page_content_text">Place a map here</p>
      </div>
      <div className="page_content_container">
        <img className="header_img" src={residency} />
        <h2 className="page_content_header">Residency Info</h2>
        <img className="flourish" src={flourish} />
        <p className="page_content_text">
          Residents have access to shower and laundry facilities, mail delivery,
          emergency food supplement, telephone, clothing, toiletries, counseling
          services, transportation assistance, financial planning, and life
          skills training. In addition, referrals are made to support service
          agencies in the community for food, clothing, health care, financial
          planning/budgeting, employment, and housing.
        </p>
        <p className="page_content_text">
          Residents are required to follow the guidelines of the house, attend
          12 Step meetings, stay clean and sober, and learn accountability
          through holding a job. An alcoholic or drug addict may come to
          Discovery House after completing a treatment program as part of their
          aftercare, or continuing care plan.
        </p>
        <p className="page_content_text">
          Individuals in the criminal justice system are also admitted as part
          of their parole plan. They must be involved in a prison ministry prior
          to being discharged from prison and have a support system established
          in the community.
        </p>
        <p className="page_content_text">
          All of the residents at Discovery House receive weekly Christian
          counseling and attend Bible study. A group meal is provided once a
          week and participation in counseling and Bible study, and attendance
          at the house meal are all mandatory. Weekly church attendance and
          worship are also required.
        </p>
        <p className="page_content_text">
          No drugs or alcohol are allowed on the premises, and if residents are
          found to be in violation of this, they are asked to leave. Residents
          in recovery from addictions are required to attend three 12 Step
          support group meetings per week and obtain a sponsor/mentor.
        </p>
        <p className="page_content_text">
          Rent is $50.00 per week, and all residents work on the process of
          becoming self-sufficient within six months. Curfew is 11:00 p.m.,
          unless residents work the night shift.
        </p>
      </div>
      <div className="page_content_container">
        <img className="header_img" src={faq} />
        <h2 className="page_content_header">Frequently Asked Questions</h2>
        <img className="flourish" src={flourish} />

        <p className="page_content_text">
          Discovery House is dependent upon public and private donations,
          fundraisers, and grants for operational expenses. An average of eight
          residents are served per month.
        </p>
        <p className="page_content_text">
          Discovery House is a Christian-based, non-profit organization with a
          ten member Board of Directors who oversees its operation.
        </p>
        <p className="page_content_text">
          Director, Jessica… something something something…
        </p>
      </div>
      <div className="page_content_container">
        <img className="header_img" src={people} />
        <h2 className="page_content_header">Meet the People</h2>
        <img className="flourish" src={flourish} />

        <h2 className="staff_type">Discovery House Board</h2>
        <div className="board_member_container">
          <img className="profile-img" src={man} />
          <h4 className="board_member">
            Bob Shaw ⎯ <em>Present of Board</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
        <div className="board_member_container">
          <img className="profile-img" src={man} />
          <h4 className="board_member">
            Kurt Wiegers ⎯ <em>Treasurer</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
        <div className="board_member_container">
          <img className="profile-img" src={man} />
          <h4 className="board_member">
            Mick McCleery ⎯ <em>Board Member</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
        <div className="board_member_container">
          <img className="profile-img" src={man} />
          <h4 className="board_member">
            Gary Caviness ⎯ <em>Board Member</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
        <div className="board_member_container">
          <img className="profile-img" src={woman} />
          <h4 className="board_member">
            Beth Will ⎯ <em>Board Member</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
        <div className="board_member_container">
          <img className="profile-img" src={woman} />
          <h4 className="board_member">
            Donna Davis ⎯ <em>Board Member</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
        <h2 className="staff_type">Discovery House Staff</h2>
        <div className="board_member_container">
          <img className="profile-img" src={woman} />
          <h4 className="board_member">
            Jessica Amendt ⎯ <em>Executive Program Director</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
        <div className="board_member_container">
          <img className="profile-img" src={woman} />
          <h4 className="board_member">
            Shelby Reese ⎯ <em>Assistant Director</em>
          </h4>
          <p className="page_content_text">
            Bio information here... It could be an interesting fact about the
            person, a favorite quote or bible verse, or anything... or I can
            take it out.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
