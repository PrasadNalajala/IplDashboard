// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = details
  // console.log(details)
  return (
    <div className="latest_match_container">
      <div>
        <h1 className="competingTeam">{competingTeam}</h1>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
        <p className="venue">{umpires}</p>
      </div>

      <img
        src={competingTeamLogo}
        className="competingTeamLogo"
        alt={`latest match ${competingTeam}`}
      />
      <div>
        <h1 className="innings">First Innings</h1>
        <p className="venue">{firstInnings}</p>
        <h1 className="innings">Second Innings</h1>
        <p className="venue">{secondInnings}</p>
        <h1 className="man">Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1 className="innings">Umpires</h1>
        <p className="venue">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
