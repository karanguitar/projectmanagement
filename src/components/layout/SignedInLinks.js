import React from 'react';
import {NavLink} from 'react-router-dom'
import {signOut} from '../../store/actions/authActions'
import {connect} from 'react-redux'

const SignInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create" >New Project</NavLink></li>
            <li><a onClick={props.signOut}  >Log out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">KD</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);
