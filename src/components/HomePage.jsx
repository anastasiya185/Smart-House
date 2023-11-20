
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
    const navigate = useNavigate();


    const showSignInPage = () => {
        navigate('/signin')
    }
    const showSignUpPage = () => {
        navigate('/signup')
    }

    return (
        <div className="homePage">
            <div className="sideDiv leftSideDiv"> </div>
            <div className="centerContent">
                <button className='signInButton' onClick={showSignInPage}>SignIn</button>
                 <button className='signUpButton' onClick={showSignUpPage}>SignUp</button>
            </div>
            <div className="sideDiv rightSideDiv"></div>
        </div>
    )
}
