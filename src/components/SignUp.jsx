import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();

    const showMainPage = () => {
        navigate('/mainpage')
    }

    return (
        <div className="signUnDiv">
            <input type="text" placeholder='Enter user name' className='inputSignUp' />
            <input type="password" placeholder='Enter pasword' className='inputSignUp' />
            <input type="password" placeholder='Repeat pasword' className='inputSignUp' />
            <input type="text" placeholder='Enter Phone number' className='inputSignUp' />
            <input type="text" placeholder='Enter amail' className='inputSignUp' />


            <button className='CreateAccountButton' onClick={showMainPage}>Create an account</button>


            <span className='accountMessage'>Already have an account?! <span><Link to="/signin">Sign In</Link></span> </span>


        </div>
    )
}
