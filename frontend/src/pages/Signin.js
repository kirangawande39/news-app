import React, { useState } from 'react';
import './signin.css';


export default function Signin() {


    return (
        <div>

            <div className="contaner">
                <div>
                    <h2>Sign in</h2>
                </div>
                <form action="/p1.png" method="post" onsubmit=" return validform() ">
                    <input id="user" type="text" name="user" placeholder="Username" /> <br />
                    <label id="Usererror" className="error"></label>
                    <input id="pass" type="password" name="pass" placeholder="Password" /><br />
                    <label id="Passerror" className="error"></label>
                    <input id="btn" type="submit" value="Submit" />
                </form>
            </div>
        </div>

    );
}


