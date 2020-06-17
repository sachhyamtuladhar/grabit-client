import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import * as actionCreators from '../store/actions/authActions'

class Home extends Component {

    componentDidMount(){
        console.log('did mount')
        this.props.loadUser()
    }
    

    render() {
        if(this.props.user && this.props.user.data)
            console.log(this.props.user.data.name)
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
        
        if(this.props.user && this.props.user.data)
            home = (
                <Fragment>
                    <h1>Welcome {this.props.user.data.name }</h1>
                    <div className = "btn btn-danger" onClick={this.props.onLogout}>Logout</div>        
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

const mapDispatchtoProps = dispatch => {
    return {
        loadUser: () => dispatch(actionCreators.loadUser()),
        onLogout: () => dispatch(actionCreators.logOut()),
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Home)
