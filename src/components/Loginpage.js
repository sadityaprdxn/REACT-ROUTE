import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useHistory
} from 'react-router-dom';
import Data from '../data/userdata.json';

const Loginpage = ({login}) => {
    
    const history = useHistory();
    const [allFieldsRight , setField] = useState({usernameField: null , passwordField: null});
    const [values , setValues] = useState({username : "", password: ""})

    const userLogin = (e) => {
        e.preventDefault();

        for(let i = 0; i < Data.length; i++){

            const {username, password} = Data[i];

            if(values.username === username){
                setField({usernameField: "success" , passwordField: "error"});
                

                if(values.password === password) {
                    setField({usernameField: "success" , passwordField: "success"});
                    console.log(allFieldsRight);
                }
                break;
            } else {
                setField({usernameField: "error" , passwordField: "error"});
                console.log(allFieldsRight);
            }
        }
    }

    useEffect(() => {
        
            if(allFieldsRight.usernameField === "success" && allFieldsRight.passwordField === "success") {
                        
                login();
                history.push('/landingpage');
            }
        }
    )

    const controlField = (e) => {
        const value = e.target.value;
        const id = e.target.getAttribute('id');
        setValues((prevState) => {
            return({
                ...prevState,
                [id] : value
            })
        });
        console.log(values)
        setField({usernameField: null , passwordField: null});
    }

    return (
        <section className="login-page">
            <h2>click here to see the landing page</h2>
            <form>
                <div className={allFieldsRight.usernameField === "error" ? ("form-group error") : ("form-group")}>
                    <input type="text" id="username" placeholder="ENTER THE USERNAME" onChange={controlField} value={values.username} />
                    <span>please enter the valid user name</span>
                </div>
                <div className={allFieldsRight.passwordField === "error" ? ("form-group error") : ("form-group")}>
                    <input type="password" id="password" placeholder="ENTER THE PASSWORD" onChange={controlField} value={values.password}/>
                    <span>please enter the correct password</span>
                </div>
                <div className="form-control">
                    <button onClick={userLogin} type="submit">click me</button>
                </div>
            </form>
        </section>
    )
}

export default Loginpage;