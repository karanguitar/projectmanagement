import React, { Component } from 'react';
import {createProject} from '../../store/actions/ProjectActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class CreateProject extends Component {
    
    state ={
        title: "",
        content: ""
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    
    
    render() {
        const {auth} = this.props
        if(auth.uid){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        New Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );}else{
            return <Redirect to="/login" />
        }
    }
}

const matchStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

const matchDispatchToProps = (dispatch)=>{
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(CreateProject);
