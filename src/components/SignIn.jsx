import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInAction, setCurrentUser } from '../store/logInActions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const isLoad = useSelector((state) => state.logIn.isLoading);
    const isLogged = useSelector((state) => state.logIn.isLogged);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const login = () => {
        dispatch(logInAction())
        dispatch(setCurrentUser(userName));
    }

    useEffect(() => {
        if (isLogged) {
            navigate('/mainpage', {replace: true});
        }
    }, [isLogged])

    return (
    isLoad ? <span>loading...</span> :
        (<div className="signInDiv">
            <input type="text"
                   placeholder='user name'
                   className='inputSignIn'
                   value={userName}
                   onChange={(e) => setUserName(e.target.value)}
            />
            <input type="password"
                   placeholder='password'
                   className='inputSignIn'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={login} className='submitButton'>Submit</button>
        </div>)
)
}
