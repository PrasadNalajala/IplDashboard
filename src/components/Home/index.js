// Write your code here
import {Component} from 'react'

import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.fetchTeams()
  }

  fetchTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsList = data.teams
    const convertedTeams = teamsList.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teams: convertedTeams, isLoading: false})
    // console.log(convertedTeams)
  }

  render() {
    const {teams, isLoading} = this.state
    // console.log(teams)
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="home-bg">
        <div className="dashboard-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="teams-container">
          {teams.map(each => (
            <TeamCard teamItem={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
