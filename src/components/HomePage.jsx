import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function HomePage() {
    //!todo need to move all states to app and create contex here
    const [showEntry, setShowEntry] = useState(false)
    const [showRegistration, setShowRegistration] = useState(false)
    const [showButtonEntry, setShowButtonEntry] = useState(true)
    const [showButtonRegistration, setShowButtonRegistration] = useState(true)


    const showSignInPage = () => {
        setShowEntry(true);
        setShowRegistration(false);
        setShowButtonEntry(false)
        setShowButtonRegistration(true)
    }
    const showSignUpPage = () => {
        setShowRegistration(true);
        setShowEntry(false);
        setShowButtonRegistration(false)
        setShowButtonEntry(true)
    }
    return (
        //!todo here i need to move the logic of appearance element 
        <div className="homePage">
            <div className="sideDiv leftSideDiv"> </div>
            <div className="centerContent">
                {showEntry && <SignIn />}
                {showRegistration && <SignUp />}
                {showButtonEntry && <button className='signInButton' onClick={showSignInPage}>SignIn</button>}
                {showButtonRegistration && <button className='signUpButton' onClick={showSignUpPage}>SignUp</button>}
            </div>
            <div className="sideDiv rightSideDiv"></div>
        </div>
    )
}
