import React, { Component } from 'react';
import {connect } from 'react-redux'

import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
    
    render() {
        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
                {console.log(this.props)}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        projects : state.projects.projects
    }
}

export default connect(mapStateToProps)(Dashboard);