import Nav from '../components/nav'
import landscape from '../elements/landscape.jpg'

// separate words on nav tiles

function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="welcome_message_container">
        <p>
          Discovery House is a safe place for homeless individuals, alcoholics
          and addicts to get back on their feet, either before, during, or after
          completion of a treatment program.
        </p>
        <img src={landscape} />
      </div>
    </div>
  )
}

export default Home
