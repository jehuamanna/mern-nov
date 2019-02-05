import React from 'react'
import {connect} from 'react-redux'
import {addProject} from '../../actions/projects'
import ProjectForm from './form'


const ProjectAdd = (props) => {
    return (
        <div>
            <h2>Add Project</h2>
            <ProjectForm onSubmit={ (project) => {
                console.log(project)
                props.dispatch(addProject(project))
                props.history.push('/projects')
            }} /> 
        </div>
    )
}


export default connect()(ProjectAdd)