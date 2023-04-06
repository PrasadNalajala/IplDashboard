// Write your code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamDetails: {},
    latestMatchDetails: {},
    recentMatches: [],
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeamDetails()
    // console.log('triggered')
  }

  fetchTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({teamId: id})
    const updatedTeamDetails = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetails: updatedTeamDetails, isLoading: false})
    const {teamDetails} = this.state
    const {latestMatchDetails, recentMatches} = teamDetails
    const updatedLatestMatches = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      latestMatchDetails: updatedLatestMatches,
      recentMatches: updatedRecentMatches,
    })
    // console.log(recentMatches[3])
  }

  render() {
    // console.log('triggered')
    const {
      teamDetails,
      latestMatchDetails,
      recentMatches,
      teamId,
      isLoading,
    } = this.state
    const {teamBannerUrl} = teamDetails

    // console.log(this.state)
    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-card ${teamId}`}>
            <img src={teamBannerUrl} className="teamBanner" alt="team banner" />
            <h1 className="latest">Latest Matches</h1>
            <LatestMatch details={latestMatchDetails} />
            <div className="latest_matches">
              {recentMatches.map(each => (
                <MatchCard recentMatch={each} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
