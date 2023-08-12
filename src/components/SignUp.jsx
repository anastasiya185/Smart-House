import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {

    return (
        <div className="signUnDiv">
            <input type="text" placeholder='Enter user name' className='inputSignUp' />
            <input type="text" placeholder='Enter pasword' className='inputSignUp' />
            <input type="text" placeholder='Repeat pasword' className='inputSignUp' />
            <input type="text" placeholder='Enter Phone number' className='inputSignUp' />
            <input type="text" placeholder='Enter amail' className='inputSignUp' />


            <span className="createAccountLinkText">
                <Link to="/mainpage">Create an account</Link>
            </span>

            <span className='accountMessage'>Already have an account? </span>


        </div>
    )
}
