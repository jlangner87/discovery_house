import Nav from '../components/nav'

function Home() {
  return (
    <div className="page">
      <div className="welcome_message_container">
        <p className="welcome_message_text">
          Discovery House is a safe place for homeless individuals, alcoholics
          and addicts to get back on their feet, either before, during, or after
          completion of a treatment program.
        </p>
      </div>
      <Nav />
    </div>
  )
}

export default Home
