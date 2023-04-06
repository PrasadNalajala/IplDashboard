// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = recentMatch

  // console.log(recentMatch)
  return (
    <div className="matchCard">
      <img
        src={competingTeamLogo}
        className="opponentLogo1"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competingTeam">{competingTeam}</p>
      <li>
        <p className="venue">{result}</p>
        <p className={matchStatus === 'Won' ? 'won' : 'lost'}>{matchStatus}</p>
      </li>
    </div>
  )
}

export default MatchCard
