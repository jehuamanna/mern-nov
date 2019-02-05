import React from 'react'
import { connect } from 'react-redux';

const Dashboard = (props) => {
    return (
        <div>
            <h2>Dashboard goes here</h2>
            <h3>Recently added projects</h3>
            <p>{props.project && <span>{props.project.name}- ({props.project.description})</span> }</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        project: state.projects[state.projects.length -1]
    }
}

export default connect(mapStateToProps)(Dashboard)