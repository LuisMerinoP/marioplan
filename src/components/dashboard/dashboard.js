import React, {Component } from 'react'
import Notifications from './notifications'
import ProjectList from '../projects/projectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { projects } = this.props;
    return (
      <div className= "dashboar container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects}/>
          </div>
          <div className="div col s12 m5 offset-m1">
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard);