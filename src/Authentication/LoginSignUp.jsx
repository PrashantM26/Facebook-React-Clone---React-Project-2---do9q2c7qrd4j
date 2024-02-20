import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginSignUp.css'
import Modal from '@mui/material/Modal';
import { EssentialsContext } from "../Context/EssentialsProvider";

export const Login = () => {
    const [show, setShow] = useState(false);
    const [loginInputData, setLoginInputData] = useState({ email: '', password: ''});
    const {setIsLoggedIn} = useContext(EssentialsContext);
    const navigate = useNavigate();

    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    };

    const createLoginUser = (e, userData) => {
        //console.log("LOGIN USER DATA", userData);
        e.preventDefault();
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                projectID: "ktu17k7gadkn"
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
                appType: 'facebook',
            }),
        }
        fetch('https://academics.newtonschool.co/api/v1/user/login',
            config,
        )
        .then((response) => response.json())
        .then((data) => {
            const token = data.token;
            if(token){
                sessionStorage.setItem("token", JSON.stringify(token));
                sessionStorage.setItem("userInfo", JSON.stringify(data.data));
                setIsLoggedIn(true);
                navigate('/mainpage/homepage');
            }
            else{
                alert("Check your credentials");
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    }

    return (
        <div className="main-page-login">
            <div className="login-signup-icon-container">
                <div className="facebook-icon-dec">
                    <div className="facebook-icon">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" />
                    </div>
                    <div className="facebook-dec">
                        <h2>Facebook helps you connect and share with the people in your life.</h2>
                    </div>
                </div>
                <div className="login-signup-container">
                    <div className="login-signup-border">
                        <form className="login-main" onSubmit={(e) => createLoginUser(e,loginInputData)}>
                            <input type="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder="Email address or phone number" onChange={handleLoginInputChange} />
                            <input type="password" name="password" placeholder="Password" onChange={handleLoginInputChange} />
                            <button type="submit" className="login-button" >Log in</button>
                        </form>
                        <p className="forgot-pass">Forgotten password?</p>
                        <hr></hr>
                        <button className="create-acc-button" onClick={() => setShow(!show)}>Create new account</button>
                        {show && <SignUp setShow={setShow} show={show}/>}
                    </div>
                    <div className="create-page">
                        <a className="create-page-link">Create a page</a> for a celebrity, brand or business.
                    </div>
                </div>
            </div>
        </div>

    )
}




export const SignUp = ({ setShow, show }) => {
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(EssentialsContext);
    const [selectedGender, setSelectedGender] = useState(null);
    const [formSignUpData, setFormSignUpData] = useState({ firstName: '', lastName: '', email: '', password: '' })
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const years = Array.from({ length: 120 }, (_, index) => 2024 - index);

    const createSignUpUser = (userData) => {
        //console.log("userData",userData);
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                projectID: "ktu17k7gadkn"
            },
            body: JSON.stringify({
                name: userData.username,
                email: userData.email,
                password: userData.password,
                appType: 'facebook',
            }),
        }
        fetch('https://academics.newtonschool.co/api/v1/user/signup',
            config,
        )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const token = data.token;
            if(token){
                sessionStorage.setItem("token", JSON.stringify(token));
                sessionStorage.setItem("userInfo", JSON.stringify(data.data.user));
                setShow(!show);
                setIsLoggedIn(true);
                navigate('/mainpage/homepage');
            }
            else{
                alert("User already exists");
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

    }

    const handleSignUpInputChange = (e) => {
        const { name, value } = e.target;
        setFormSignUpData((prevData) => ({
            ...prevData,
            [name]: value,
            username: name === 'firstName' ? (prevData.lastName && value!=='' ? `${value} ${prevData.lastName}` : value) : name==='lastName' ? (prevData.firstName  && value!=='' ? `${prevData.firstName} ${value}` : `${prevData.firstName}`) : `${prevData.username}`,
        }))
    };
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if(!formSignUpData.username || !formSignUpData.email || !formSignUpData.password || !selectedGender){
            alert("Please fill all the fields");
        }
        else{
            createSignUpUser(formSignUpData);
        }
    };

    return(
        <Modal open={show}>
            <div className="signup-page">
                <div className="signup-header">
                    <div className="signup-h1">Sign Up</div>
                    <div className="signup-h2">It's quick and easy.</div>
                    <img className="signup-close" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/C6QZ-pcv3Bd.png" alt="" width="24" height="24" 
                        onClick={() => setShow(!show)}
                    />
                </div>
                <form onSubmit={handleSignUpSubmit}>
                    <div className="signup-info-body">
                        <div className="su-first-last-name">
                            <input type="text" name="firstName" className="su-input" placeholder="First name" onChange={handleSignUpInputChange} />
                            <input type="text" name="lastName" className="su-input" placeholder="Surname" onChange={handleSignUpInputChange} />
                        </div>
                        <div className="su-mobile-email">
                            <input type="email" name="email" className="su-input" placeholder="Mobile number or email address" onChange={handleSignUpInputChange} />
                        </div>
                        <div className="su-password">
                            <input type="password" name="password" className="su-input" placeholder="New password" onChange={handleSignUpInputChange} />
                        </div>
                        <div className="su-dob">
                            <div className="su-dob-text">
                                Date of birth
                                <i
                                    style={{
                                        textAlign: 'left',
                                        fontWeight: 'normal',
                                        color: '#385898',
                                        fontSize: 'inherit',
                                        lineHeight: '12px',
                                        fontFamily: 'inherit',
                                        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/5iQ0_SR0TRq.png)',
                                        backgroundSize: '24px 80px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block',
                                        width: '12px',
                                        height: '12px',
                                        backgroundPosition: '0 -66px',
                                        cursor: 'not-allowed'
                                    }} >
                                </i>
                            </div>
                            <div className="su-dob-select">
                                <select className="su-select">
                                    {days.map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>

                                <select className="su-select">
                                    {months.map((month, index) => (
                                        <option key={index} value={index + 1}>{month}</option>
                                    ))}
                                </select>
                                <select className="su-select">
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="su-gender">
                            <div className="su-gender-text">
                                Gender
                                <i
                                    style={{
                                        textAlign: 'left',
                                        fontWeight: 'normal',
                                        color: '#385898',
                                        fontSize: 'inherit',
                                        lineHeight: '12px',
                                        fontFamily: 'inherit',
                                        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/5iQ0_SR0TRq.png)',
                                        backgroundSize: '24px 80px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block',
                                        width: '12px',
                                        height: '12px',
                                        backgroundPosition: '0 -66px',
                                    }} >
                                </i>
                            </div>
                            <div className="su-gender-radio">
                                <span className="su-radio">
                                    <label>Female</label>
                                    <input type="radio" value="female" checked={selectedGender === 'female'} onChange={(e) => setSelectedGender(e.target.value)} />
                                </span>
                                <span className="su-radio">
                                    <label>Male</label>
                                    <input type="radio" value="male" checked={selectedGender === 'male'} onChange={(e) => setSelectedGender(e.target.value)} />
                                </span>
                                <span className="su-radio">
                                    <label>Custom</label>
                                    <input type="radio" value="custom" checked={selectedGender === 'custom'} onChange={(e) => setSelectedGender(e.target.value)} />
                                </span>
                            </div>
                        </div>
                        <div className="su-privacy-text">
                            <p>People who use our service may have uploaded your contact information to Facebook. <a>Learn more</a>.
                            </p>
                        </div>
                        <div className="su-termsC-text">
                            <p>By clicking Sign Up, you agree to our <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                        </div>
                        <div className="su-button">
                            <button type="submit">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}