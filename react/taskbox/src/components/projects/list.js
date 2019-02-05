import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {removeProject} from '../../actions/projects'


const ProjectList = (props) => {
    return (
        <div>
            <h2>Listing Projects -{props.projects.length}</h2>
            <ul>
                {props.projects.map(project => {
                    return <li key={project.id}>{project.name}
                    <button onClick={() => {
                        const confirmDelete = window.confirm("Are You Sure")
                        if(confirmDelete)
                            props.dispatch(removeProject(project.id))
                    }} >Delete</button></li>
                })}
            </ul>
            <Link to="/projects/new" > Add project</Link>
            
        </div>

    )
}

// Higher Order Component - HOC
// a component that will return another component
const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}


export default connect(mapStateToProps)(ProjectList)