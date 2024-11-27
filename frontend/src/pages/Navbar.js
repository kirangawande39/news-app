import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signin.css';
import './signup.css';




export default function Navbar() {


    let [inputValue, setInputValue] = useState('')
    let [signinPage, setSigninPage] = useState(false)
    let [signupPage, setSignupPage] = useState(false)
    let [countrs , setCountry]=useState('')
    console.log(signinPage)
    let input = inputValue
    const handleinputchange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearchBtn = (event) => {
        event.preventDefault();

        setInputValue(' ');
    }
    
    const handleCountrySelect = (e) => {
        let conCountryChange=e.target.value;
        // console.log(conCountryChange)
        setCountry(conCountryChange)
    };
     console.log(countrs)
      let con=countrs;
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Kal-Tak</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>

                        </ul>
                        <select style={{width:'300px', marginRight:'20px'}} className="form-select model-sm" aria-label="Default select example" onChange={handleCountrySelect}>
                            <option value="" disabled selected>Select Country</option>
                            <option value="in">India</option>
                            <option value="us">USA</option>
                            <option value="ca">Canada</option>
                            <option value="ch">China</option>
                        </select>
                        <form className="d-flex gap-2" role="search">
                            {/* <input className="form-control me-2" value={inputValue} onChange={handleinputchange} type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success btn-sm" onClick={handleSearchBtn} type="submit">Search</button> */}
                            <button type="button" onClick={() => setSignupPage(true)} className="btn btn-primary btn-sm ">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div>
                <div className={`contaner ${signinPage ? 'show_container' : ''}`}>
                    <div>
                        <h2>Sign in</h2>
                        <p className='closebtn' onClick={() => setSigninPage(false)} >&#x2716;</p>
                    </div>
                    <form action="" >
                        <input id="user" type="text" name="user" placeholder="Username" /> <br />
                        <label id="Usererror" ></label>
                        <input id="pass" type="password" name="pass" placeholder="Password" /><br />
                        <label id="Passerror" ></label>
                        <input id="btn" type="submit" value="Submit" />

                    </form>
                </div>
                <div className={`contaners ${signupPage ? 'show_containers' : ''}`}>
                    <div>
                        <h2>Sign Up</h2>
                        <p className='closebtn' onClick={() => setSignupPage(false)} >&#x2716;</p>
                    </div>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder="Enter your Email" /><br />
                        <p id="emailerror" className="error"></p>

                        <input type="password" name="password" id="password" placeholder="Password" /><br />
                        <p id="passworderror" className="error"></p>

                        <input type="password" name="password" id="cpassword" placeholder="Confirm Password" /><br />
                        <p id="cpasserror" className="error"></p>

                        <span>Already Acount  <button type="button" onClick={() => setSigninPage(true)} className="btn btn-info btn-sm ">Sign up</button></span><br />
                        <input type="submit" id="btn" />
                    </form>
                </div>
            </div>

        </div>



    )
}


