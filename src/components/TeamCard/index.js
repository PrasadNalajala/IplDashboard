// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamItem} = props
  const {teamImageUrl, name, id} = teamItem
  return (
    <Link to={`/team-matches/${id}`} className="teamCard">
      <img src={teamImageUrl} alt={name} className="teamlogo" />
      <li>
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
