import React from 'react'

import SignupForm from '../components/SignupForm/SignupForm'


const signUp = props => {
   

   
        return (
            <div className="row mt-5">
                <div className="col-md-2 col-lg-4"></div>

                <div className='card col-md-6 col-lg-4 mx-5' >
                        <div className="card-body">
                            <SignupForm title="Register" />
                        </div>
                </div>

                <div className="col-md-2"></div>

            </div>
        )
    
}

export default signUp
