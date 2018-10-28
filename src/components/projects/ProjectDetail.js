import React from 'react';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

const ProjectDetail = (props) => {
    const {project} = props;
    console.log(project)
    // console.log(props)
    if(project){
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        {project.title}
                    </span>
                    <p>{project.content}</p>
                    <div className="card-action grey lighten-3 grey-text">
                        <div>{project.authorFirstName}</div>
                        <div>time</div>
                    </div>
                </div>
            </div>
        </div>
    );
    }else{
        return(
            <div className="container center">
                <p>Loading</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return{
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: "projects"
    }])
)(ProjectDetail);
