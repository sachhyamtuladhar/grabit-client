import React from 'react'

import LoginForm from '../components/LoginForm/LoginForm'


const login = () => {




   
        return (
            <div className ="row mt-5">
                <div className ="col-sm-4"></div>

                <div className ='card col-sm-4 mx-5' >
                    <div className ="card-body">
                        <LoginForm />
                    </div>
                </div>

                <div className ="col-sm-4"></div>

            </div>
        )
    
}

export default login
