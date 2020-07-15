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
    const [allFieldsRight , setField] = useState({usernameField: null , passwordField: null , userid: null});
    const [values , setValues] = useState({username : "", password: ""})

    const userLogin = (e) => {
        e.preventDefault();

        for(let i = 0; i < Data.length; i++){

            const {username, password, id} = Data[i];

            if(values.username === username){
                setField({usernameField: "success" , passwordField: "error" , userid: null});
                

                if(values.password === password) {
                    setField({usernameField: "success" , passwordField: "success" , userid: id});
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
                        
                const auth = {user: allFieldsRight.userid, isLogin: true };
                login(auth);
                const stringifyAuth = JSON.stringify(auth);
                window.localStorage.setItem("SESSION" , stringifyAuth);
                history.push(`/landingpage/${allFieldsRight.userid}`);
            }
        }
    )

    useEffect(() => {
        if(window.localStorage['SESSION']) {
        
        const auth = JSON.parse(window.localStorage.getItem("SESSION"))
        if(auth.isLogin === true) {
            login(auth);
            history.push(`/landingpage/${auth.userid}`);
        }
        }
    }, []);

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