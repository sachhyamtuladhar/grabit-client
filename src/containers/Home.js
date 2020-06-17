import React, { Component, Fragment } from 'react'

import {connect} from 'react-redux'

import { Link } from 'react-router-dom'



class Home extends Component {
    render() {
        
        let home = (
            <Fragment>
                <Link 
                    to='/login'
                    className="btn btn-success"
                    >
                    Login
                </Link>
                <Link 
                    to='/register'
                    className="btn btn-success"
                    >
                    Signup
                </Link>
            </Fragment>
        )
        
        if(this.props.user)
            home = (
                <Fragment>
                    <h1>Welcome {this.props.user.data.name }</h1>
                    <div className = "btn btn-danger">Logout</div>        
                </Fragment>
            )




        return (
            <div className="d-flex mt-5 justify-content-around">
                {home}
            </div>)
        
    }
}

const mapStatetoProps = state => {
    return{
        user: state.auth.user,
    }
}

export default connect(mapStatetoProps)(Home)
